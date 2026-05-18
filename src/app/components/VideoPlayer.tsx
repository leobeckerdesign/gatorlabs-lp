import { useState } from "react";
import capaImg from "../../assets/capa.jpg";

interface VideoPlayerProps {
  videoId: string;
}

export function VideoPlayer({ videoId }: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  const embedUrl = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&playsinline=1&iv_load_policy=3`;

  return (
    <div className="relative w-full aspect-[392/217] border border-[#00201c] overflow-hidden">
      {isPlaying ? (
        <iframe
          className="absolute inset-0 w-full h-full"
          src={embedUrl}
          title="Vídeo"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          onClick={() => setIsPlaying(true)}
          aria-label="Assistir vídeo"
          className="absolute inset-0 w-full h-full block group cursor-pointer"
        >
          <img
            src={capaImg}
            alt="Capa do vídeo"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-[#e75726] border border-[#00201c] shadow-[4px_4px_0px_#00201c] flex items-center justify-center size-[64px] sm:size-[80px] lg:size-[96px] transition-all group-hover:shadow-[2px_2px_0px_#00201c] group-hover:translate-x-[2px] group-hover:translate-y-[2px]">
              <svg
                viewBox="0 0 24 24"
                className="block size-[28px] sm:size-[36px] lg:size-[44px] ml-[4px]"
                aria-hidden="true"
              >
                <polygon points="6,4 22,12 6,20" fill="#00201c" />
              </svg>
            </div>
          </div>
        </button>
      )}
    </div>
  );
}
