const apikey = import.meta.env.REACT_APP_API_KEY;
const username = import.meta.env.REACT_APP_USERNAME;
const channelID = import.meta.env.REACT_APP_CHANNEL_ID;

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
    const data = await response.json();
    console.log(data);

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
