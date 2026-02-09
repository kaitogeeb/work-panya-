interface BookCardProps {
  image: string;
  title?: string;
  author?: string;
  isNewRelease?: boolean;
  size?: "large" | "small";
  overlayText?: boolean;
  buyUrl?: string;
}

const BookCard = ({ 
  image, 
  title, 
  author, 
  isNewRelease = false, 
  size = "large",
  overlayText = false,
  buyUrl
}: BookCardProps) => {
  const sizeClasses = size === "large" 
    ? "w-full max-w-[280px]" 
    : "w-full max-w-[200px]";

  return (
    <div className={`book-card relative ${sizeClasses}`}>
      {isNewRelease && (
        <span className="badge-new-release absolute top-3 right-3 z-10">
          Coming Soon
        </span>
      )}
      
      <div className="relative overflow-hidden rounded-lg shadow-xl">
        <img 
          src={image} 
          alt={title || "Book cover"} 
          className="w-full h-auto object-cover aspect-[2/3]"
        />
        
        {overlayText && title && (
          <div className="absolute inset-0 flex flex-col justify-between p-4 bg-gradient-to-t from-black/40 via-transparent to-transparent">
            <div />
            <div className="text-center">
              {title && (
                <h3 className="font-serif text-lg font-semibold text-white drop-shadow-lg">
                  {title}
                </h3>
              )}
              {author && (
                <p className="text-sm text-white/90 mt-1 drop-shadow">
                  {author}
                </p>
              )}
            </div>
          </div>
        )}
      </div>
      {buyUrl && title && (
        <a
          href={buyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 block text-center text-sm font-medium underline"
          style={{ color: "hsl(var(--teal-dark))" }}
        >
          Buy {title} here
        </a>
      )}
    </div>
  );
};

export default BookCard;
