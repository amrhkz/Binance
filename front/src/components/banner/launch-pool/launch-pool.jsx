import React from "react";
import "./launch-pool.css";

function LaunchPool() {
  return (
    <div className="relative flex flex-col gap-2xs mobile:p-m noH5:px-xl noH5:py-l noH5:bg-Vessel mobile:mt-[24px] mobile:items-center mobile:rounded-[12px] mobile:border mobile:border-solid mobile:border-Line noH5:rounded-[20px] mobile:hidden noH5:block">
      <div className="absolute left-0 top-0 z-20 h-full cursor-pointer w-full rounded-[20px] mobile:rounded-[12px]"></div>
      <div className="typography-subtitle6 flex items-center gap-m">
        <div className="text-t-primary">Launchpool</div>
        <div className=" flex items-center gap-4xs">
          <img
            className="bn-lazy-img"
            src="/img/hamster.jpg"
            style={{ height: "24px", width: "24px", borderRadius: "100%" }}
          />
          <div className="text-t-primary">HMSTR</div>
        </div>
        <div className=" flex items-center gap-4xs">
          <div className="typography-subtitle3 rounded px-[5px] py-[3px] bg-DepthBuyBg text-TextBuy">
            Ongoing
          </div>
          <svg
            className="bn-svg icon-dir text-[16px] text-iconNormal"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.288 12l-3.89 3.89 1.768 1.767L15.823 12l-1.768-1.768-3.889-3.889-1.768 1.768 3.89 3.89z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
      </div>
      <div className="flex h-fit gap-[32px] ">
        <div className="flex items-baseline gap-4xs text-t-primary">
          <div className="mobile:typography-Subtitle1 text-headline6">01</div>
          <div className="text-caption mobile:text-subtitle2">D</div>
        </div>
        <div className="flex items-baseline gap-4xs text-t-primary">
          <div className="mobile:typography-Subtitle1 text-headline6">06</div>
          <div className="text-caption mobile:text-subtitle2">H</div>
        </div>
        <div className="flex items-baseline gap-4xs text-t-primary">
          <div className="mobile:typography-Subtitle1 text-headline6">31</div>
          <div className="text-caption mobile:text-subtitle2">M</div>
        </div>
        <div className="flex items-baseline gap-4xs text-t-primary">
          <div className="mobile:typography-Subtitle1 text-headline6">28</div>
          <div className="text-caption mobile:text-subtitle2">S</div>
        </div>
      </div>
    </div>
  );
}

export default LaunchPool;
