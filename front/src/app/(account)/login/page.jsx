import React from "react";
import "./login.css";

function page() {
  return (
    <main class="main css-5oj4n">
      <div class="content-layout">
        <div
          class=" content-card "
          style={{ border: "1px solid var(--color-line)" }}
        >
          <div class="icon-wrap">
            <img class="default-icon block" src="/img/logo-3.png" />
          </div>
          <div class="flex justify-between items-center mb-8">
            <div class="card-page-title !mb-[0px]">Log in</div>
            <div class="max-md:hidden h-[40px]">
              <div class="bn-tooltips-wrap qrcode-login-popup">
                <div class="bn-tooltips-ele">
                  <div class="p-[4px] w-[40px] h-[40px] rounded-[8px] hover:bg-[--color-Input] cursor-pointer qr-login-icon bg-[--color-Vessel]">
                    <svg
                      fill="textPrimary"
                      size="32"
                      class="bn-svg w-[32px] h-[32px] text-[--color-textPrimary] "
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M4 4h7v7H4V4zm0 9h7v7H4v-7zm11 0h-2v4h4v-2h3v-2h-4v2h-1v-2zm5 3h-2v2h-2v2h4v-4zm-5 2h-2v2h2v-2zM13 4h7v7h-7V4zM8.5 6.5h-2v2h2v-2zm-2 9h2v2h-2v-2zm11-9h-2v2h2v-2z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div
                  class="bn-bubble bn-bubble__normal shadow data-font-14 bn-tooltips"
                  style={{
                    transform: "translate(0px, 0px)",
                    top: "100%",
                    right: "0px",
                  }}
                >
                  <div
                    class="bn-bubble-arrow"
                    style={{
                      transform: "translate(0px, 0px) rotate(45deg)",
                      top: "13px",
                      right: "9px",
                    }}
                  ></div>
                  <div
                    class="bn-bubble-arrow-shadow"
                    style={{
                      transform: "translate(0px, 0px) rotate(45deg)",
                      top: "13px",
                      right: "9px",
                    }}
                  ></div>
                  <div class="bn-bubble-content" style={{ marginTop: "16px" }}>
                    <div class="w-full">
                      <div class="flex">
                        <div class="relative flex items-center justify-center w-[180px] h-[180px] border-solid border-[--color-Line] border-[1px] rounded-[16px] bg-[#fff]">
                          <canvas
                            height="185"
                            width="185"
                            class="rounded-[4px]"
                            style={{ width: "148px", height: "148px" }}
                          ></canvas>
                          <div class="absolute w-[26px] h-[26px] rounded-[4px] flex items-center justify-center bg-[--color-BasicBg]">
                            <img
                              class="bn-lazy-img w-[20px] h-[20px]"
                              src="https://bin.bnbstatic.com/static/images/accounts/qrcode-binance-logo.svg"
                              data-src="https://bin.bnbstatic.com/static/images/accounts/qrcode-binance-logo.svg"
                            />
                          </div>
                          <div class="flex-col flex items-center justify-center absolute bg-opacity-95 rounded-[16px] bg-[#1E2329] left-[-1px] top-[-1px] bottom-[-1px] right-[-1px]">
                            <div class="bn-loading bn-loading__secondary">
                              <div class="bn-spinner__nezha bn-loading-nezha">
                                <div
                                  class="nezha-line"
                                  style={{ animationDelay: "50ms" }}
                                ></div>
                                <div
                                  class="nezha-line"
                                  style={{ animationDelay: "100ms" }}
                                ></div>
                                <div
                                  class="nezha-line"
                                  style={{ animationDelay: "150ms" }}
                                ></div>
                                <div
                                  class="nezha-line"
                                  style={{ animationDelay: "200ms" }}
                                ></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="w-[165px] h-[180px] flex items-center justify-end">
                          <img
                            class="bn-lazy-img block w-[148px]"
                            src="https://bin.bnbstatic.com/static/images/accounts/qrcode-login-dark.svg"
                            data-src="https://bin.bnbstatic.com/static/images/accounts/qrcode-login-dark.svg"
                          />
                        </div>
                      </div>
                      <div class="mt-[24px] text-center">
                        Scan this code with the{" "}
                        <a
                          data-bn-type="link"
                          target="_blank"
                          href="https://www.binance.com/download"
                          id="login-qr-download"
                          class="css-ulkjq8 cursor-pointer"
                        >
                          Binance app
                        </a>{" "}
                        to log in instantly.
                        <div class="mt-[16px]">
                          <div class="bn-notification bn-notification__error data-size-middle">
                            <svg
                              fill="PrimaryText"
                              class="bn-svg bn-notification-prefix h-m w-m flex-shrink-0 text-t-Primary"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M12 21a9 9 0 100-18 9 9 0 000 18zm-1.25-5.5V18h2.5v-2.5h-2.5zm0-9.5v7h2.5V6h-2.5z"
                                fill="currentColor"
                              ></path>
                            </svg>
                            <div class="bn-notification-content">
                              <div class="bn-notification-content-message">
                                <div class="text-left">
                                  该url/bapi/accounts/v1/public/qrcode/login/query对应的轮询已重置
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <form action="#">
            <div class="bn-formItem">
              <div class="bn-formItem-label">Email/Phone number</div>
              <div>
                <div class="css-4cffwv">
                  <div class="bn-textField bn-textField__line data-size-large username-input-field css-8x1t0r">
                    <input
                      class="bn-textField-input !w-[inherit]"
                      placeholder="Email/Phone (without country code)"
                      type="text"
                      name="username"
                      autocapitalize="off"
                      data-e2e="input-username"
                      spellcheck="false"
                      autocomplete="username"
                      value=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <button
              class="bn-button bn-button__primary data-size-large mt-6 w-full"
              type="button"
              data-e2e="btn-accounts-form-submit"
            >
              Next
            </button>
          </form>
          <div class="css-49vimp">
            <div class="bn-flex css-xpcra5">
              <div class="css-3piyph"></div>
              <div
                data-bn-type="text"
                class="text-[--color-SecondaryText] typography-body3 css-15aftra"
              >
                or
              </div>
              <div class="css-3piyph"></div>
            </div>
            <div class="bn-flex css-yyvsvt">
              <div class="sign-with css-wgsgq7">
                <div id="gSignInWrapper" data-e2e="btn-google-login">
                  <div id="googleLoginBtn" class="css-lro9rj">
                    <button class="bn-button bn-button__icon data-size-large third-login-button">
                      <img
                        class="bn-lazy-img css-fki3rl"
                        src="https://bin.bnbstatic.com/static/images/accounts/common/logogoogle.png"
                        data-src="https://bin.bnbstatic.com/static/images/accounts/common/logogoogle.png"
                      />
                      <div class="bn-flex css-ario60">Continue with Google</div>
                    </button>
                    <div id="buttonDiv" class="css-1t1dwsw">
                      <div class="S9gUrf-YoZ4jf relative">
                        <div></div>
                        <iframe
                          src="https://accounts.google.com/gsi/button?theme=black&amp;size=large&amp;width=600px&amp;height=48px&amp;client_id=960821425630-aclsesu662patrhhq95iuuijekgg15p3.apps.googleusercontent.com&amp;iframe_id=gsi_205716_596138&amp;as=4bbKEBoGJq6FRPVC5Wroyw"
                          allow="identity-credentials-get"
                          id="gsi_205716_596138"
                          title="Sign in with Google Button"
                          style={{
                            display: "block",
                            position: "relative",
                            top: "0px",
                            left: "0px",
                            height: "44px",
                            width: "420px",
                            border: "0px",
                            margin: "-2px -10px",
                          }}
                        ></iframe>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="sign-with css-16vu25q">
                <button
                  class="bn-button bn-button__icon data-size-large third-login-button"
                  id="apple-login-btn"
                  data-e2e="btn-apple-login"
                >
                  <img
                    class="bn-lazy-img css-fki3rl"
                    src="https://bin.bnbstatic.com/static/images/accounts/common/ios.png"
                    data-src="https://bin.bnbstatic.com/static/images/accounts/common/ios.png"
                  />
                  <div class="bn-flex css-p9hz2v">Continue with Apple</div>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          class="mt-4 max-md:mt-6 typography-body2"
          data-e2e="btn-create-binance-account"
        >
          <button class="bn-button bn-button__text bn-button__text__yellow data-size-small !px-1 !min-w-min undefined">
            Create a Binance Account
          </button>
        </div>
      </div>
    </main>
  );
}

export default page;
