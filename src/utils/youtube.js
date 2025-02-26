const apikey = import.meta.env.VITE_API_KEY;
const username = import.meta.env.VITE_USERNAME;
const channelID = import.meta.env.VITE_CHANNEL_ID;

export async function getChannelId() {
  const url = `https://www.googleapis.com/youtube/v3/search?part=id&type=channel&q=${username}&key=${apikey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    if (data.items && data.items.length > 0) {
      console.log(`채널 ID: ${data.items[0].id.channelId}`);
    } else {
      console.log("채널 ID를 찾을 수 없습니다.");
    }
  } catch (error) {
    console.error("API 요청 실패:", error);
  }
}

export async function getVideoCount() {
  const url = `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${channelID}&key=${apikey}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP 오류! 상태 코드: ${response.status}`);
    }

    const data = await response.json();

    if (!data.items || data.items.length === 0) {
      throw new Error("API 응답이 비어 있음");
    }

    return data.items[0].statistics.videoCount;
  } catch (error) {
    console.error("API 요청 실패:", error);
    return null;
  }
}

export async function getLatestVideos(length) {
  const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelID}&order=date&maxResults=${length}&key=${apikey}`;

  const response = await fetch(url);
  const data = await response.json();

  return data;
}
export async function getPlaylists() {
  const url = `https://www.googleapis.com/youtube/v3/playlists?part=snippet,contentDetails&channelId=${channelID}&maxResults=50&key=${apikey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.items) {
      return data.items.map((playlist) => ({
        id: playlist.id, // 재생목록 ID
        title: playlist.snippet.title, // 재생목록 제목
        thumbnail: playlist.snippet.thumbnails.high.url, // 재생목록 썸네일
        url: `https://www.youtube.com/playlist?list=${playlist.id}`, // 재생목록 링크
        videoCount: playlist.contentDetails.itemCount, // 재생목록의 영상 개수
        description: playlist.snippet.description, // 재생목록 설명
      }));
    } else {
      return [];
    }
  } catch (error) {
    console.error("API 요청 실패:", error);
    return [];
  }
}
