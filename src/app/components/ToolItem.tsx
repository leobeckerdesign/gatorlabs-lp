interface ToolItemProps {
  name: string;
  description: string;
  number: number;
}

export function ToolItem({ name, description, number }: ToolItemProps) {
  const bgClass = number <= 5 ? "bg-[#e75726]" : "bg-[#c4b597]";

  return (
    <div className="flex items-center justify-between w-full gap-[8px] sm:gap-[12px]">
      <div className="flex items-center gap-[8px] sm:gap-[12px] flex-1 min-w-0">
        {/* Tool number */}
        <div className={`${bgClass} border border-[#00201c] flex items-center justify-center shrink-0 size-[28px] sm:size-[34px] lg:size-[42px]`}>
          <span className="font-['Big_Shoulders',sans-serif] font-bold leading-none text-[#00201c] text-[16px] sm:text-[20px] lg:text-[24px]">
            {number}
          </span>
        </div>

        {/* Tool info */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-[24px] gap-[4px] flex-1 min-w-0">
          <p className="font-['Big_Shoulders',sans-serif] font-bold text-[22px] sm:text-[26px] lg:text-[32px] leading-[1.1] text-[#00201c] lg:w-[180px] lg:shrink-0">{name}</p>
          <p className="font-['JetBrains_Mono',sans-serif] font-medium text-[14px] sm:text-[16px] lg:text-[16px] leading-[1.4] text-[#00201c] break-words flex-1 lg:max-w-[60%]">{description}</p>
        </div>
      </div>

      {/* Install button */}
      <a
        href="https://www.hostgator.com.br/52667-13-3-12.html"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center bg-[#e75726] border border-[#00201c] px-[16px] sm:px-[16px] lg:px-[12px] py-[8px] sm:py-[8px] lg:py-[6px] shadow-[2px_2px_0px_#00201c] shrink-0 ml-[8px] hover:shadow-[1px_1px_0px_#00201c] hover:translate-x-[1px] hover:translate-y-[1px] transition-all"
      >
        <p className="font-['JetBrains_Mono',sans-serif] font-medium text-[12px] sm:text-[12px] lg:text-[12px] leading-[1.4] text-[#00201c] whitespace-nowrap">INSTALAR</p>
      </a>
    </div>
  );
}
