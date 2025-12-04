import React from "react";
import "./news.css";

function News() {
  const news = [
    {
      title: "Puma Partners With Web3 Gaming Platform UNKJD",
      link: "",
    },
    {
      title:
        "Trader Loses $610,000 in rETH and stkGHO Due to Phishing Transactions",
      link: "",
    },
    {
      title: "Visa Partners With dtcpay To Launch Crypto-To-Fiat Card",
      link: "",
    },
    {
      title: "Base Chain Gas Consumption Reaches 17,476 ETH",
      link: "",
    },
  ];
  return (
    <div className="noH5:bg-Vessel flex flex-col items-start justify-between rounded-[20px] p-xl mobile:bg-transparent mobile:items-center mobile:p-[0px] desktop:py-[20px] w-full flex-initial tablet:w-full tablet:flex-1">
      <div className="bn-flex mb-m w-full items-center mobile:justify-center noH5:justify-between">
        <div className="t-subtitle6">News</div>
        <a
          target="_blank"
          rel="noreferrer"
          href="#"
          className="bg-transparent inline-flex items-center text-t-third hover:bg-transparent hover:text-t-secondary mobile:hidden noH5:inline-flex"
        >
          <div className="t-body3">View All News</div>
          <i className="bx bx-chevron-right bx-xs"></i>
        </a>
      </div>
      <div className="flex w-full flex-col flex-wrap gap-m">
        {news.map((item, index) => (
          <a
            key={index}
            href={item.link}
            className="cursor-pointer overflow-hidden text-t-primary text-subtitle1 font-normal hover:text-t-secondary mobile:leading-[22px] line-clamp-2"
            style={{ overflowWrap: "break-word", whiteSpace: "normal" }}
          >
            {item.title}
          </a>
        ))}
      </div>
    </div>
  );
}

export default News;
