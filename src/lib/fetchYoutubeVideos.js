export async function fetchYoutubeVideos() {
  const API_KEY = process.env.YOUTUBE_API_KEY;
  const PLAYLIST_ID = "UUNKD4zTYuRz5DAjofClGIOQ";

  const url = `https://www.googleapis.com/youtube/v3/playlistItems?key=${API_KEY}&playlistId=${PLAYLIST_ID}&part=snippet&maxResults=3`;

  const res = await fetch(url);
  const data = await res.json();

  if (!data.items) return [];

  return data.items.map((item) => ({
    id: item.snippet.resourceId.videoId,
    title: item.snippet.title,
    thumbnail: item.snippet.thumbnails.high.url,
    publishedAt: item.snippet.publishedAt,
  }));
}
