"use client";
import React, { useEffect, useState } from "react";
import "./bn-tabs.css";

function BnTabs() {
  const [activeTab, setActiveTab] = useState(0);
  const Popular = [
    {
      asset: "BTC",
      quote: "Bitcoin",
      price: "$63,253.99",
      difference: "-0.06%",
      icon: "/img/btc.png",
      differenceClass: "color-t_sell",
    },
    {
      asset: "ETH",
      quote: "Ethereum",
      price: "$2,566.62",
      difference: "+0.45%",
      icon: "/img/eth.png",
      differenceClass: "color-t_buy",
    },
    {
      asset: "BNB",
      quote: "BNB",
      price: "$584.30",
      difference: "-1.51%",
      icon: "/img/bnb.png",
      differenceClass: "color-t_buy",
    },
    {
      asset: "XRP",
      quote: "Ripple",
      price: "$0.5869",
      difference: "+0.82%",
      icon: "/img/xrp.png",
      differenceClass: "color-t_buy",
    },
    {
      asset: "SOL",
      quote: "Solana",
      price: "$149.01",
      difference: "+0.53%",
      icon: "/img/sol.png",
      differenceClass: "color-t_buy",
    },
  ];
  const NewListing = [
    {
      asset: "CATI",
      quote: "Catizen",
      price: "$0.9202",
      difference: "-15.50%",
      icon: "/img/catizen.jpg",
      differenceClass: "color-t_sell",
    },
    {
      asset: "1MBABYDOGE",
      quote: "1M x BABYDOGE",
      price: "$0.0019775",
      difference: "-4.85%",
      icon: "",
      differenceClass: "color-t_sell",
    },
    {
      asset: "NEIRO",
      quote: "First Neiro On Ethereum",
      price: "$0.00080495",
      difference: "-1.51%",
      icon: "",
      differenceClass: "color-t_sell",
    },
    {
      asset: "TURBO",
      quote: "Turbo",
      price: "$0.006043",
      difference: "+1.55%",
      icon: "/img/turbo.png",
      differenceClass: "color-t_buy",
    },
    {
      asset: "POL",
      quote: "Polygon Ecosystem Token",
      price: "$0.408",
      difference: "+2.15%",
      icon: "",
      differenceClass: "color-t_buy",
    },
  ];
  const tabs = ["Popular", "New Listing"];
  const data = [Popular, NewListing];
  return (
    <div className="relative rounded-[20px] mobile:p-0 noH5:px-xl noH5:pb-l noH5:bg-Vessel mobile:bg-transparent mobile:flex-1 mobile:text-center flex flex-col py-[20px] tablet:gap-xs desktop:gap-l noH5:pt-s">
      <div className="bn-tabs bn-tabs__default coin-list-content relative mobile:gap-[12px] noH5:gap-[16px] desktop:[&>*]:first:my-0">
        <div className="bn-tab-list bn-tab-list__default">
          {tabs.map((tab, index) => (
            <div
              key={index}
              className={`bn-tab bn-tab__default cursor-pointer ${
                activeTab === index ? "active" : ""
              }`}
              onClick={() => setActiveTab(index)}
            >
              {tab}
            </div>
          ))}
        </div>
        <div className="bn-tab-pane-list">
          {/* نمایش محتویات تب فعال */}
          <div className="bn-tab-pane active">
            <div className="flex flex-col items-start mobile:items-center noH5:gap-[20px] mobile:gap-[24px] w-full flex-initial tablet:w-auto tablet:flex-1">
              {data[activeTab].map((item, index) => (
                <a
                  key={index}
                  href="/en/trade/CATI_USDT"
                  id={`top_crypto_table-${index}-CATI_USDT`}
                  className="flex w-full items-center justify-between rounded-xs text-t-primary hover:text-t-secondary"
                >
                  <div className="flex w-[45%] items-center">
                    {item.icon && (
                      <img
                        className="bn-lazy-img h-[28px] w-[28px] rounded-xl mobile:h-[24px] mobile:w-[24px]"
                        src={item.icon}
                        alt={item.asset}
                      />
                    )}
                    <div className="text-subtitle1 ml-2xs mr-4xs">{item.asset}</div>
                    <div className="whitespace-nowrap text-body2 text-t-third">{item.quote}</div>
                  </div>
                  <div className="flex flex-1 items-center justify-end">
                    <div className="lock-ltr text-subtitle1 font-medium">{item.price}</div>
                  </div>
                  <div className="flex flex-1 items-center justify-end">
                    <div className={`lock-ltr text-subtitle1 font-medium ${item.differenceClass}`}>
                      {item.difference}
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* لینک متفاوت برای هر تب */}
            {activeTab === 0 ? (
              <a
                target="_blank"
                rel="noreferrer"
                href="/en/register?registerChannel=homepage"
                className="bg-transparent mb-[0px] flex items-center p-[0px] mobile:justify-center mobile:text-center tablet:top-[10px] noH5:absolute ltr:noH5:right-0 rtl:noH5:left-0 desktop:top-[10px] t-body3 text-t-third hover:text-t-secondary mobile:mt-[13px]"
              >
                View All 350+ Coins
                <i className="bx bx-chevron-right bx-xs bn-svg icon-dir mt-[3px] h-[16px] w-[16px]"></i>
              </a>
            ) : (
              <a
                target="_blank"
                rel="noreferrer"
                href="/markets/newListing"
                className="bg-transparent mb-[0px] flex items-center p-[0px] mobile:justify-center mobile:text-center tablet:top-[10px] noH5:absolute ltr:noH5:right-0 rtl:noH5:left-0 desktop:top-[10px] t-body3 text-t-third hover:text-t-secondary mobile:mt-[13px]"
              >
                View More Coins
                <i className="bx bx-chevron-right bx-xs bn-svg icon-dir mt-[3px] h-[16px] w-[16px]"></i>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BnTabs;
