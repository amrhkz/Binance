import React from "react";
import "./register.css";
import Link from "next/link";

function page() {
  return (
    <>
      <div className="top">
        <div className="content-layout">
          <div
            className="content-card "
          >
            <Link href={"/"} className="icon-wrap">
              <img className="default-icon block" src="/img/logo-3.png" />
            </Link>
            <div className="title">Welcome to Binance</div>

            <form action="#" method="post">
              <div className="form-item">
                <div className="form-item-label">Email/Phone number</div>
                <div className="form-item-input">
                  <input
                    placeholder="Email/Phone (without country code)"
                    type="text"
                    name="username"
                    autoCapitalize="off"
                    data-e2e="input-username"
                    spellCheck="false"
                    autoComplete="username"
                  />
                </div>
              </div>
              <div className="form-item">
                <div name="agreement" className="agreement-checkbox checked">
                  <div className="checkbox-icon">
                    <svg
                      fill="BasicBg"
                      viewBox="0 0 24 25"
                      xmlns="http://www.w3.org/2000/svg"
                      className="checkbox-icon-svg"
                    >
                      <path
                        d="M19.357 4.687L9.301 14.743l-4.656-4.657-3.03 3.031L9.3 20.804 22.388 7.717l-3.03-3.03z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                  <div className="typography-body3">
                    By creating an account, I agree to Binance's{" "}
                    <button
                      href="https://www.binance.com/terms"
                      target="_blank"
                      data-e2e="lnk-terms-of-service"
                    >
                      Terms of Service
                    </button>{" "}
                    and{" "}
                    <button
                      href="https://www.binance.com/privacy"
                      target="_blank"
                      id="RegisterForm-a-termsOfUse2"
                    >
                      Privacy Policy
                    </button>
                    .
                  </div>
                </div>
              </div>
              <button className="primary-button">Next</button>
            </form>
            <div className="other-login">
              <div className="seperator">
                <div className="sep-line"></div>
                <div className="sep-text">or</div>
                <div className="sep-line"></div>
              </div>
              <div className="social-login">
                <div className="social-btn">
                  <button>
                    <img src="/img/logogoogle.png" />
                    <div className="btn-text">Continue with Google</div>
                  </button>
                </div>
                <div className="social-btn">
                  <button>
                    <img src="/img/ios.png" />
                    <div className="btn-text">Continue with Apple</div>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="regi-link">
            <button>Sign up as an entity</button> or
            <Link href={"/login"}>Log in</Link>
          </div>
        </div>
      </div>
      {/* <div className="bottom">
        <div className="row">
          <div className="lang-menu">
            <div className="row-item">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M15.23 20.403a9.011 9.011 0 005.684-7.153h-3.942c-.147 2.86-.793 5.388-1.741 7.153zm-.757-7.153c-.178 4.102-1.217 7.25-2.473 7.25-1.256 0-2.295-3.148-2.473-7.25h4.946zm0-2.5H9.527C9.705 6.648 10.744 3.5 12 3.5c1.256 0 2.295 3.148 2.473 7.25zm2.499 0h3.942a9.01 9.01 0 00-5.683-7.153c.948 1.765 1.594 4.293 1.741 7.153zm-9.936 0c.147-2.862.793-5.392 1.743-7.156a9.01 9.01 0 00-5.693 7.156h3.95zm0 2.5h-3.95a9.01 9.01 0 005.693 7.157c-.95-1.765-1.596-4.295-1.743-7.157z"
                  fill="currentColor"
                ></path>
              </svg>
              <div>English</div>
            </div>
            <div className="lang-bubble">
              <div className="header-select-options-group-flat">
                <div className="typography-Body3 color-t_third css-vurnku">
                  Language
                </div>
                <div className="bn-textField bn-textField__line data-size-small data-gap-size-normal">
                  <input
                    data-e2e="input-search-language"
                    placeholder="Search"
                    className="bn-textField-input"
                    spellCheck="false"
                  />
                </div>
                <div className="header-select-options-group-flat-options  css-jmlio4">
                  <div
                    data-bn-type="text"
                    className="header-select-options typography-Subtitle4 active css-vurnku"
                    data-e2e="link-language-en"
                  >
                    English
                  </div>
                  <div
                    data-bn-type="text"
                    className="header-select-options typography-Subtitle4  css-vurnku"
                    data-e2e="link-language-ar"
                  >
                    العربية
                  </div>
                  <div
                    data-bn-type="text"
                    className="header-select-options typography-Subtitle4  css-vurnku"
                    data-e2e="link-language-ar-BH"
                  >
                    العربية (البحرين)
                  </div>
                  <div
                    data-bn-type="text"
                    className="header-select-options typography-Subtitle4  css-vurnku"
                    data-e2e="link-language-bg"
                  >
                    български
                  </div>
                  <div
                    data-bn-type="text"
                    className="header-select-options typography-Subtitle4  css-vurnku"
                    data-e2e="link-language-cs"
                  >
                    Čeština
                  </div>
                  <div
                    data-bn-type="text"
                    className="header-select-options typography-Subtitle4  css-vurnku"
                    data-e2e="link-language-de"
                  >
                    Deutsch (Schweiz)
                  </div>
                  <div
                    data-bn-type="text"
                    className="header-select-options typography-Subtitle4  css-vurnku"
                    data-e2e="link-language-da-DK"
                  >
                    Dansk
                  </div>
                  <div
                    data-bn-type="text"
                    className="header-select-options typography-Subtitle4  css-vurnku"
                    data-e2e="link-language-es"
                  >
                    Español (España)
                  </div>
                  <div
                    data-bn-type="text"
                    className="header-select-options typography-Subtitle4  css-vurnku"
                    data-e2e="link-language-es-LA"
                  >
                    Español (Latinoamérica)
                  </div>
                  <div
                    data-bn-type="text"
                    className="header-select-options typography-Subtitle4  css-vurnku"
                    data-e2e="link-language-en-AU"
                  >
                    English (Australia)
                  </div>
                  <div
                    data-bn-type="text"
                    className="header-select-options typography-Subtitle4  css-vurnku"
                    data-e2e="link-language-en-IN"
                  >
                    English (India)
                  </div>
                  <div
                    data-bn-type="text"
                    className="header-select-options typography-Subtitle4  css-vurnku"
                    data-e2e="link-language-en-NG"
                  >
                    English (Nigeria)
                  </div>
                  <div
                    data-bn-type="text"
                    className="header-select-options typography-Subtitle4  css-vurnku"
                    data-e2e="link-language-es-MX"
                  >
                    Español (México)
                  </div>
                  <div
                    data-bn-type="text"
                    className="header-select-options typography-Subtitle4  css-vurnku"
                    data-e2e="link-language-el"
                  >
                    Ελληνικά
                  </div>
                  <div
                    data-bn-type="text"
                    className="header-select-options typography-Subtitle4  css-vurnku"
                    data-e2e="link-language-es-AR"
                  >
                    Español (Argentina)
                  </div>
                  <div
                    data-bn-type="text"
                    className="header-select-options typography-Subtitle4  css-vurnku"
                    data-e2e="link-language-en-KZ"
                  >
                    English (Kazakhstan)
                  </div>
                  <div
                    data-bn-type="text"
                    className="header-select-options typography-Subtitle4  css-vurnku"
                    data-e2e="link-language-en-ZA"
                  >
                    English (South Africa)
                  </div>
                  <div
                    data-bn-type="text"
                    className="header-select-options typography-Subtitle4  css-vurnku"
                    data-e2e="link-language-en-NZ"
                  >
                    English (New Zealand)
                  </div>
                  <div
                    data-bn-type="text"
                    className="header-select-options typography-Subtitle4  css-vurnku"
                    data-e2e="link-language-en-BH"
                  >
                    English (Bahrain)
                  </div>
                  <div
                    data-bn-type="text"
                    className="header-select-options typography-Subtitle4  css-vurnku"
                    data-e2e="link-language-en-AE"
                  >
                    English (UAE)
                  </div>
                  <div
                    data-bn-type="text"
                    className="header-select-options typography-Subtitle4  css-vurnku"
                    data-e2e="link-language-en-JP"
                  >
                    English (Japan)
                  </div>
                  <div
                    data-bn-type="text"
                    className="header-select-options typography-Subtitle4  css-vurnku"
                    data-e2e="link-language-fr"
                  >
                    Français
                  </div>
                  <div
                    data-bn-type="text"
                    className="header-select-options typography-Subtitle4  css-vurnku"
                    data-e2e="link-language-fr-AF"
                  >
                    Français (Afrique)
                  </div>
                  <div
                    data-bn-type="text"
                    className="header-select-options typography-Subtitle4  css-vurnku"
                    data-e2e="link-language-hu"
                  >
                    magyar nyelv
                  </div>
                  <div
                    data-bn-type="text"
                    className="header-select-options typography-Subtitle4  css-vurnku"
                    data-e2e="link-language-it"
                  >
                    Italiano
                  </div>
                  <div
                    data-bn-type="text"
                    className="header-select-options typography-Subtitle4  css-vurnku"
                    data-e2e="link-language-id"
                  >
                    Bahasa Indonesia
                  </div>
                  <div
                    data-bn-type="text"
                    className="header-select-options typography-Subtitle4  css-vurnku"
                    data-e2e="link-language-ja"
                  >
                    日本語
                  </div>
                  <div
                    data-bn-type="text"
                    className="header-select-options typography-Subtitle4  css-vurnku"
                    data-e2e="link-language-kk-KZ"
                  >
                    Қазақша (Қазақстан)
                  </div>
                  <div
                    data-bn-type="text"
                    className="header-select-options typography-Subtitle4  css-vurnku"
                    data-e2e="link-language-kz"
                  >
                    Қазақша
                  </div>
                  <div
                    data-bn-type="text"
                    className="header-select-options typography-Subtitle4  css-vurnku"
                    data-e2e="link-language-lv"
                  >
                    latviešu valoda
                  </div>
                  <div
                    data-bn-type="text"
                    className="header-select-options typography-Subtitle4  css-vurnku"
                    data-e2e="link-language-lo-LA"
                  >
                    ລາວ
                  </div>
                  <div
                    data-bn-type="text"
                    className="header-select-options typography-Subtitle4  css-vurnku"
                    data-e2e="link-language-pl"
                  >
                    Polski
                  </div>
                  <div
                    data-bn-type="text"
                    className="header-select-options typography-Subtitle4  css-vurnku"
                    data-e2e="link-language-pt-BR"
                  >
                    Português (Brasil)
                  </div>
                  <div
                    data-bn-type="text"
                    className="header-select-options typography-Subtitle4  css-vurnku"
                    data-e2e="link-language-pt"
                  >
                    Português
                  </div>
                  <div
                    data-bn-type="text"
                    className="header-select-options typography-Subtitle4  css-vurnku"
                    data-e2e="link-language-ru"
                  >
                    Русский
                  </div>
                  <div
                    data-bn-type="text"
                    className="header-select-options typography-Subtitle4  css-vurnku"
                    data-e2e="link-language-ro"
                  >
                    Română
                  </div>
                  <div
                    data-bn-type="text"
                    className="header-select-options typography-Subtitle4  css-vurnku"
                    data-e2e="link-language-ru-UA"
                  >
                    Русский (Украина)
                  </div>
                  <div
                    data-bn-type="text"
                    className="header-select-options typography-Subtitle4  css-vurnku"
                    data-e2e="link-language-ru-KZ"
                  >
                    Русский (Казахстан)
                  </div>
                  <div
                    data-bn-type="text"
                    className="header-select-options typography-Subtitle4  css-vurnku"
                    data-e2e="link-language-sv"
                  >
                    Svenska
                  </div>
                  <div
                    data-bn-type="text"
                    className="header-select-options typography-Subtitle4  css-vurnku"
                    data-e2e="link-language-sk"
                  >
                    Slovenčina
                  </div>
                  <div
                    data-bn-type="text"
                    className="header-select-options typography-Subtitle4  css-vurnku"
                    data-e2e="link-language-sl"
                  >
                    Slovenščina
                  </div>
                  <div
                    data-bn-type="text"
                    className="header-select-options typography-Subtitle4  css-vurnku"
                    data-e2e="link-language-si-LK"
                  >
                    සිංහල
                  </div>
                  <div
                    data-bn-type="text"
                    className="header-select-options typography-Subtitle4  css-vurnku"
                    data-e2e="link-language-tr"
                  >
                    Türkçe
                  </div>
                  <div
                    data-bn-type="text"
                    className="header-select-options typography-Subtitle4  css-vurnku"
                    data-e2e="link-language-uk-UA"
                  >
                    Українська
                  </div>
                  <div
                    data-bn-type="text"
                    className="header-select-options typography-Subtitle4  css-vurnku"
                    data-e2e="link-language-vi"
                  >
                    Tiếng Việt
                  </div>
                  <div
                    data-bn-type="text"
                    className="header-select-options typography-Subtitle4  css-vurnku"
                    data-e2e="link-language-zh-CN"
                  >
                    简体中文
                  </div>
                  <div
                    data-bn-type="text"
                    className="header-select-options typography-Subtitle4  css-vurnku"
                    data-e2e="link-language-zh-TC"
                  >
                    繁體中文
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row-item">Cookies</div>
          <div className="row-item">Terms</div>
          <div className="row-item">Privacy</div>
        </div>
      </div> */}
    </>
  );
}

export default page;
