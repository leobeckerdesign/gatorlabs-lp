interface RetroWindowProps {
  title: string;
  children: React.ReactNode;
  className?: string;
  contentClassName?: string;
  width?: string;
}

export function RetroWindow({ title, children, className = "", contentClassName = "", width }: RetroWindowProps) {
  return (
    <div className={`relative ${className}`} style={width ? { width } : undefined}>
      {/* Window title bar */}
      <div className="bg-[#c4b597] border border-[#00201c] flex items-center h-[27px] px-[8px] pb-[5px] pt-[4px] relative w-full">
        <div className="flex items-center gap-[5px] shrink-0">
          <div className="bg-[#e75726] size-[10px]" />
          <p className="font-['Pixelify_Sans',sans-serif] text-[12px] leading-[1.4] text-[#00201c]">{title}</p>
        </div>
        <div className="flex-1 h-[18px] ml-[16px] min-w-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 316 19">
            <g>
              <line stroke="#00201c" x1="316" x2="0" y1="0.5" y2="0.5" />
              <line stroke="#00201c" x1="316" x2="0" y1="3.5" y2="3.5" />
              <line stroke="#00201c" x1="316" x2="0" y1="6.5" y2="6.5" />
              <line stroke="#00201c" x1="316" x2="0" y1="9.5" y2="9.5" />
              <line stroke="#00201c" x1="316" x2="0" y1="12.5" y2="12.5" />
              <line stroke="#00201c" x1="316" x2="0" y1="15.5" y2="15.5" />
              <line stroke="#00201c" x1="316" x2="0" y1="18.5" y2="18.5" />
            </g>
          </svg>
        </div>
      </div>

      {/* Window content */}
      <div className={`bg-[#c4b597] border border-[#00201c] border-t-0 p-[4px] w-full ${contentClassName}`}>
        {children}
      </div>
    </div>
  );
}
