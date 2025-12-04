import React, { useState } from "react";
import "@/components/app-header/search/earn-list/earn-list.css";

function EarnList() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;
  const items = [
    {
      asset: "FDUSD",
      difference: "15.90%",
      icon: "/img/fdusd.png",
      differenceClass: "color-t_buy",
    },
    {
      asset: "AXS",
      difference: "18.90%",
      icon: "/img/axs.png",
      differenceClass: "color-t_buy",
    },
    {
      asset: "BTC",
      difference: "239.72%",
      icon: "/img/btc.png",
      differenceClass: "color-t_buy",
    },
    {
      asset: "DOT",
      difference: "10.90%",
      icon: "/img/dot.png",
      differenceClass: "color-t_buy",
    },
    {
      asset: "BTC",
      difference: "8.00%",
      icon: "/img/btc.png",
      differenceClass: "color-t_buy",
    },
    {
      asset: "SLF",
      difference: "18.90%",
      icon: "/img/slf.png",
      differenceClass: "color-t_buy",
    },
    {
      asset: "BTTC",
      difference: "7.70%",
      icon: "/img/bttc.png",
      differenceClass: "color-t_buy",
    },
    {
      asset: "USDT",
      difference: "239.79%",
      icon: "/img/usdt.png",
      differenceClass: "color-t_buy",
    },
    {
      asset: "ALT",
      difference: "10.90%",
      icon: "/img/alt.png",
      differenceClass: "color-t_buy",
    },
    {
      asset: "ATOM",
      difference: "10.50%",
      icon: "/img/atom.png",
      differenceClass: "color-t_buy",
    },
    {
      asset: "TON",
      difference: "5.90%",
      icon: "/img/ton.png",
      differenceClass: "color-t_buy",
    },
    {
      asset: "EURI",
      difference: "8.78%",
      icon: "/img/euri.png",
      differenceClass: "color-t_buy",
    },
  ];
  const totalPages = Math.ceil(items.length / itemsPerPage);
  const currentItems = items.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  return (
    <div className="explore-earn-list">
      <div className="bn-flex section-swiper">
        <div className="bn-flex section-swiper-title-container">
          <div className="section-swiper-title-container--title">Earn</div>
          <div className="bn-flex explore-section-swiper-dots">
            <div
              className="bn-flex explore-section-swiper-dots--arrow"
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
            >
              <svg
                size="20"
                className="bn-svg explore-section-swiper-dots--arrow__disallow"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11.934 12l3.89 3.89-1.769 1.767L8.398 12l1.768-1.768 3.89-3.889 1.767 1.768-3.889 3.89z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
            <div
              className="bn-flex explore-section-swiper-dots--arrow"
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
            >
              <svg
                className="bn-svg"
                size="20"
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
        </div>
        <div className="bn-flex">
          <div className="bn-swiper section-swiper">
            <div className="bn-swiper-wrapper">
              <div className="bn-swiper-item active">
                <div className="explore-earn-list-cols">
                  {currentItems.map((item, index) => (
                    <div className="explore-earn-list-item" key={index}>
                      <div className="explore-earn-list-item__content">
                        <div className="bn-flex explore-earn-list-item__asset">
                          <img
                            className="explore-earn-list-item__asset-icon"
                            loading="lazy"
                            src={item.icon}
                            alt={`${item.asset}`}
                          />
                          <div className="explore-earn-list-item__asset-name typography-subtitle2">
                            {item.asset}
                          </div>
                        </div>
                        <div className="bn-flex explore-earn-list-item__apr">
                          <div className="explore-earn-list-item__apr-label typography-caption1">
                            Max APR
                          </div>
                          <div className="explore-earn-list-item__apr-value typography-subtitle2">
                            <span className={`explore-earn-list--item-price typography-subtitle1 ${item.differenceClass}`}>
                              {item.difference}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EarnList;
