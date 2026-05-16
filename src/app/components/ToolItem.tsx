import svgPaths from "../../imports/Frame2147224234/svg-26h9m0jbr5";

interface ToolItemProps {
  name: string;
  description: string;
}

export function ToolItem({ name, description }: ToolItemProps) {
  return (
    <div className="flex items-center justify-between w-full gap-[8px] sm:gap-[12px]">
      <div className="flex items-center gap-[8px] sm:gap-[12px] flex-1 min-w-0">
        {/* Tool icon */}
        <div className="relative shrink-0">
          <div className="bg-[#d9d9d9] border border-[#00201c] size-[40px] sm:size-[50px] lg:size-[60px]" />
          <div className="absolute top-[5.26px] sm:top-[6.58px] lg:top-[7.9px] left-[6.32px] sm:left-[7.89px] lg:left-[9.47px] w-[28.42px] h-[28.42px] sm:w-[35.526px] sm:h-[35.526px] lg:w-[42.63px] lg:h-[42.63px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35.5263 35.5263">
              <g clipPath="url(#clip0_1_293)">
                <path clipRule="evenodd" d={svgPaths.p20739500} fill="#00201c" fillRule="evenodd" />
              </g>
              <defs>
                <clipPath id="clip0_1_293">
                  <rect fill="white" height="35.5263" width="35.5263" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>

        {/* Tool info */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-[24px] gap-[4px] flex-1 min-w-0">
          <p className="font-['JetBrains_Mono',sans-serif] font-bold text-[18px] sm:text-[20px] lg:text-[24px] leading-[1.4] text-[#00201c] lg:w-[180px] lg:shrink-0">{name}</p>
          <p className="font-['JetBrains_Mono',sans-serif] font-medium text-[14px] sm:text-[16px] lg:text-[16px] leading-[1.4] text-[#00201c] break-words flex-1 lg:max-w-[60%]">{description}</p>
        </div>
      </div>

      {/* Install button */}
      <button className="bg-[#e75726] border border-[#00201c] px-[16px] sm:px-[16px] lg:px-[12px] py-[8px] sm:py-[8px] lg:py-[6px] shadow-[2px_2px_0px_#00201c] shrink-0 ml-[8px] hover:shadow-[1px_1px_0px_#00201c] hover:translate-x-[1px] hover:translate-y-[1px] transition-all">
        <p className="font-['JetBrains_Mono',sans-serif] font-medium text-[12px] sm:text-[12px] lg:text-[12px] leading-[1.4] text-[#00201c] whitespace-nowrap">INSTALAR</p>
      </button>
    </div>
  );
}
