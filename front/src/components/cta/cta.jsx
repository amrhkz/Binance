import React from "react";
import "@/components/cta/cta.css"

function Cta() {
  return (
    <div class="bg-bg1 mobile:undefined tablet:undefined undefined bottom-cta smooth_style dark">
      <div class="mx-auto mobile:px-m px-xl" 
      style={{maxWidth:"1248px"}}
      >
        <div class="flex flex-col items-center py-[64px] mobile:py-xl tablet:py-[48px]">
          <div class="mb-[40px] text-headline2 text-t-primary mobile:mb-m mobile:text-subtitle1 tablet:mb-xl tablet:text-headline4">
            <div>Start earning today</div>
          </div>
          <a
            href="register?registerChannel=homepage"
            class="bn-button data-size-large h-[48px] min-w-[164px] rounded-[8px] px-m py-2xs text-[16px] mobile:h-[32px] mobile:max-h-[32px] mobile:min-h-[32px] mobile:min-w-[128px] mobile:rounded-[6px] mobile:px-s mobile:py-4xs mobile:text-[14px] tablet:rounded-[8px]"
          >
            Sign Up Now
          </a>
        </div>
      </div>
    </div>
  );
}

export default Cta;
