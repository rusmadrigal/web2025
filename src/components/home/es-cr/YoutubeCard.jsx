export default function YoutubeCard({ video }) {
  return (
    <div className="rounded-xl overflow-hidden bg-white dark:bg-nightBlack shadow-md hover:shadow-lg transition-shadow duration-300">
      <a
        href={`https://www.youtube.com/watch?v=${video.id}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col h-full"
      >
        <img
          src={video.thumbnail}
          alt={video.title}
          className="w-full h-48 object-cover"
        />
        <div className="flex flex-col justify-between flex-1 p-4">
          <h3 className="text-base font-semibold text-black dark:text-white line-clamp-2 text-center">
            {video.title}
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-3 text-center">
            {new Date(video.publishedAt).toLocaleDateString("es-CR")}
          </p>
        </div>
      </a>
    </div>
  );
}
