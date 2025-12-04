import React from "react";
import "@/components/app-header/search/search.css";
import HotTrading from "./hot-trading/hot-trading";
import EarnList from "./earn-list/earn-list";
import HotCampaign from "./hot-campaign/hot-campaign";

function Search() {
  return (
    <div className="bn-tooltips-wrap dropdownAndDraw-dropdown">
      <div className="bn-tooltips-ele">
        <div>
          <div className="header-menu-rightItem rwd-768-hide">
            <div id="header_menu_search" className="hidden-in-bnc-app">
              <svg
                className="search-icon bn-svg hover-color"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
              >
                <symbol
                  viewBox="0 0 24 24"
                  id="574e448b-dbba-4ddd-a1a9-301872a07c75"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M11 6C13.7614 6 16 8.23858 16 11C16 13.7614 13.7614 16 11 16C8.23857 16 6 13.7614 6 11C6 8.23858 8.23858 6 11 6ZM11 3C15.4183 3 19 6.58172 19 11C19 12.3907 18.6451 13.6985 18.021 14.8379L21.0915 17.9086L19.5006 19.4995L17.9097 21.0904L14.8396 18.0201C13.6999 18.6448 12.3914 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3Z"
                    fill="currentColor"
                  />
                </symbol>
                <use href="#574e448b-dbba-4ddd-a1a9-301872a07c75" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div
        className="bn-bubble bn-bubble__unset shadow bn-tooltips active"
        style={{
          transform: "translate(0px, 0px)",
          top: "100%",
          right: "0px",
        }}
      >
        <div className="bn-bubble-content" style={{ marginTop: "4px" }}>
          <div className="header-search-content">
            <div className="explore-component explore-content">
              <div className="search-group">
                <div className="bn-textField bn-textField__line data-size-middle search-group_textfield">
                  <div className="bn-textField-prefix">
                    <svg
                      fill="t.disabled"
                      size="20"
                      className="bn-svg search-input-icon"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M11 6a5 5 0 110 10 5 5 0 010-10zm0-3a8 8 0 017.021 11.838l3.07 3.07-1.59 1.591-1.591 1.591-3.07-3.07A8 8 0 1111 3z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                  <input
                    className="bn-textField-input"
                    placeholder="BTC"
                    spellCheck="false"
                  />
                </div>
                <p
                  className="typography-Subtitle4 hover-pointer text-TextLink"
                  id="header-search-cancel"
                >
                  Cancel
                </p>
              </div>
              <div className="initdata initdata-content">
                
                <HotTrading/>
                <EarnList/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="bn-bubble bn-bubble__unset shadow bn-tooltips"
        style={{
          transform: "translate(0px, 0px)",
          top: "100%",
          right: "0px",
        }}
      >
        <div className="bn-bubble-content" style={{ marginTop: "4px" }}></div>
      </div>
    </div>
  );
}

export default Search;
