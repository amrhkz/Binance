"use client";
import React, { useState } from "react";
import "@/components/faq/faq.css";

function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  const faqData = [
    {
      question: "What is a cryptocurrency exchange?",
      answer: (
        <>
          <a className="answer-link" href="https://www.binance.com/en/price">
            Cryptocurrency
          </a>{" "}
          exchanges are digital marketplaces that enable users to buy and sell
          cryptocurrencies like{" "}
          <a
            className="answer-link"
            href="https://www.binance.com/en/price/bitcoin"
          >
            Bitcoin
          </a>
          ,{" "}
          <a
            className="answer-link"
            href="https://www.binance.com/en/price/ethereum"
          >
            Ethereum
          </a>
          , and{" "}
          <a
            className="answer-link"
            href="https://www.binance.com/en/price/tether"
          >
            Tether
          </a>
          . The Binance exchange is the largest crypto exchange by trade volume.
        </>
      ),
    },
    {
      question: "What products does Binance provide?",
      answer: (
        <>
          Binance is the world's leading cryptocurrency exchange, catering to
          169 million registered users in over 180 countries. With low fees and
          over 350 cryptocurrencies to trade, Binance is the preferred exchange
          to trade Bitcoin, Altcoins, and other virtual assets.
          <br />
          <br />
          With Binance users can:
          <br />{" "}
          <li class="list-item-content">
            Trade hundreds of cryptocurrencies on{" "}
            <a
              class="answer-link"
              href="https://www.binance.com/en/trade/BTC_USDT?theme=light&amp;type=spot"
            >
              Spot
            </a>
            ,{" "}
            <a
              class="answer-link"
              href="https://www.binance.com/en/trade/BTC_USDT?theme=light&amp;type=spot"
            >
              Margin
            </a>
            , and{" "}
            <a
              class="answer-link"
              href="https://www.binance.com/en/futures/markets/um"
            >
              Futures
            </a>{" "}
            markets.
          </li>
          <li class="list-item-content">
            Buy and sell cryptocurrencies with{" "}
            <a
              class="answer-link"
              href="https://p2p.binance.com/en/trade/all-payments/USDT?fiat=EUR"
            >
              Binance P2P
            </a>
            .
          </li>
          <li class="list-item-content">
            Earn interest on your crypto with{" "}
            <a class="answer-link" href="https://www.binance.com/en/earn">
              Binance Earn
            </a>
            .
          </li>
          <li class="list-item-content">
            Buy or earn new tokens on{" "}
            <a class="answer-link" href="https://launchpad.binance.com/en">
              Binance Launchpad
            </a>
            .
          </li>
          <li class="list-item-content">
            Trade, stake, and loan NFTs on{" "}
            <a class="answer-link" href="https://www.binance.com/en/nft/home">
              Binance NFT
            </a>{" "}
            marketplace.
          </li>
        </>
      ),
    },
    {
      question: "How to buy Bitcoin and other cryptocurrencies on Binance",
      answer: (
        <>
          There are several ways to buy cryptocurrencies on Binance. You can use
          a credit/debit card, cash balance, or Apple Pay/Google Pay to{" "}
          <a
            class="answer-link"
            href="https://www.binance.com/en/support/faq/how-to-buy-cryptocurrency-on-binance-homepage-400c38f5e0cd4b46a1d0805c296b5582"
          >
            purchase crypto
          </a>{" "}
          on Binance. Before getting started, please make sure you’ve completed{" "}
          <a
            class="answer-link"
            href="https://www.binance.com/en/support/faq/how-to-complete-identity-verification-360027287111"
          >
            Identity Verification
          </a>{" "}
          for your Binance account.
        </>
      ),
    },
    {
      question: "How to track cryptocurrency prices",
      answer: (
        <>
          The easiest way to track the latest cryptocurrency prices, trading
          volumes, trending altcoins, and market cap is the{" "}
          <a class="answer-link" href="https://www.binance.com/en/price">
            Binance Cryptocurrency Directory
          </a>
          . Click on the coins to know historical coin prices, 24-hour trading
          volume, and the price of cryptocurrencies like{" "}
          <a
            class="answer-link"
            href="https://www.binance.com/en/price/bitcoin"
          >
            Bitcoin
          </a>
          ,{" "}
          <a
            class="answer-link"
            href="https://www.binance.com/en/price/ethereum"
          >
            Ethereum
          </a>
          ,{" "}
          <a class="answer-link" href="https://www.binance.com/en/price/bnb">
            BNB
          </a>{" "}
          and others in real-time.
        </>
      ),
    },
    {
      question: "How to trade cryptocurrencies on Binance",
      answer: (
        <>
          You can trade hundreds of cryptocurrencies on Binance via the{" "}
          <a
            class="answer-link"
            href="https://www.binance.com/en/support/faq/spot-margin-trading?c=3&amp;navId=3#15"
          >
            Spot
          </a>
          ,{" "}
          <a
            class="answer-link"
            href="https://www.binance.com/en/support/faq/spot-margin-trading?c=3&amp;navId=3#16"
          >
            Margin
          </a>
          ,{" "}
          <a
            class="answer-link"
            href="https://www.binance.com/en/support/faq/crypto-derivatives?c=4&amp;navId=4#18"
          >
            Futures
          </a>
          , and{" "}
          <a
            class="answer-link"
            href="https://www.binance.com/en/support/faq/374321c9317c473480243365298b8706"
          >
            Options
          </a>{" "}
          markets. To{" "}
          <a
            class="answer-link"
            href="https://www.binance.com/en/support/faq/binance-beginner-s-guide-c780097f75dd450a82d17f1e84153276"
          >
            begin trading
          </a>
          , users need to register an account, complete identity verification,
          buy/deposit crypto, and start trading.
        </>
      ),
    },
    {
      question: "How to earn from crypto on Binance",
      answer: (
        <>
          Users can earn rewards on more than 180+ cryptocurrencies by using one
          of the products offered on{" "}
          <a class="answer-link" href="https://www.binance.com/en/earn">
            Binance Earn
          </a>
          . Our platform offers dozens of digital assets like{" "}
          <a
            class="answer-link"
            href="https://www.binance.com/en/price/bitcoin"
          >
            Bitcoin
          </a>
          ,{" "}
          <a
            class="answer-link"
            href="https://www.binance.com/en/price/ethereum"
          >
            Ethereum
          </a>
          , and stablecoins.
        </>
      ),
    },
  ];

  return (
    <div className="bg-bg1 smooth_style mobile:py-6 tablet:py-16 py-20">
      <div className="mx-auto mobile:px-m px-xl" style={{ maxWidth: "1248px" }}>
        <h2 className="mx-auto mb-[64px] w-fit flex-1 text-center text-headline2 text-t-primary mobile:mb-m mobile:text-headline5 tablet:mb-[48px] tablet:text-headline4">
          Frequently Asked Questions
        </h2>

        {faqData.map((item, index) => (
          <div
            key={index}
            className={`faq-item-widget ${
              activeIndex === index ? "active" : ""
            } dark mb-m w-full rounded-[10px] px-xl py-m mobile:bg-inherit last:mb-[0px] mobile:mb-[0px] mobile:px-[0px] mobile:py-2xs`}
          >
            <div
              className="flex cursor-pointer items-center"
              onClick={() => toggleFAQ(index)}
            >
              <div className="border-[#2B3139] flex items-center justify-center rounded-[8px] text-t-primary h-[32px] w-[32px] border border-solid p-4xs text-subtitle1 mr-xs mobile:mr-2xs mobile:h-[24px] mobile:w-[24px] mobile:p-[0px] mobile:font-normal">
                {index + 1}
              </div>
              <div className="mr-m flex-1 text-headline6 text-t-primary mobile:text-subtitle1 mobile:font-normal">
                {item.question}
              </div>
              <div
                className={`faq-item-expand  flex h-[32px] w-[32px] items-center justify-center rounded-circle p-2xs`}
              >
                <i
                  className={`bx ${
                    activeIndex === index ? "bx-minus" : "bx-plus"
                  } bx-xs bn-svg`}
                ></i>
              </div>
            </div>
            <div
              className={`mt-m px-[48px] text-body1 text-t-third mobile:px-[0px] mobile:text-caption ${
                activeIndex === index ? "block" : "hidden"
              }`}
            >
              {item.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Faq;
