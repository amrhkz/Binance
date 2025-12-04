import React from "react";

function HotCampaign() {
  return (
    <div class="bn-flex section-swiper">
      <div class="bn-flex section-swiper-title-container">
        <div class="section-swiper-title-container--title">Hot Campaign</div>
      </div>
      <div class="bn-flex" style={{ position: "relative" }}>
        <div class="bn-swiper section-swiper">
          <div class="bn-swiper-wrapper">
            <div class="bn-swiper-item active">
              <div class="bn-flex explore-hot-camp">
                <div class="bn-flex explore-hot-camp-item-info">
                  <div class="bn-flex explore-hot-camp-item-info--base">
                    <div class="explore-hot-camp-item-info--title">
                      Launchpool
                    </div>
                    <img
                      class="bn-lazy-img"
                      data-src="https://bin.bnbstatic.com/image/admin_mgs_image_upload/20240913/bd44b80e-652d-4008-b7d1-582039bacbd3.jpg"
                      src="/img/catizen.jpg"
                    />
                    <div class="explore-hot-camp-item-info--asset">CATI</div>
                  </div>
                  <div class="bn-flex">
                    <div class="bn-flex hot-compaign-countdown--item">
                      <div class="">06</div>
                      <div class="hot-compaign-countdown--unit">H</div>
                    </div>
                    <div class="bn-flex hot-compaign-countdown--item">
                      <div class="">32</div>
                      <div class="hot-compaign-countdown--unit">M</div>
                    </div>
                    <div class="bn-flex hot-compaign-countdown--item">
                      <div class="">57</div>
                      <div class="hot-compaign-countdown--unit">S</div>
                    </div>
                  </div>
                </div>
                <div class="bn-flex explore-hot-camp-item-state explore-hot-camp-item-state--buy">
                  Ongoing
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HotCampaign;
