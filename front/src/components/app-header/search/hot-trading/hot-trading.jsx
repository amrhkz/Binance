import React, { useState } from "react";
import "@/components/app-header/search/hot-trading/hot-trading.css";

function HotTrading() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const items = [
    {
      asset: "BTC",
      quote: "USDT",
      price: "$62,911.63",
      difference: "-0.56%",
      icon: "/img/btc.png",
      differenceClass: "color-t_sell",
      golden: "color-t_primaryYellow",
    },
    {
      asset: "SOL",
      quote: "USDT",
      price: "$148.22",
      difference: "+4.69%",
      icon: "/img/sol.png",
      differenceClass: "color-t_buy",
      golden: "color-t_primaryYellow",
    },
    {
      asset: "ETH",
      quote: "USDT",
      price: "$2,534.20",
      difference: "+3.57%",
      icon: "/img/eth.png",
      differenceClass: "color-t_buy",
      golden: "color-t_primaryYellow",
    },
    {
      asset: "NEIRO",
      quote: "USDT",
      price: "$0.00078977",
      difference: "-7.15%",
      icon: "/img/neiro.png",
      differenceClass: "color-t_sell",
    },
    {
      asset: "SUI",
      quote: "USDT",
      price: "$1.51",
      difference: "+11.60%",
      icon: "/img/sui.png",
      differenceClass: "color-t_buy",
    },
    {
      asset: "CKB",
      quote: "USDT",
      price: "$0.016797",
      difference: "-5.03%",
      icon: "/img/ckb.png",
      differenceClass: "color-t_sell",
    },
    {
      asset: "WBETH",
      quote: "USDT",
      price: "$2,661.63",
      difference: "+3.59%",
      icon: "/img/wbeth.png",
      differenceClass: "color-t_buy",
    },
    {
      asset: "XRP",
      quote: "USDT",
      price: "$0.5815",
      difference: "-0.99%",
      icon: "/img/xrp.png",
      differenceClass: "color-t_sell",
    },
    {
      asset: "BNB",
      quote: "USDT",
      price: "$568.80",
      difference: "+0.58%",
      icon: "/img/bnb.png",
      differenceClass: "color-t_buy",
    },
    {
      asset: "DOGS",
      quote: "USDT",
      price: "$0.0009277",
      difference: "-5.61%",
      icon: "/img/dogs.png",
      differenceClass: "color-t_sell",
    },
    {
      asset: "PEPE",
      quote: "USDT",
      price: "$0.00000808",
      difference: "+1.00%",
      icon: "/img/pepe.png",
      differenceClass: "color-t_buy",
    },
    {
      asset: "WIF",
      quote: "USDT",
      price: "$+1.78",
      difference: "+1.43%",
      icon: "/img/wif.png",
      differenceClass: "color-t_buy",
    },
    {
      asset: "DOGE",
      quote: "USDT",
      price: "$0.10509",
      difference: "-0.20%",
      icon: "/img/doge.png",
      differenceClass: "color-t_sell",
    },
    {
      asset: "ADA",
      quote: "USDT",
      price: "$0.3551",
      difference: "+1.20%",
      icon: "/img/ada.png",
      differenceClass: "color-t_buy",
    },
    {
      asset: "FET",
      quote: "USDT",
      price: "$1.59",
      difference: "+2.39%",
      icon: "/img/fet.png",
      differenceClass: "color-t_buy",
    },
    {
      asset: "SHIB",
      quote: "USDT",
      price: "$0.00001416",
      difference: "-0.98%",
      icon: "/img/shib.png",
      differenceClass: "color-t_sell",
    },
    {
      asset: "TON",
      quote: "USDT",
      price: "$5.65",
      difference: "-2.12%",
      icon: "/img/ton.png",
      differenceClass: "color-t_sell",
    },
    {
      asset: "FIDA",
      quote: "USDT",
      price: "$0.3388",
      difference: "-16.30%",
      icon: "/img/fida.png",
      differenceClass: "color-t_sell",
    },
    {
      asset: "1MBABYDOGE",
      quote: "USDT",
      price: "$0.0020654",
      difference: "-4.22%",
      icon: "/img/1mbabydoge.png",
      differenceClass: "color-t_sell",
    },
    {
      asset: "FTM",
      quote: "USDT",
      price: "$0.6426",
      difference: "+0.88%",
      icon: "/img/ftm.png",
      differenceClass: "color-t_buy",
    },
    {
      asset: "TIA",
      quote: "USDT",
      price: "$5.90",
      difference: "-4.52%",
      icon: "/img/tia.png",
      differenceClass: "color-t_sell",
    },
    {
      asset: "1000SATS",
      quote: "USDT",
      price: "$0.0002953",
      difference: "-1.14%",
      icon: "/img/1000sats.png",
      differenceClass: "color-t_sell",
    },
    {
      asset: "TRX",
      quote: "USDT",
      price: "$0.1519",
      difference: "+0.86%",
      icon: "/img/trx.png",
      differenceClass: "color-t_buy",
    },
    {
      asset: "AVAX",
      quote: "USDT",
      price: "$27.80",
      difference: "+5.18%",
      icon: "/img/avax.png",
      differenceClass: "color-t_buy",
    },
    {
      asset: "ALT",
      quote: "USDT",
      price: "$0.108",
      difference: "+2.76%",
      icon: "/img/alt.png",
      differenceClass: "color-t_buy",
    },
  ];

  const totalPages = Math.ceil(items.length / itemsPerPage);

  const currentItems = items.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="explore-hot-trading">
      <div className="bn-flex section-swiper">
        <div className="bn-flex section-swiper-title-container">
          <div className="section-swiper-title-container--title">
            Hot Trading
          </div>
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
        <div className="bn-flex" style={{position:"relative"}}>
          <div className="bn-swiper section-swiper">
            <div className="bn-swiper-wrapper" >
              <div className="bn-swiper-item active">
                <div className="explore-hot-trading-cols">
                  {currentItems.map((item, index) => (
                    <div
                      className="bn-flex explore-hot-trading--item"
                      key={index}
                    >
                      <div className="bn-flex explore-hot-trading--item-left-container">
                        <div
                          className={`bn-flex explore-hot-trading--item-index ${item.golden}`}
                        >
                          {index + 1 + (currentPage - 1) * itemsPerPage}
                        </div>
                        <img
                          className="explore-hot-trading--item-asset-icon"
                          loading="lazy"
                          src={item.icon}
                          alt={`${item.asset}/${item.quote}`}
                        />
                        <div className="bn-flex explore-hot-trading--trading-pair">
                          <div className="explore-hot-trading--item-base-asset">
                            {item.asset}
                          </div>
                          <div className="explore-hot-trading--item-quote-asset">
                            /{item.quote}
                          </div>
                        </div>
                      </div>
                      <div className="bn-flex explore-hot-trading--item-right-container">
                        <div className="explore-hot-trading--item-price">
                          {item.price}
                        </div>
                        <span
                          className={`explore-hot-trading--item-difference ${item.differenceClass}`}
                        >
                          {item.difference}
                        </span>
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

export default HotTrading;
