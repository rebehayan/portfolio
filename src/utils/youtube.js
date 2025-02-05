const API_KEY = "AIzaSyDI8MNdKDNjJ3iPbFInBxJirp7AYxo-OhY"; // Youtube API
const USERNAME = "rebehayan";
const CHANNEL_ID = "UCq7-gOh15ChDcFJ9xN9SYmg";

export async function getChannelId() {
  const url = `https://www.googleapis.com/youtube/v3/search?part=id&type=channel&q=${USERNAME}&key=${API_KEY}`;

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

let VideoCount;
async function getVideoCount() {
  const url = `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${CHANNEL_ID}&key=${API_KEY}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    VideoCount = data.items[0].statistics.videoCount;

    return data;
  } catch (error) {
    console.error("API 요청 실패:", error);
  }
}

export default VideoCount;

export async function getLatestVideos(length) {
  const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${CHANNEL_ID}&order=date&maxResults=${length}&key=${API_KEY}`;

  const response = await fetch(url);
  const data = await response.json();

  return data;
}
