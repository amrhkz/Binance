"use client";
import React from "react";
import "./app-header.css";
import Link from "next/link";
import Search from "./search/search";
import DownloadQr from "../donwload-qr/download-qr";
import LangDropdown from "../lang-dropdown/lang-dropdown";
import ThemeSwitch from "../theme-switch/theme-switch";

function Navbar() {
  return (
    <div className="navbar">
      <header className="header-container">
        <div className="header-leftside">
          <Link href="#" className="logo-link">
            <img src="/img/logo.png" />
          </Link>
          <div className="header-menu-item">
            <Link
              href="https://www.binance.com/en/crypto/buy"
              className="typography-Subtitle4"
            >
              Buy Crypto
            </Link>
          </div>
          <div className="header-menu-item">
            <Link
              href="https://www.binance.com/en/markets/overview"
              className="typography-Subtitle4"
            >
              Markets
            </Link>
          </div>
          <div className="header-menu-item center header-dropdown-menu">
            <span className="header-menu-item_view typography-Subtitle4">
              Trade
              <i className="bx bx-chevron-down"></i>
            </span>
            <div className="header-menu-subgrid header-menu-subgrid-2">
              <ul className="header-menu-subgrid-group">
                <div className="typography-Subtitle4 header-menu-subgrid-group-li color-t_disabled">
                  Basic
                </div>
                <li className="header-menu-subgrid-group-li">
                  <a
                    className="header-nav-subitem"
                    href="https://www.binance.com/en/trade/BTC_USDT?type=spot"
                    target="_self"
                    id="ba-spot-only"
                  >
                    <div className="header-nav-subicon_warp">
                      <svg
                        className="header-nav-subicon_icon"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 22"
                      >
                        <symbol id="a" viewBox="0 0 20 22">
                          <path
                            fill="currentColor"
                            fillRule="evenodd"
                            d="M12.071 4.333a4.18 4.18 0 0 0-4.028 3.064 5.7 5.7 0 0 1 5.144 5.144 4.18 4.18 0 0 0-1.116-8.208m-.38 8.738a4.179 4.179 0 1 0-8.358 0 4.179 4.179 0 0 0 8.358 0m-6.078 0 1.9 1.9 1.899-1.9-1.9-1.9z"
                            clipRule="evenodd"
                          />
                          <path
                            fill="#F0B90B"
                            d="M8.333 3.5H2.5v5.833zM11.667 18.5H17.5v-5.833z"
                          />
                        </symbol>
                        <use href="#a" />
                      </svg>
                    </div>
                    <div className="header-nav-subitemtext">
                      <div className="header-nav-subtitle">
                        <div className="typography-Subtitle4">Spot</div>
                        <svg
                          className="bn-svg header-nav-subarrow"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <symbol
                            viewBox="0 0 24 24"
                            id="46012157-5d5f-4314-8f56-d1580bf77499"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M21 11.9988L13.9289 4.92773L12.1612 6.6955L16.2157 10.75L2.99902 10.75L2.99902 13.25L16.2145 13.25L12.1612 17.3033L13.9289 19.0711L21 12L20.9994 11.9994L21 11.9988Z"
                              fill="currentColor"
                            />
                          </symbol>
                          <use href="#46012157-5d5f-4314-8f56-d1580bf77499" />
                        </svg>
                      </div>
                      <p className="header-nav-subdesc typography-caption1">
                        Buy and sell on the Spot market with advanced tools
                      </p>
                    </div>
                  </a>
                </li>
                <li className="header-menu-subgrid-group-li">
                  <a
                    className="header-nav-subitem"
                    href="https://www.binance.com/en/trade?type=cross"
                    target="_self"
                    id="ba-margin"
                  >
                    <div className="header-nav-subicon_warp">
                      <svg
                        className="header-nav-subicon_icon"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <symbol
                          viewBox="0 0 24 24"
                          id="84d895c2-4bdf-4cd6-85f6-f2f04f130c50"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M18.7678 7.0185L5.82854 19.9577L4.06077 18.19L17 5.25073L17.8839 6.13462L18.7678 7.0185Z"
                            fill="currentColor"
                          />
                          <path d="M12 4H20V12L12 4Z" fill="currentColor" />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M7.5 11C9.433 11 11 9.433 11 7.5C11 5.567 9.433 4 7.5 4C5.567 4 4 5.567 4 7.5C4 9.433 5.567 11 7.5 11ZM7.5 5.96875L5.96875 7.5L7.5 9.03125L9.03125 7.50017L7.5 5.96875Z"
                            fill="currentColor"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M16.5 20C18.433 20 20 18.433 20 16.5C20 14.567 18.433 13 16.5 13C14.567 13 13 14.567 13 16.5C13 18.433 14.567 20 16.5 20ZM16.5 14.9688L14.9688 16.5L16.5 18.0312L18.0312 16.5002L16.5 14.9688Z"
                            fill="#F0B90B"
                          />
                        </symbol>
                        <use href="#84d895c2-4bdf-4cd6-85f6-f2f04f130c50" />
                      </svg>
                    </div>
                    <div className="header-nav-subitemtext">
                      <div className="header-nav-subtitle">
                        <div className="typography-Subtitle4">Margin</div>
                        <svg
                          className="bn-svg header-nav-subarrow"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <symbol
                            viewBox="0 0 24 24"
                            id="46012157-5d5f-4314-8f56-d1580bf77499"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M21 11.9988L13.9289 4.92773L12.1612 6.6955L16.2157 10.75L2.99902 10.75L2.99902 13.25L16.2145 13.25L12.1612 17.3033L13.9289 19.0711L21 12L20.9994 11.9994L21 11.9988Z"
                              fill="currentColor"
                            />
                          </symbol>
                          <use href="#46012157-5d5f-4314-8f56-d1580bf77499" />
                        </svg>
                      </div>
                      <p className="header-nav-subdesc typography-caption1">
                        Increase your profits with leverage
                      </p>
                    </div>
                  </a>
                </li>
                <li className="header-menu-subgrid-group-li">
                  <a
                    className="header-nav-subitem"
                    href="https://p2p.binance.com/en"
                    target="_self"
                    id="ba-titile2-1"
                  >
                    <div className="header-nav-subicon_warp">
                      <svg
                        className="header-nav-subicon_icon"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <symbol
                          viewBox="0 0 24 24"
                          id="4b125c12-27b5-4233-bb75-dcffd198d46c"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M15 4H18.5H21V6.5V8.5H18.5V6.5H15V4ZM5.83333 9.99805C4.54467 9.99805 3.5 11.0427 3.5 12.3314V13.998H11.5V12.3314C11.5 11.0427 10.4553 9.99805 9.16667 9.99805H5.83333ZM14.8333 16C13.5447 16 12.5 17.0447 12.5 18.3333V20H20.5V18.3333C20.5 17.0447 19.4553 16 18.1667 16H14.8333ZM9 17.5H5.5V15.5H3V17.5V20H5.5H9V17.5ZM19 12.502C19 13.8827 17.8807 15.002 16.5 15.002C15.1193 15.002 14 13.8827 14 12.502C14 11.1212 15.1193 10.002 16.5 10.002C17.8807 10.002 19 11.1212 19 12.502ZM7.5 9C8.88071 9 10 7.88071 10 6.5C10 5.11929 8.88071 4 7.5 4C6.11929 4 5 5.11929 5 6.5C5 7.88071 6.11929 9 7.5 9Z"
                            fill="currentColor"
                          />
                          <path d="M15 4H21V6.5H15V4Z" fill="#F0B90B" />
                          <path d="M3 17.5H9V20H3V17.5Z" fill="#F0B90B" />
                          <path d="M3 15.5H5.5V20H3V15.5Z" fill="#F0B90B" />
                          <path d="M18.5 4H21V8.5H18.5V4Z" fill="#F0B90B" />
                        </symbol>
                        <use href="#4b125c12-27b5-4233-bb75-dcffd198d46c" />
                      </svg>
                    </div>
                    <div className="header-nav-subitemtext">
                      <div className="header-nav-subtitle">
                        <div className="typography-Subtitle4">P2P</div>
                        <svg
                          className="bn-svg header-nav-subarrow"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <symbol
                            viewBox="0 0 24 24"
                            id="46012157-5d5f-4314-8f56-d1580bf77499"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M21 11.9988L13.9289 4.92773L12.1612 6.6955L16.2157 10.75L2.99902 10.75L2.99902 13.25L16.2145 13.25L12.1612 17.3033L13.9289 19.0711L21 12L20.9994 11.9994L21 11.9988Z"
                              fill="currentColor"
                            />
                          </symbol>
                          <use href="#46012157-5d5f-4314-8f56-d1580bf77499" />
                        </svg>
                      </div>
                      <p className="header-nav-subdesc typography-caption1">
                        Buy &amp; sell cryptocurrencies using bank transfer and
                        800+ options
                      </p>
                    </div>
                  </a>
                </li>
                <li className="header-menu-subgrid-group-li">
                  <a
                    className="header-nav-subitem"
                    href="https://www.binance.com/en/convert"
                    target="_self"
                    id="ba-convert-block"
                  >
                    <div className="header-nav-subicon_warp">
                      <svg
                        className="header-nav-subicon_icon"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <symbol
                          viewBox="0 0 24 24"
                          id="a10d2770-3254-4843-a665-ee8115e4e9c7"
                        >
                          <path d="M14 3H21V10L14 3Z" fill="currentColor" />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6ZM12 14.4L14.4 12L12 9.6L9.6 12L12 14.4Z"
                            fill="currentColor"
                          />
                          <path d="M3 21H10L3 14V21Z" fill="currentColor" />
                          <path d="M3 21H10L3 14V21Z" fill="#F0B90B" />
                          <path d="M14 3H21V10L14 3Z" fill="#F0B90B" />
                        </symbol>
                        <use href="#a10d2770-3254-4843-a665-ee8115e4e9c7" />
                      </svg>
                    </div>
                    <div className="header-nav-subitemtext">
                      <div className="header-nav-subtitle">
                        <div className="typography-Subtitle4">
                          Convert &amp; Block Trade
                        </div>
                        <svg
                          className="bn-svg header-nav-subarrow"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <symbol
                            viewBox="0 0 24 24"
                            id="46012157-5d5f-4314-8f56-d1580bf77499"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M21 11.9988L13.9289 4.92773L12.1612 6.6955L16.2157 10.75L2.99902 10.75L2.99902 13.25L16.2145 13.25L12.1612 17.3033L13.9289 19.0711L21 12L20.9994 11.9994L21 11.9988Z"
                              fill="currentColor"
                            />
                          </symbol>
                          <use href="#46012157-5d5f-4314-8f56-d1580bf77499" />
                        </svg>
                      </div>
                      <p className="header-nav-subdesc typography-caption1">
                        The easiest way to trade at all sizes
                      </p>
                    </div>
                  </a>
                </li>
              </ul>
              <ul className="header-menu-subgrid-group">
                <div className="typography-Subtitle4 header-menu-subgrid-group-li color-t_disabled">
                  Advanced
                </div>
                <li className="header-menu-subgrid-group-li">
                  <a
                    className="header-nav-subitem"
                    href="https://www.binance.com/en/trading-bots"
                    target="_self"
                    id="ba-StrategyTrading"
                  >
                    <div className="header-nav-subicon_warp">
                      <svg
                        className="header-nav-subicon_icon"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <symbol
                          viewBox="0 0 24 24"
                          id="800c119a-26a3-4204-8f8d-8a850d92ef3c"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M4 7.5H20V11.4998H22V15.4998H20V20H4V15.4998H2V11.4998H4V7.5ZM15.5 13.1318C16.3284 13.1318 17 12.4603 17 11.6318C17 10.8034 16.3284 10.1318 15.5 10.1318C14.6716 10.1318 14 10.8034 14 11.6318C14 12.4603 14.6716 13.1318 15.5 13.1318ZM10 11.6318C10 12.4603 9.32843 13.1318 8.5 13.1318C7.67157 13.1318 7 12.4603 7 11.6318C7 10.8034 7.67157 10.1318 8.5 10.1318C9.32843 10.1318 10 10.8034 10 11.6318ZM15 15C15 16.6569 13.6569 18 12 18C10.3431 18 9 16.6569 9 15H15Z"
                            fill="currentColor"
                          />
                          <path d="M10.5 5H13.5V7.5H10.5V5Z" fill="#F0B90B" />
                          <path d="M9 4H15V6H9V4Z" fill="#F0B90B" />
                        </symbol>
                        <use href="#800c119a-26a3-4204-8f8d-8a850d92ef3c" />
                      </svg>
                    </div>
                    <div className="header-nav-subitemtext">
                      <div className="header-nav-subtitle">
                        <div className="typography-Subtitle4">Trading Bots</div>
                        <svg
                          className="bn-svg header-nav-subarrow"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <symbol
                            viewBox="0 0 24 24"
                            id="46012157-5d5f-4314-8f56-d1580bf77499"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M21 11.9988L13.9289 4.92773L12.1612 6.6955L16.2157 10.75L2.99902 10.75L2.99902 13.25L16.2145 13.25L12.1612 17.3033L13.9289 19.0711L21 12L20.9994 11.9994L21 11.9988Z"
                              fill="currentColor"
                            />
                          </symbol>
                          <use href="#46012157-5d5f-4314-8f56-d1580bf77499" />
                        </svg>
                      </div>
                      <p className="header-nav-subdesc typography-caption1">
                        Trade smarter with our various automated strategies -
                        easy, fast and reliable
                      </p>
                    </div>
                  </a>
                </li>
                <li className="header-menu-subgrid-group-li">
                  <a
                    className="header-nav-subitem"
                    href="https://www.binance.com/en/copy-trading"
                    target="_self"
                    id="ba-copy-trading"
                  >
                    <div className="header-nav-subicon_warp">
                      <svg
                        className="header-nav-subicon_icon"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <symbol
                          viewBox="0 0 24 24"
                          id="556895f7-2c04-45cc-8c6e-07fad344d3c3"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M7.50049 11.9961C9.98577 11.9961 12.0005 14.0108 12.0005 16.4961C12.0005 18.9814 9.98577 20.9961 7.50049 20.9961C5.01521 20.9961 3.00049 18.9814 3.00049 16.4961C3.00049 14.0108 5.01521 11.9961 7.50049 11.9961ZM7.50049 18.4247L5.57192 16.4961L7.50049 14.5675L9.42906 16.4961L7.50049 18.4247Z"
                            fill="#F0B90B"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M19.5005 5C19.5005 6.38071 18.3812 7.5 17.0005 7.5C15.6198 7.5 14.5005 6.38071 14.5005 5C14.5005 3.61929 15.6198 2.5 17.0005 2.5C18.3812 2.5 19.5005 3.61929 19.5005 5ZM3.00049 3H12.5005V6H6.00049V9.99609H3.00049V3ZM21.0005 15V21H14.0005V18H18.0005V15H21.0005ZM15.3338 9C14.0452 9 13.0005 10.0447 13.0005 11.3333V13H21.0005V11.3333C21.0005 10.0447 19.9558 9 18.6672 9H15.3338Z"
                            fill="currentColor"
                          />
                        </symbol>
                        <use href="#556895f7-2c04-45cc-8c6e-07fad344d3c3" />
                      </svg>
                    </div>
                    <div className="header-nav-subitemtext">
                      <div className="header-nav-subtitle">
                        <div className="typography-Subtitle4">Copy Trading</div>
                        <svg
                          className="bn-svg header-nav-subarrow"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <symbol
                            viewBox="0 0 24 24"
                            id="46012157-5d5f-4314-8f56-d1580bf77499"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M21 11.9988L13.9289 4.92773L12.1612 6.6955L16.2157 10.75L2.99902 10.75L2.99902 13.25L16.2145 13.25L12.1612 17.3033L13.9289 19.0711L21 12L20.9994 11.9994L21 11.9988Z"
                              fill="currentColor"
                            />
                          </symbol>
                          <use href="#46012157-5d5f-4314-8f56-d1580bf77499" />
                        </svg>
                      </div>
                      <p className="header-nav-subdesc typography-caption1">
                        Follow the most popular traders
                      </p>
                    </div>
                  </a>
                </li>
                <li className="header-menu-subgrid-group-li">
                  <a
                    className="header-nav-subitem"
                    href="https://www.binance.com/en/binance-api"
                    target="_self"
                    id="header-tier2-api"
                  >
                    <div className="header-nav-subicon_warp">
                      <svg
                        className="header-nav-subicon_icon"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <symbol
                          viewBox="0 0 24 24"
                          id="e0f6758f-e04a-4f01-beb2-ef7afefc3a77"
                        >
                          <path d="M17 5H20V19H17V5Z" fill="#F0B90B" />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M4 12C4 8.13401 7.13401 5 11 5H12V8H15V11H12V13H15V16H12V19H11C7.13401 19 4 15.866 4 12Z"
                            fill="currentColor"
                          />
                        </symbol>
                        <use href="#e0f6758f-e04a-4f01-beb2-ef7afefc3a77" />
                      </svg>
                    </div>
                    <div className="header-nav-subitemtext">
                      <div className="header-nav-subtitle">
                        <div className="typography-Subtitle4">APIs</div>
                        <svg
                          className="bn-svg header-nav-subarrow"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <symbol
                            viewBox="0 0 24 24"
                            id="46012157-5d5f-4314-8f56-d1580bf77499"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M21 11.9988L13.9289 4.92773L12.1612 6.6955L16.2157 10.75L2.99902 10.75L2.99902 13.25L16.2145 13.25L12.1612 17.3033L13.9289 19.0711L21 12L20.9994 11.9994L21 11.9988Z"
                              fill="currentColor"
                            />
                          </symbol>
                          <use href="#46012157-5d5f-4314-8f56-d1580bf77499" />
                        </svg>
                      </div>
                      <p className="header-nav-subdesc typography-caption1">
                        Unlimited opportunities with one key
                      </p>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="header-menu-item center header-dropdown-menu">
            <span
              id="ba-trade"
              className="header-menu-item_view typography-Subtitle4"
            >
              Futures
              <i className="bx bx-chevron-down"></i>
            </span>
            <div className="header-menu-subgrid header-menu-subgrid-1">
              <ul className="header-menu-subgrid-group">
                <li className="header-menu-subgrid-group-li">
                  <a
                    className="header-nav-subitem"
                    href="https://www.binance.com/en/eoptions"
                    target="_self"
                    id="ba-voptions"
                  >
                    <div className="header-nav-subicon_warp">
                      <svg
                        className="header-nav-subicon_icon"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <symbol
                          viewBox="0 0 24 24"
                          id="1b699f52-7834-4508-8bae-1875a5e4acab"
                        >
                          <path
                            d="M3 9H7V17C7 18.1046 6.10457 19 5 19L5 19C3.89543 19 3 18.1046 3 17V9Z"
                            fill="#F0B90B"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M9 3H22V16C22 18.2091 20.2091 20 18 20H9H7C8.10457 20 9 19.1046 9 18V3ZM15.219 16.5H16.5415V15.3863C18.0844 15.1311 18.8037 14.1682 18.8037 13.0313C18.8037 11.848 18.0264 11.1868 16.4023 10.8155V8.88979C16.9591 9.0174 17.3304 9.27262 17.6088 9.58585L18.6645 8.63457C18.154 8.05452 17.4696 7.6949 16.5415 7.59049V6.5H15.219V7.59049C13.7225 7.7645 12.922 8.57657 12.922 9.79466C12.922 10.92 13.6297 11.6856 15.3698 12.0452V14.1334C14.7202 14.0406 14.1749 13.7274 13.7341 13.2633L12.69 14.2146C13.27 14.8527 14.0473 15.3283 15.219 15.4327V16.5ZM15.3698 10.5835C14.7782 10.4211 14.5229 10.1891 14.5229 9.74826C14.5229 9.29582 14.7782 8.9826 15.3698 8.86659V10.5835ZM16.4023 12.2773C17.0636 12.4745 17.2028 12.8225 17.2028 13.1589C17.2028 13.5998 16.9475 13.9594 16.4023 14.1102V12.2773Z"
                            fill="currentColor"
                          />
                        </symbol>
                        <use href="#1b699f52-7834-4508-8bae-1875a5e4acab" />
                      </svg>
                    </div>
                    <div className="header-nav-subitemtext">
                      <div className="header-nav-subtitle">
                        <div className="typography-Subtitle4">
                          USDⓈ-M Futures
                        </div>
                        <svg
                          className="bn-svg header-nav-subarrow"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M21 11.999l-7.071-7.071-1.768 1.768 4.055 4.054H2.999v2.5h13.216l-4.054 4.053 1.768 1.768L21 12v-.001z"
                            fill="currentColor"
                          />
                        </svg>
                      </div>
                      <p className="header-nav-subdesc typography-caption1">
                        Contracts settled in USDT and USDC
                      </p>
                    </div>
                  </a>
                </li>
                <li className="header-menu-subgrid-group-li">
                  <a
                    className="header-nav-subitem"
                    href="https://www.binance.com/en/eoptions"
                    target="_self"
                    id="ba-voptions"
                  >
                    <div className="header-nav-subicon_warp">
                      <svg
                        className="header-nav-subicon_icon"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <symbol
                          viewBox="0 0 24 24"
                          id="cf4666fd-0615-45a1-a201-f0f8f12b9e87"
                        >
                          <path
                            d="M3 9H7V17C7 18.1046 6.10457 19 5 19L5 19C3.89543 19 3 18.1046 3 17V9Z"
                            fill="#F0B90B"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M22 3H9V18C9 19.1046 8.10457 20 7 20H18C20.2091 20 22 18.2091 22 16V3ZM18.75 9.25C18.75 11.0449 17.2949 12.5 15.5 12.5C13.7051 12.5 12.25 11.0449 12.25 9.25C12.25 7.45507 13.7051 6 15.5 6C17.2949 6 18.75 7.45507 18.75 9.25ZM18.75 14.5V17H12.25V14.5H18.75ZM14 9.25L15.5 7.75L17 9.25L15.5 10.75L14 9.25Z"
                            fill="currentColor"
                          />
                        </symbol>
                        <use href="#cf4666fd-0615-45a1-a201-f0f8f12b9e87" />
                      </svg>
                    </div>
                    <div className="header-nav-subitemtext">
                      <div className="header-nav-subtitle">
                        <div className="typography-Subtitle4">
                          COIN-M Futures
                        </div>
                        <svg
                          className="bn-svg header-nav-subarrow"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M21 11.999l-7.071-7.071-1.768 1.768 4.055 4.054H2.999v2.5h13.216l-4.054 4.053 1.768 1.768L21 12v-.001z"
                            fill="currentColor"
                          />
                        </svg>
                      </div>
                      <p className="header-nav-subdesc typography-caption1">
                        Contracts settled in cryptocurrency
                      </p>
                    </div>
                  </a>
                </li>
                <li className="header-menu-subgrid-group-li">
                  <a
                    className="header-nav-subitem"
                    href="https://www.binance.com/en/eoptions"
                    target="_self"
                    id="ba-voptions"
                  >
                    <div className="header-nav-subicon_warp">
                      <svg
                        className="header-nav-subicon_icon"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <symbol
                          viewBox="0 0 24 24"
                          id="44bf974e-b3ce-4389-b2ae-ee6f2492227b"
                        >
                          <path
                            d="M3 9H7V17C7 18.1046 6.10457 19 5 19L5 19C3.89543 19 3 18.1046 3 17V9Z"
                            fill="#F0B90B"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M9 3H22V16C22 18.2091 20.2091 20 18 20H9H7C8.10457 20 9 19.1046 9 18V3ZM18.3526 15.25H13.15V7.75H18.3526V9.44977H15.0249V10.6141H17.8787V12.3035H15.0249V13.5502H18.3526V15.25Z"
                            fill="currentColor"
                          />
                        </symbol>
                        <use href="#44bf974e-b3ce-4389-b2ae-ee6f2492227b" />
                      </svg>
                    </div>
                    <div className="header-nav-subitemtext">
                      <div className="header-nav-subtitle">
                        <div className="typography-Subtitle4">Options</div>
                        <svg
                          className="bn-svg header-nav-subarrow"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M21 11.999l-7.071-7.071-1.768 1.768 4.055 4.054H2.999v2.5h13.216l-4.054 4.053 1.768 1.768L21 12v-.001z"
                            fill="currentColor"
                          />
                        </svg>
                      </div>
                      <p className="header-nav-subdesc typography-caption1">
                        USDT Options with limited downside and affordable entry
                      </p>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="header-menu-item">
            <a
              className="header-menu-item_view typography-Subtitle4"
              href="https://www.binance.com/en/markets/overview"
            >
              Earn
            </a>
          </div>
          <div className="header-menu-item center header-dropdown-menu">
            <span
              id="ba-trade"
              className="header-menu-item_view typography-Subtitle4"
            >
              Square
              <i className="bx bx-chevron-down"></i>
            </span>
            <div className="header-menu-subgrid header-menu-subgrid-1">
              <ul className="header-menu-subgrid-group">
                <li className="header-menu-subgrid-group-li">
                  <a
                    className="header-nav-subitem"
                    href="https://www.binance.com/en/eoptions"
                    target="_self"
                    id="ba-voptions"
                  >
                    <div className="header-nav-subicon_warp">
                      <svg
                        className="header-nav-subicon_icon"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <symbol
                          viewBox="0 0 24 24"
                          id="76ce0f2d-1efd-4744-a125-55a8aae4476d"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M7.5 2.5H21.5V14.5H18.5V5.5H7.5V2.5Z"
                            fill="#F0B90B"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M16.5 7.5H2.5V18.5H5.5V21.5L8.5 18.5H16.5V7.5ZM6.59088 10.4499C9.60344 10.4499 12.0456 12.892 12.0456 15.9046L13.5 15.9046C13.5 12.0888 10.4067 8.99551 6.59088 8.99551V10.4499ZM9.1361 15.9046C9.1361 14.4989 7.99657 13.3594 6.59088 13.3594V11.905C8.79981 11.905 10.5905 13.6957 10.5905 15.9046L9.1361 15.9046ZM7.68161 15.9047C7.68161 16.5071 7.19324 16.9955 6.59081 16.9955C5.98837 16.9955 5.5 16.5071 5.5 15.9047C5.5 15.3023 5.98837 14.8139 6.59081 14.8139C7.19324 14.8139 7.68161 15.3023 7.68161 15.9047Z"
                            fill="currentColor"
                          />
                        </symbol>
                        <use href="#76ce0f2d-1efd-4744-a125-55a8aae4476d" />
                      </svg>
                    </div>
                    <div className="header-nav-subitemtext">
                      <div className="header-nav-subtitle">
                        <div className="typography-Subtitle4">Square</div>
                        <svg
                          className="bn-svg header-nav-subarrow"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M21 11.999l-7.071-7.071-1.768 1.768 4.055 4.054H2.999v2.5h13.216l-4.054 4.053 1.768 1.768L21 12v-.001z"
                            fill="currentColor"
                          />
                        </svg>
                      </div>
                      <p className="header-nav-subdesc typography-caption1">
                        Stay informed with everything crypto
                      </p>
                    </div>
                  </a>
                </li>
                <li className="header-menu-subgrid-group-li">
                  <a
                    className="header-nav-subitem"
                    href="https://www.binance.com/en/eoptions"
                    target="_self"
                    id="ba-voptions"
                  >
                    <div className="header-nav-subicon_warp">
                      <svg
                        className="header-nav-subicon_icon"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <symbol
                          viewBox="0 0 24 24"
                          id="025cb8a5-b4c7-41db-a476-642bf937c9a1"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M22.8254 9.24998L12.0001 3L7.45358 5.625L14.6704 9.79165L12.9384 10.7917L5.72153 6.625L1.1748 9.24998L12.0001 15.5L22.8254 9.24998ZM6.80371 17.9999L11.9999 21L17.196 17.9999V14.5L11.9999 17.5001L6.80371 14.5V17.9999Z"
                            fill="currentColor"
                          />
                          <path
                            d="M2.99427 12.79L0.75 15.0343L2.99427 17.29L5.25 15.0343L2.99427 12.79Z"
                            fill="#F0B90B"
                          />
                        </symbol>
                        <use href="#025cb8a5-b4c7-41db-a476-642bf937c9a1" />
                      </svg>
                    </div>
                    <div className="header-nav-subitemtext">
                      <div className="header-nav-subtitle">
                        <div className="typography-Subtitle4">
                          Academy (Learn & Earn)
                        </div>
                        <svg
                          className="bn-svg header-nav-subarrow"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M21 11.999l-7.071-7.071-1.768 1.768 4.055 4.054H2.999v2.5h13.216l-4.054 4.053 1.768 1.768L21 12v-.001z"
                            fill="currentColor"
                          />
                        </svg>
                      </div>
                      <p className="header-nav-subdesc typography-caption1">
                        Earn crypto by learning about blockchain
                      </p>
                    </div>
                  </a>
                </li>
                <li className="header-menu-subgrid-group-li">
                  <a
                    className="header-nav-subitem"
                    href="https://www.binance.com/en/eoptions"
                    target="_self"
                    id="ba-voptions"
                  >
                    <div className="header-nav-subicon_warp">
                      <svg
                        className="header-nav-subicon_icon"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <symbol
                          viewBox="0 0 24 24"
                          id="647cf713-4017-41a0-a4ce-10f5fca9afbd"
                        >
                          <path d="M3 4H21V6H3V4Z" fill="#F0B90B" />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M3 8H21V19.9999H3V8ZM5 10.25H19V11.75H5V10.25ZM10.5 13.25H5V17.75H10.5V13.25ZM12 13.25H19V14.75H12V13.25ZM19 16.25H12V17.75H19V16.25Z"
                            fill="currentColor"
                          />
                        </symbol>
                        <use href="#647cf713-4017-41a0-a4ce-10f5fca9afbd" />
                      </svg>
                    </div>
                    <div className="header-nav-subitemtext">
                      <div className="header-nav-subtitle">
                        <div className="typography-Subtitle4">Blog</div>
                        <svg
                          className="bn-svg header-nav-subarrow"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M21 11.999l-7.071-7.071-1.768 1.768 4.055 4.054H2.999v2.5h13.216l-4.054 4.053 1.768 1.768L21 12v-.001z"
                            fill="currentColor"
                          />
                        </svg>
                      </div>
                      <p className="header-nav-subdesc typography-caption1">
                        Expand your knowledge and get the latest insights
                      </p>
                    </div>
                  </a>
                </li>
                <li className="header-menu-subgrid-group-li">
                  <a
                    className="header-nav-subitem"
                    href="https://www.binance.com/en/eoptions"
                    target="_self"
                    id="ba-voptions"
                  >
                    <div className="header-nav-subicon_warp">
                      <svg
                        className="header-nav-subicon_icon"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <symbol
                          viewBox="0 0 24 24"
                          id="2f6deb4b-9217-45e5-9a82-5a3d3a9af55f"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M9.89658 1.87524L16.029 8.00769L11.231 12.8057L8.80596 10.3806L8.78002 10.4074C7.07479 12.1656 7.02167 15.0525 8.72798 16.8095C9.52621 17.6314 10.5546 18.0552 11.5901 18.0808H19.9849V21.0633H4.01538V18.0808H6.73253C6.69516 18.0442 6.65814 18.0071 6.62146 17.9693C4.28383 15.5622 4.62343 10.9389 6.94739 8.52204L5.09859 6.67324L6.45185 5.31998L5.04152 3.90965L7.16284 1.78833L8.57317 3.19866L9.89658 1.87524Z"
                            fill="currentColor"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M16.2773 10.9941C17.9342 10.9941 19.2773 12.3373 19.2773 13.9941C19.2773 15.651 17.9342 16.9941 16.2773 16.9941C14.6205 16.9941 13.2773 15.651 13.2773 13.9941C13.2773 12.3373 14.6205 10.9941 16.2773 10.9941Z"
                            fill="#F0B90B"
                          />
                        </symbol>
                        <use href="#2f6deb4b-9217-45e5-9a82-5a3d3a9af55f" />
                      </svg>
                    </div>
                    <div className="header-nav-subitemtext">
                      <div className="header-nav-subtitle">
                        <div className="typography-Subtitle4">Research</div>
                        <svg
                          className="bn-svg header-nav-subarrow"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M21 11.999l-7.071-7.071-1.768 1.768 4.055 4.054H2.999v2.5h13.216l-4.054 4.053 1.768 1.768L21 12v-.001z"
                            fill="currentColor"
                          />
                        </svg>
                      </div>
                      <p className="header-nav-subdesc typography-caption1">
                        Institutional-grade analysis, in-depth insights, and
                        more
                      </p>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="header-menu-item center header-dropdown-menu">
            <span
              id="ba-trade"
              className="header-menu-item_view typography-Subtitle4"
            >
              More
              <i className="bx bx-chevron-down"></i>
            </span>
            <div className="header-menu-subgrid header-menu-subgrid-2">
              <ul className="header-menu-subgrid-group">
                <li className="header-menu-subgrid-group-li">
                  <a
                    className="header-nav-subitem"
                    href="https://www.binance.com/en/trade/BTC_USDT?type=spot"
                    target="_self"
                    id="ba-spot-only"
                  >
                    <div className="header-nav-subicon_warp">
                      <svg
                        className="header-nav-subicon_icon"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 22"
                      >
                        <symbol id="a" viewBox="0 0 20 22">
                          <path
                            fill="currentColor"
                            fillRule="evenodd"
                            d="M12.071 4.333a4.18 4.18 0 0 0-4.028 3.064 5.7 5.7 0 0 1 5.144 5.144 4.18 4.18 0 0 0-1.116-8.208m-.38 8.738a4.179 4.179 0 1 0-8.358 0 4.179 4.179 0 0 0 8.358 0m-6.078 0 1.9 1.9 1.899-1.9-1.9-1.9z"
                            clipRule="evenodd"
                          />
                          <path
                            fill="#F0B90B"
                            d="M8.333 3.5H2.5v5.833zM11.667 18.5H17.5v-5.833z"
                          />
                        </symbol>
                        <use href="#a" />
                      </svg>
                    </div>
                    <div className="header-nav-subitemtext">
                      <div className="header-nav-subtitle">
                        <div className="typography-Subtitle4">
                          VIP & Institutional
                        </div>
                        <svg
                          className="bn-svg header-nav-subarrow"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <symbol
                            viewBox="0 0 24 24"
                            id="46012157-5d5f-4314-8f56-d1580bf77499"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M21 11.9988L13.9289 4.92773L12.1612 6.6955L16.2157 10.75L2.99902 10.75L2.99902 13.25L16.2145 13.25L12.1612 17.3033L13.9289 19.0711L21 12L20.9994 11.9994L21 11.9988Z"
                              fill="currentColor"
                            />
                          </symbol>
                          <use href="#46012157-5d5f-4314-8f56-d1580bf77499" />
                        </svg>
                      </div>
                      <p className="header-nav-subdesc typography-caption1">
                        Your trusted digital asset platform for VIPs and
                        institutions
                      </p>
                    </div>
                  </a>
                </li>
                <li className="header-menu-subgrid-group-li">
                  <a
                    className="header-nav-subitem"
                    href="https://www.binance.com/en/trade?type=cross"
                    target="_self"
                    id="ba-margin"
                  >
                    <div className="header-nav-subicon_warp">
                      <svg
                        className="header-nav-subicon_icon"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <symbol
                          viewBox="0 0 24 24"
                          id="84d895c2-4bdf-4cd6-85f6-f2f04f130c50"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M18.7678 7.0185L5.82854 19.9577L4.06077 18.19L17 5.25073L17.8839 6.13462L18.7678 7.0185Z"
                            fill="currentColor"
                          />
                          <path d="M12 4H20V12L12 4Z" fill="currentColor" />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M7.5 11C9.433 11 11 9.433 11 7.5C11 5.567 9.433 4 7.5 4C5.567 4 4 5.567 4 7.5C4 9.433 5.567 11 7.5 11ZM7.5 5.96875L5.96875 7.5L7.5 9.03125L9.03125 7.50017L7.5 5.96875Z"
                            fill="currentColor"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M16.5 20C18.433 20 20 18.433 20 16.5C20 14.567 18.433 13 16.5 13C14.567 13 13 14.567 13 16.5C13 18.433 14.567 20 16.5 20ZM16.5 14.9688L14.9688 16.5L16.5 18.0312L18.0312 16.5002L16.5 14.9688Z"
                            fill="#F0B90B"
                          />
                        </symbol>
                        <use href="#84d895c2-4bdf-4cd6-85f6-f2f04f130c50" />
                      </svg>
                    </div>
                    <div className="header-nav-subitemtext">
                      <div className="header-nav-subtitle">
                        <div className="typography-Subtitle4">Launchpool</div>
                        <svg
                          className="bn-svg header-nav-subarrow"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <symbol
                            viewBox="0 0 24 24"
                            id="46012157-5d5f-4314-8f56-d1580bf77499"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M21 11.9988L13.9289 4.92773L12.1612 6.6955L16.2157 10.75L2.99902 10.75L2.99902 13.25L16.2145 13.25L12.1612 17.3033L13.9289 19.0711L21 12L20.9994 11.9994L21 11.9988Z"
                              fill="currentColor"
                            />
                          </symbol>
                          <use href="#46012157-5d5f-4314-8f56-d1580bf77499" />
                        </svg>
                      </div>
                      <p className="header-nav-subdesc typography-caption1">
                        Discover and gain access to new token launches
                      </p>
                    </div>
                  </a>
                </li>
                <li className="header-menu-subgrid-group-li">
                  <a
                    className="header-nav-subitem"
                    href="https://p2p.binance.com/en"
                    target="_self"
                    id="ba-titile2-1"
                  >
                    <div className="header-nav-subicon_warp">
                      <svg
                        className="header-nav-subicon_icon"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <symbol
                          viewBox="0 0 24 24"
                          id="4b125c12-27b5-4233-bb75-dcffd198d46c"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M15 4H18.5H21V6.5V8.5H18.5V6.5H15V4ZM5.83333 9.99805C4.54467 9.99805 3.5 11.0427 3.5 12.3314V13.998H11.5V12.3314C11.5 11.0427 10.4553 9.99805 9.16667 9.99805H5.83333ZM14.8333 16C13.5447 16 12.5 17.0447 12.5 18.3333V20H20.5V18.3333C20.5 17.0447 19.4553 16 18.1667 16H14.8333ZM9 17.5H5.5V15.5H3V17.5V20H5.5H9V17.5ZM19 12.502C19 13.8827 17.8807 15.002 16.5 15.002C15.1193 15.002 14 13.8827 14 12.502C14 11.1212 15.1193 10.002 16.5 10.002C17.8807 10.002 19 11.1212 19 12.502ZM7.5 9C8.88071 9 10 7.88071 10 6.5C10 5.11929 8.88071 4 7.5 4C6.11929 4 5 5.11929 5 6.5C5 7.88071 6.11929 9 7.5 9Z"
                            fill="currentColor"
                          />
                          <path d="M15 4H21V6.5H15V4Z" fill="#F0B90B" />
                          <path d="M3 17.5H9V20H3V17.5Z" fill="#F0B90B" />
                          <path d="M3 15.5H5.5V20H3V15.5Z" fill="#F0B90B" />
                          <path d="M18.5 4H21V8.5H18.5V4Z" fill="#F0B90B" />
                        </symbol>
                        <use href="#4b125c12-27b5-4233-bb75-dcffd198d46c" />
                      </svg>
                    </div>
                    <div className="header-nav-subitemtext">
                      <div className="header-nav-subtitle">
                        <div className="typography-Subtitle4">Megadrop</div>
                        <svg
                          className="bn-svg header-nav-subarrow"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <symbol
                            viewBox="0 0 24 24"
                            id="46012157-5d5f-4314-8f56-d1580bf77499"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M21 11.9988L13.9289 4.92773L12.1612 6.6955L16.2157 10.75L2.99902 10.75L2.99902 13.25L16.2145 13.25L12.1612 17.3033L13.9289 19.0711L21 12L20.9994 11.9994L21 11.9988Z"
                              fill="currentColor"
                            />
                          </symbol>
                          <use href="#46012157-5d5f-4314-8f56-d1580bf77499" />
                        </svg>
                      </div>
                      <p className="header-nav-subdesc typography-caption1">
                        Lock your BNB and complete Web3 quests for boosted
                        airdrop rewards
                      </p>
                    </div>
                  </a>
                </li>
                <li className="header-menu-subgrid-group-li">
                  <a
                    className="header-nav-subitem"
                    href="https://www.binance.com/en/convert"
                    target="_self"
                    id="ba-convert-block"
                  >
                    <div className="header-nav-subicon_warp">
                      <svg
                        className="header-nav-subicon_icon"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <symbol
                          viewBox="0 0 24 24"
                          id="a10d2770-3254-4843-a665-ee8115e4e9c7"
                        >
                          <path d="M14 3H21V10L14 3Z" fill="currentColor" />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6ZM12 14.4L14.4 12L12 9.6L9.6 12L12 14.4Z"
                            fill="currentColor"
                          />
                          <path d="M3 21H10L3 14V21Z" fill="currentColor" />
                          <path d="M3 21H10L3 14V21Z" fill="#F0B90B" />
                          <path d="M14 3H21V10L14 3Z" fill="#F0B90B" />
                        </symbol>
                        <use href="#a10d2770-3254-4843-a665-ee8115e4e9c7" />
                      </svg>
                    </div>
                    <div className="header-nav-subitemtext">
                      <div className="header-nav-subtitle">
                        <div className="typography-Subtitle4">Mining Pool</div>
                        <svg
                          className="bn-svg header-nav-subarrow"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <symbol
                            viewBox="0 0 24 24"
                            id="46012157-5d5f-4314-8f56-d1580bf77499"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M21 11.9988L13.9289 4.92773L12.1612 6.6955L16.2157 10.75L2.99902 10.75L2.99902 13.25L16.2145 13.25L12.1612 17.3033L13.9289 19.0711L21 12L20.9994 11.9994L21 11.9988Z"
                              fill="currentColor"
                            />
                          </symbol>
                          <use href="#46012157-5d5f-4314-8f56-d1580bf77499" />
                        </svg>
                      </div>
                      <p className="header-nav-subdesc typography-caption1">
                        Mine more rewards by connecting to the pool
                      </p>
                    </div>
                  </a>
                </li>
                <li className="header-menu-subgrid-group-li">
                  <a
                    className="header-nav-subitem"
                    href="https://www.binance.com/en/convert"
                    target="_self"
                    id="ba-convert-block"
                  >
                    <div className="header-nav-subicon_warp">
                      <svg
                        className="header-nav-subicon_icon"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <symbol
                          viewBox="0 0 24 24"
                          id="a10d2770-3254-4843-a665-ee8115e4e9c7"
                        >
                          <path d="M14 3H21V10L14 3Z" fill="currentColor" />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6ZM12 14.4L14.4 12L12 9.6L9.6 12L12 14.4Z"
                            fill="currentColor"
                          />
                          <path d="M3 21H10L3 14V21Z" fill="currentColor" />
                          <path d="M3 21H10L3 14V21Z" fill="#F0B90B" />
                          <path d="M14 3H21V10L14 3Z" fill="#F0B90B" />
                        </symbol>
                        <use href="#a10d2770-3254-4843-a665-ee8115e4e9c7" />
                      </svg>
                    </div>
                    <div className="header-nav-subitemtext">
                      <div className="header-nav-subtitle">
                        <div className="typography-Subtitle4">Pay</div>
                        <svg
                          className="bn-svg header-nav-subarrow"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <symbol
                            viewBox="0 0 24 24"
                            id="46012157-5d5f-4314-8f56-d1580bf77499"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M21 11.9988L13.9289 4.92773L12.1612 6.6955L16.2157 10.75L2.99902 10.75L2.99902 13.25L16.2145 13.25L12.1612 17.3033L13.9289 19.0711L21 12L20.9994 11.9994L21 11.9988Z"
                              fill="currentColor"
                            />
                          </symbol>
                          <use href="#46012157-5d5f-4314-8f56-d1580bf77499" />
                        </svg>
                      </div>
                      <p className="header-nav-subdesc typography-caption1">
                        Send, receive and spend crypto
                      </p>
                    </div>
                  </a>
                </li>
                <li className="header-menu-subgrid-group-li">
                  <a
                    className="header-nav-subitem"
                    href="https://www.binance.com/en/convert"
                    target="_self"
                    id="ba-convert-block"
                  >
                    <div className="header-nav-subicon_warp">
                      <svg
                        className="header-nav-subicon_icon"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <symbol
                          viewBox="0 0 24 24"
                          id="a10d2770-3254-4843-a665-ee8115e4e9c7"
                        >
                          <path d="M14 3H21V10L14 3Z" fill="currentColor" />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6ZM12 14.4L14.4 12L12 9.6L9.6 12L12 14.4Z"
                            fill="currentColor"
                          />
                          <path d="M3 21H10L3 14V21Z" fill="currentColor" />
                          <path d="M3 21H10L3 14V21Z" fill="#F0B90B" />
                          <path d="M14 3H21V10L14 3Z" fill="#F0B90B" />
                        </symbol>
                        <use href="#a10d2770-3254-4843-a665-ee8115e4e9c7" />
                      </svg>
                    </div>
                    <div className="header-nav-subitemtext">
                      <div className="header-nav-subtitle">
                        <div className="typography-Subtitle4">Loans</div>
                        <svg
                          className="bn-svg header-nav-subarrow"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <symbol
                            viewBox="0 0 24 24"
                            id="46012157-5d5f-4314-8f56-d1580bf77499"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M21 11.9988L13.9289 4.92773L12.1612 6.6955L16.2157 10.75L2.99902 10.75L2.99902 13.25L16.2145 13.25L12.1612 17.3033L13.9289 19.0711L21 12L20.9994 11.9994L21 11.9988Z"
                              fill="currentColor"
                            />
                          </symbol>
                          <use href="#46012157-5d5f-4314-8f56-d1580bf77499" />
                        </svg>
                      </div>
                      <p className="header-nav-subdesc typography-caption1">
                        Get an instant loan secured by crypto assets
                      </p>
                    </div>
                  </a>
                </li>
              </ul>
              <ul className="header-menu-subgrid-group">
                <li className="header-menu-subgrid-group-li">
                  <a
                    className="header-nav-subitem"
                    href="https://www.binance.com/en/trading-bots"
                    target="_self"
                    id="ba-StrategyTrading"
                  >
                    <div className="header-nav-subicon_warp">
                      <svg
                        className="header-nav-subicon_icon"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <symbol
                          viewBox="0 0 24 24"
                          id="57fae4b4-0f53-4123-abca-11da96fcdeca"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M21 5H3V19H21V5ZM5.25999 12L9.50264 7.75732L13.7453 12L9.50264 16.2426L5.25999 12ZM18.25 7.99996H15.75V16H18.25V7.99996Z"
                            fill="currentColor"
                          />
                          <path
                            d="M7.38135 12L9.50267 9.87868L11.624 12L9.50267 14.1213L7.38135 12Z"
                            fill="#F0B90B"
                          />
                        </symbol>
                        <use href="#57fae4b4-0f53-4123-abca-11da96fcdeca" />
                      </svg>
                    </div>
                    <div className="header-nav-subitemtext">
                      <div className="header-nav-subtitle">
                        <div className="typography-Subtitle4">NFT</div>
                        <svg
                          className="bn-svg header-nav-subarrow"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <symbol
                            viewBox="0 0 24 24"
                            id="46012157-5d5f-4314-8f56-d1580bf77499"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M21 11.9988L13.9289 4.92773L12.1612 6.6955L16.2157 10.75L2.99902 10.75L2.99902 13.25L16.2145 13.25L12.1612 17.3033L13.9289 19.0711L21 12L20.9994 11.9994L21 11.9988Z"
                              fill="currentColor"
                            />
                          </symbol>
                          <use href="#46012157-5d5f-4314-8f56-d1580bf77499" />
                        </svg>
                      </div>
                      <p className="header-nav-subdesc typography-caption1">
                        Explore NFTs from creators worldwide
                      </p>
                    </div>
                  </a>
                </li>
                <li className="header-menu-subgrid-group-li">
                  <a
                    className="header-nav-subitem"
                    href="https://www.binance.com/en/copy-trading"
                    target="_self"
                    id="ba-copy-trading"
                  >
                    <div className="header-nav-subicon_warp">
                      <svg
                        className="header-nav-subicon_icon"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <symbol
                          viewBox="0 0 24 24"
                          id="fe33bddf-7825-48e1-a5c4-f808af10ee7f"
                        >
                          <path d="M14 11V21H10V11H14Z" fill="currentColor" />
                          <path d="M4 15H8V21H4V15Z" fill="currentColor" />
                          <path d="M20 21H16V14H20V21Z" fill="currentColor" />
                          <path d="M12 3L15 6L12 9L9 6L12 3Z" fill="#F0B90B" />
                        </symbol>
                        <use href="#fe33bddf-7825-48e1-a5c4-f808af10ee7f" />
                      </svg>
                    </div>
                    <div className="header-nav-subitemtext">
                      <div className="header-nav-subtitle">
                        <div className="typography-Subtitle4">Fan Token</div>
                        <svg
                          className="bn-svg header-nav-subarrow"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <symbol
                            viewBox="0 0 24 24"
                            id="46012157-5d5f-4314-8f56-d1580bf77499"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M21 11.9988L13.9289 4.92773L12.1612 6.6955L16.2157 10.75L2.99902 10.75L2.99902 13.25L16.2145 13.25L12.1612 17.3033L13.9289 19.0711L21 12L20.9994 11.9994L21 11.9988Z"
                              fill="currentColor"
                            />
                          </symbol>
                          <use href="#46012157-5d5f-4314-8f56-d1580bf77499" />
                        </svg>
                      </div>
                      <p className="header-nav-subdesc typography-caption1">
                        Discover an all-new fandom and unlock unlimited fan
                        experiences
                      </p>
                    </div>
                  </a>
                </li>
                <li className="header-menu-subgrid-group-li">
                  <a
                    className="header-nav-subitem"
                    href="https://www.binance.com/en/binance-api"
                    target="_self"
                    id="header-tier2-api"
                  >
                    <div className="header-nav-subicon_warp">
                      <svg
                        className="header-nav-subicon_icon"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <symbol
                          viewBox="0 0 24 24"
                          id="84c0f125-57d9-486e-b761-1327c6936b6e"
                        >
                          <path
                            d="M18 9C18 5.68629 15.3137 3 12 3C8.68629 3 6 5.68629 6 9H9.5L12 6.5L14.5 9H18Z"
                            fill="#F0B90B"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M21 11H3V15H5V17H3V19H5V21H21V11ZM5 19V17H7V19H5ZM15 14H19V18H15V14Z"
                            fill="currentColor"
                          />
                        </symbol>
                        <use href="#84c0f125-57d9-486e-b761-1327c6936b6e" />
                      </svg>
                    </div>
                    <div className="header-nav-subitemtext">
                      <div className="header-nav-subtitle">
                        <div className="typography-Subtitle4">Web3 Wallet</div>
                        <svg
                          className="bn-svg header-nav-subarrow"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <symbol
                            viewBox="0 0 24 24"
                            id="46012157-5d5f-4314-8f56-d1580bf77499"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M21 11.9988L13.9289 4.92773L12.1612 6.6955L16.2157 10.75L2.99902 10.75L2.99902 13.25L16.2145 13.25L12.1612 17.3033L13.9289 19.0711L21 12L20.9994 11.9994L21 11.9988Z"
                              fill="currentColor"
                            />
                          </symbol>
                          <use href="#46012157-5d5f-4314-8f56-d1580bf77499" />
                        </svg>
                      </div>
                      <p className="header-nav-subdesc typography-caption1">
                        Meet the next-generation Web3 wallet
                      </p>
                    </div>
                  </a>
                </li>
                <li className="header-menu-subgrid-group-li">
                  <a
                    className="header-nav-subitem"
                    href="https://www.binance.com/en/binance-api"
                    target="_self"
                    id="header-tier2-api"
                  >
                    <div className="header-nav-subicon_warp">
                      <svg
                        className="header-nav-subicon_icon"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <symbol
                          viewBox="0 0 20 20"
                          id="7b385dcd-737a-48ad-a055-5ac7fb1ec302"
                        >
                          <path
                            d="M5.873 4.83108L9.99998 2.5L14.127 4.83108L12.6455 5.64189L9.99998 4.22297L7.35448 5.64189L5.873 4.83108ZM14.127 7.66892L12.6455 6.85811L9.99998 8.27703L7.35448 6.85811L5.873 7.66892V9.39189L8.5185 10.8108V13.75L9.99998 14.5608L11.4815 13.75V10.8108L14.127 9.39189V7.66892ZM14.127 12.3311V10.6081L12.6455 11.4189V13.1419L14.127 12.3311ZM15.1852 12.8378L12.5397 14.2568V15.9797L16.6666 13.6486V9.08784L15.1852 10V12.8378ZM13.7037 6.25L15.1852 7.06081V8.78378L16.6666 7.97297V6.25L15.1852 5.43919L13.7037 6.25ZM8.5185 14.9662V16.6892L9.99998 17.5L11.4815 16.6892V14.9662L9.99998 15.777L8.5185 14.9662ZM5.873 12.3311L7.35448 13.1419V11.4189L5.873 10.6081V12.3311ZM8.5185 6.25L9.99998 7.06081L11.4815 6.25L9.99998 5.43919L8.5185 6.25ZM4.8148 7.06081L6.29628 6.25L4.8148 5.43919L3.33331 6.25V7.97297L4.8148 8.78378V7.06081ZM4.8148 10L3.33331 9.18919V13.75L7.4603 16.0811V14.3581L4.8148 12.9392V10Z"
                            fill="currentColor"
                          />
                        </symbol>
                        <use href="#7b385dcd-737a-48ad-a055-5ac7fb1ec302" />
                      </svg>
                    </div>
                    <div className="header-nav-subitemtext">
                      <div className="header-nav-subtitle">
                        <div className="typography-Subtitle4">BNB Chain</div>
                        <svg
                          className="bn-svg header-nav-subarrow"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <symbol
                            viewBox="0 0 24 24"
                            id="46012157-5d5f-4314-8f56-d1580bf77499"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M21 11.9988L13.9289 4.92773L12.1612 6.6955L16.2157 10.75L2.99902 10.75L2.99902 13.25L16.2145 13.25L12.1612 17.3033L13.9289 19.0711L21 12L20.9994 11.9994L21 11.9988Z"
                              fill="currentColor"
                            />
                          </symbol>
                          <use href="#46012157-5d5f-4314-8f56-d1580bf77499" />
                        </svg>
                      </div>
                      <p className="header-nav-subdesc typography-caption1">
                        The most popular blockchain to build your own dApp
                      </p>
                    </div>
                  </a>
                </li>
                <li className="header-menu-subgrid-group-li">
                  <a
                    className="header-nav-subitem"
                    href="https://www.binance.com/en/binance-api"
                    target="_self"
                    id="header-tier2-api"
                  >
                    <div className="header-nav-subicon_warp">
                      <svg
                        className="header-nav-subicon_icon"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <symbol
                          viewBox="0 0 24 24"
                          id="11921b4c-6aab-4680-be62-a0a02408b32a"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M5.46447 15.4595C4.52678 14.5218 4 13.25 4 11.9239L4 8.33813L9.54049 13.8787C10.4782 14.8163 11.0049 16.0881 11.0049 17.4142L11.0049 20.9999L5.46447 15.4595ZM18.5356 15.4595C19.4733 14.5218 20.0001 13.25 20.0001 11.9239L20.0001 8.33813L14.4596 13.8787C13.5219 14.8163 12.9951 16.0881 12.9951 17.4142L12.9951 20.9999L18.5356 15.4595Z"
                            fill="currentColor"
                          />
                          <path
                            d="M20.0001 11.9239C20.0001 13.25 19.4733 14.5218 18.5356 15.4595L12.9951 20.9999L12.9951 17.4142C12.9951 16.0881 13.5219 14.8163 14.4596 13.8787L20.0001 8.33813L20.0001 11.9239Z"
                            fill="#F0B90B"
                          />
                          <path
                            d="M13.075 3.4448L12.0019 4.5179L10.9288 3.4448C9.68727 2.20331 7.67441 2.20335 6.43296 3.44488C5.1916 4.68634 5.19162 6.69905 6.43301 7.94048L12.0019 13.5096L17.5708 7.94066C18.8123 6.69916 18.8123 4.68629 17.5708 3.4448C16.3293 2.2033 14.3165 2.2033 13.075 3.4448Z"
                            fill="currentColor"
                          />
                        </symbol>
                        <use href="#11921b4c-6aab-4680-be62-a0a02408b32a" />
                      </svg>
                    </div>
                    <div className="header-nav-subitemtext">
                      <div className="header-nav-subtitle">
                        <div className="typography-Subtitle4">Charity</div>
                        <svg
                          className="bn-svg header-nav-subarrow"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <symbol
                            viewBox="0 0 24 24"
                            id="46012157-5d5f-4314-8f56-d1580bf77499"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M21 11.9988L13.9289 4.92773L12.1612 6.6955L16.2157 10.75L2.99902 10.75L2.99902 13.25L16.2145 13.25L12.1612 17.3033L13.9289 19.0711L21 12L20.9994 11.9994L21 11.9988Z"
                              fill="currentColor"
                            />
                          </symbol>
                          <use href="#46012157-5d5f-4314-8f56-d1580bf77499" />
                        </svg>
                      </div>
                      <p className="header-nav-subdesc typography-caption1">
                        Blockchain empowers charity to be more transparent,
                        efficient, and traceable
                      </p>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="header-rightside">
          <Search />
          <a
            id="toLoginPage"
            className="header-menu-rightItem typography-Subtitle4 color-t_primary rwd-768-hide"
            href=""
          >
            <button className="bn-button bn-button__secondary data-size-small">
              Log In
            </button>
          </a>
          <Link
            className="header-menu-rightItem"
            id="toRegisterPage"
            href="/register"
          >
            <button
              fr=""
              as="a"
              className="bn-button bn-button__primary data-size-small header-menu-registerbtn"
            >
              Sign Up
            </button>
          </Link>
          <DownloadQr />
          <LangDropdown />
          <ThemeSwitch />
        </div>
      </header>
    </div>
  );
}

export default Navbar;
