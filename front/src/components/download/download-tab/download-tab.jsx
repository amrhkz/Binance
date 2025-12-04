"use client";
import React, { useEffect, useState } from "react";
import "@/components/download/download-tab/download-tab.css";

function DownloadTab() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      title: "Desktop",
      content: (
        <img
          alt="download-img-desktop"
          width="100%"
          height="100%"
          src="/img/desktop-dark-en.png"
        />
      ),
    },
    {
      title: "Lite",
      content: (
        <img
          alt="download-img-lite"
          width="100%"
          height="100%"
          src="/img/download-lite-dark-en.svg"
        />
      ),
    },
    {
      title: "Pro",
      content: (
        <img
          alt="download-img-pro"
          width="100%"
          height="100%"
          src="/img/download-pro-dark-en.svg"
        />
      ),
    },
  ];

  return (
    <div className="flex h-auto w-1/2 flex-col items-center justify-between mobile:w-full">
    <div className="tab-content h-[538px] mobile:h-[496px] tablet:h-[384px]">
      {tabs[activeTab].content}
    </div>

    <div className="bn-tab-list bn-tab-list__default-breakline download-tabs w-auto tablet:mt-xl mobile:hidden">
      {tabs.map((tab, index) => (
        <div
          key={index}
          className={`cursor-pointer bn-tab bn-tab__default-breakline relative ${
            activeTab === index ? "active" : ""
          }`}
          onClick={() => setActiveTab(index)}
        >
          {tab.title}
        </div>
      ))}
    </div>
  </div>
  );
}

export default DownloadTab;
