interface YouTubeVideoProps {
  videoId: string;
  title?: string;
  className?: string;
}

export default function YouTubeVideo({ videoId, title = "Video", className = "" }: YouTubeVideoProps) {
  return (
    <div className={`w-full ${className}`}>
      <div className="relative w-full overflow-hidden rounded-lg shadow-lg" style={{ paddingBottom: "56.25%" }}>
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src={`https://www.youtube.com/embed/${videoId}?si=oNbeXAdR0B9Ks-Hy`}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
    </div>
  );
}
