import React from "react";

function LangDropdown() {
  return (
    <div className="bn-tooltips-wrap dropdownAndDraw-dropdown">
      <div className="bn-tooltips-ele">
        <div>
          <div className="header-menu-rightItem rwd-1200-hide-flex">
            <svg
              className="bn-svg language-icon hover-color"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15.23 20.403a9.011 9.011 0 005.684-7.153h-3.942c-.147 2.86-.793 5.388-1.741 7.153zm-.757-7.153c-.178 4.102-1.217 7.25-2.473 7.25-1.256 0-2.295-3.148-2.473-7.25h4.946zm0-2.5H9.527C9.705 6.648 10.744 3.5 12 3.5c1.256 0 2.295 3.148 2.473 7.25zm2.499 0h3.942a9.01 9.01 0 00-5.683-7.153c.948 1.765 1.594 4.293 1.741 7.153zm-9.936 0c.147-2.862.793-5.392 1.743-7.156a9.01 9.01 0 00-5.693 7.156h3.95zm0 2.5h-3.95a9.01 9.01 0 005.693 7.157c-.95-1.765-1.596-4.295-1.743-7.157z"
                fill="currentColor"
              />
            </svg>
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
        <div className="bn-bubble-content" style={{ marginTop: "4px" }}>
          <div className="header-lngCur-content">
            <div className="header-lngCur-item">
              <div className="footer-select-options-group-flat language-select">
                <div className="typography-Body3 color-t_third">Language</div>
                <div className="bn-textField bn-textField__line data-size-small">
                  <input
                    placeholder="Search"
                    className="bn-textField-input"
                    spellCheck="false"
                  />
                </div>
                <div className="footer-select-options-group-flat-options mt-16">
                  <div className="footer-select-options typography-Subtitle4 active">
                    English
                  </div>
                  <div className="footer-select-options typography-Subtitle4">
                    العربية
                  </div>
                  <div className="footer-select-options typography-Subtitle4">
                    العربية (البحرين)
                  </div>
                  <div className="footer-select-options typography-Subtitle4">
                    български
                  </div>
                  <div className="footer-select-options typography-Subtitle4">
                    Čeština
                  </div>
                  <div className="footer-select-options typography-Subtitle4">
                    Dansk
                  </div>
                  <div className="footer-select-options typography-Subtitle4">
                    Deutsch (Schweiz)
                  </div>
                  <div className="footer-select-options typography-Subtitle4">
                    Ελληνικά
                  </div>
                  <div className="footer-select-options typography-Subtitle4">
                    English (UAE)
                  </div>
                  <div className="footer-select-options typography-Subtitle4">
                    English (Australia)
                  </div>
                  <div className="footer-select-options typography-Subtitle4">
                    English (Bahrain)
                  </div>
                  <div className="footer-select-options typography-Subtitle4">
                    English (India)
                  </div>
                  <div className="footer-select-options typography-Subtitle4">
                    English (Japan)
                  </div>
                  <div className="footer-select-options typography-Subtitle4">
                    English (Kazakhstan)
                  </div>
                  <div className="footer-select-options typography-Subtitle4">
                    English (Nigeria)
                  </div>
                  <div className="footer-select-options typography-Subtitle4">
                    English (New Zealand)
                  </div>
                  <div className="footer-select-options typography-Subtitle4">
                    English (South Africa)
                  </div>
                  <div className="footer-select-options typography-Subtitle4">
                    Español (España)
                  </div>
                  <div className="footer-select-options typography-Subtitle4">
                    Español (Argentina)
                  </div>
                  <div className="footer-select-options typography-Subtitle4">
                    Español (Latinoamérica)
                  </div>
                  <div className="footer-select-options typography-Subtitle4">
                    Español (México)
                  </div>
                  <div className="footer-select-options typography-Subtitle4">
                    Français
                  </div>
                  <div className="footer-select-options typography-Subtitle4">
                    Français (Afrique)
                  </div>
                  <div className="footer-select-options typography-Subtitle4">
                    magyar nyelv
                  </div>
                  <div className="footer-select-options typography-Subtitle4">
                    Bahasa Indonesia
                  </div>
                  <div className="footer-select-options typography-Subtitle4">
                    Italiano
                  </div>
                  <div className="footer-select-options typography-Subtitle4">
                    日本語
                  </div>
                  <div className="footer-select-options typography-Subtitle4">
                    Қазақша (Қазақстан)
                  </div>
                  <div className="footer-select-options typography-Subtitle4">
                    Қазақша
                  </div>
                  <div className="footer-select-options typography-Subtitle4">
                    ລາວ
                  </div>
                  <div className="footer-select-options typography-Subtitle4">
                    latviešu valoda
                  </div>
                  <div className="footer-select-options typography-Subtitle4">
                    Polski
                  </div>
                  <div className="footer-select-options typography-Subtitle4">
                    Português
                  </div>
                  <div className="footer-select-options typography-Subtitle4">
                    Português (Brasil)
                  </div>
                  <div className="footer-select-options typography-Subtitle4">
                    Română
                  </div>
                  <div className="footer-select-options typography-Subtitle4">
                    Русский
                  </div>
                  <div className="footer-select-options typography-Subtitle4">
                    Русский (Казахстан)
                  </div>
                  <div className="footer-select-options typography-Subtitle4">
                    Русский (Украина)
                  </div>
                  <div className="footer-select-options typography-Subtitle4">
                    සිංහල
                  </div>
                  <div className="footer-select-options typography-Subtitle4">
                    Slovenčina
                  </div>
                  <div className="footer-select-options typography-Subtitle4">
                    Slovenščina
                  </div>
                  <div className="footer-select-options typography-Subtitle4">
                    Svenska
                  </div>
                  <div className="footer-select-options typography-Subtitle4">
                    Türkçe
                  </div>
                  <div className="footer-select-options typography-Subtitle4">
                    Українська
                  </div>
                  <div className="footer-select-options typography-Subtitle4">
                    Tiếng Việt
                  </div>
                  <div className="footer-select-options typography-Subtitle4">
                    简体中文
                  </div>
                  <div className="footer-select-options typography-Subtitle4">
                    繁體中文
                  </div>
                </div>
              </div>
            </div>
            <div className="header-lngCur-item">
              <div className="footer-select-options-group-flat currency-select">
                <div className="typography-Body3 color-t_third">Currency</div>
                <div className="bn-textField bn-textField__line data-size-small">
                  <input
                    placeholder="Search"
                    className="bn-textField-input"
                    spellCheck="false"
                  />
                </div>
                <div className="footer-select-options-group-flat-options mt-16">
                  <div className="footer-select-options typography-Subtitle4 active">
                    <div className="footer-currency-item">USD-$</div>
                  </div>
                  <div className="footer-select-options typography-Subtitle4">
                    <div className="footer-currency-item">AED-د.إ</div>
                  </div>
                  <div className="footer-select-options typography-Subtitle4">
                    <div className="footer-currency-item">ARS-ARS$</div>
                  </div>
                  <div className="footer-select-options typography-Subtitle4">
                    <div className="footer-currency-item">AUD-A$</div>
                  </div>
                  <div className="footer-select-options typography-Subtitle4">
                    <div className="footer-currency-item">BDT-৳</div>
                  </div>
                  <div className="footer-select-options typography-Subtitle4">
                    <div className="footer-currency-item">BGN-лв</div>
                  </div>
                  <div className="footer-select-options typography-Subtitle4">
                    <div className="footer-currency-item">BHD-.د.ب</div>
                  </div>
                  <div className="footer-select-options typography-Subtitle4">
                    <div className="footer-currency-item">BOB-$b</div>
                  </div>
                  <div className="footer-select-options typography-Subtitle4">
                    <div className="footer-currency-item">BRL-R$</div>
                  </div>
                  <div className="footer-select-options typography-Subtitle4">
                    <div className="footer-currency-item">CAD-C$</div>
                  </div>
                  <div className="footer-select-options typography-Subtitle4">
                    <div className="footer-currency-item">CHF-CHF</div>
                  </div>
                  <div className="footer-select-options typography-Subtitle4">
                    <div className="footer-currency-item">CNY-¥</div>
                  </div>
                  <div className="footer-select-options typography-Subtitle4">
                    <div className="footer-currency-item">COP-COL$</div>
                  </div>
                  <div className="footer-select-options typography-Subtitle4">
                    <div className="footer-currency-item">CZK-Kč</div>
                  </div>
                  <div className="footer-select-options typography-Subtitle4">
                    <div className="footer-currency-item">DKK-KR</div>
                  </div>
                  <div className="footer-select-options typography-Subtitle4">
                    <div className="footer-currency-item">EGP-E£</div>
                  </div>
                  <div className="footer-select-options typography-Subtitle4">
                    <div className="footer-currency-item">EUR-€</div>
                  </div>
                  <div className="footer-select-options typography-Subtitle4">
                    <div className="footer-currency-item">GBP-£</div>
                  </div>
                  <div className="footer-select-options typography-Subtitle4">
                    <div className="footer-currency-item">HKD-HKD</div>
                  </div>
                  <div className="footer-select-options typography-Subtitle4">
                    <div className="footer-currency-item">HRK-kn</div>
                  </div>
                  <div className="footer-select-options typography-Subtitle4">
                    <div className="footer-currency-item">HUF-Ft</div>
                  </div>
                  <div className="footer-select-options typography-Subtitle4">
                    <div className="footer-currency-item">IDR-Rp</div>
                  </div>
                  <div className="footer-select-options typography-Subtitle4">
                    <div className="footer-currency-item">INR-₹</div>
                  </div>
                  <div className="footer-select-options typography-Subtitle4">
                    <div className="footer-currency-item">JPY-¥</div>
                  </div>
                  <div className="footer-select-options typography-Subtitle4">
                    <div className="footer-currency-item">KES-KSh</div>
                  </div>
                  <div className="footer-select-options typography-Subtitle4">
                    <div className="footer-currency-item">KWD-ك.د</div>
                  </div>
                  <div className="footer-select-options typography-Subtitle4">
                    <div className="footer-currency-item">KZT-₸</div>
                  </div>
                  <div className="footer-select-options typography-Subtitle4">
                    <div className="footer-currency-item">MAD-م.د.</div>
                  </div>
                  <div className="footer-select-options typography-Subtitle4">
                    <div className="footer-currency-item">MNT-₮</div>
                  </div>
                  <div className="footer-select-options typography-Subtitle4">
                    <div className="footer-currency-item">MXN-Mex$</div>
                  </div>
                  <div className="footer-select-options typography-Subtitle4">
                    <div className="footer-currency-item">NZD-NZ$</div>
                  </div>
                  <div className="footer-select-options typography-Subtitle4">
                    <div className="footer-currency-item">OMR-ر.ع.</div>
                  </div>
                  <div className="footer-select-options typography-Subtitle4">
                    <div className="footer-currency-item">PEN-S/.</div>
                  </div>
                  <div className="footer-select-options typography-Subtitle4">
                    <div className="footer-currency-item">PHP-₱</div>
                  </div>
                  <div className="footer-select-options typography-Subtitle4">
                    <div className="footer-currency-item">PKR-₨</div>
                  </div>
                  <div className="footer-select-options typography-Subtitle4">
                    <div className="footer-currency-item">PLN-zł</div>
                  </div>
                  <div className="footer-select-options typography-Subtitle4">
                    <div className="footer-currency-item">QAR-ر.ق</div>
                  </div>
                  <div className="footer-select-options typography-Subtitle4">
                    <div className="footer-currency-item">RON-lei</div>
                  </div>
                  <div className="footer-select-options typography-Subtitle4">
                    <div className="footer-currency-item">RUB-₽</div>
                  </div>
                  <div className="footer-select-options typography-Subtitle4">
                    <div className="footer-currency-item">SAR-ر.س</div>
                  </div>
                  <div className="footer-select-options typography-Subtitle4">
                    <div className="footer-currency-item">SEK-kr</div>
                  </div>
                  <div className="footer-select-options typography-Subtitle4">
                    <div className="footer-currency-item">THB-฿</div>
                  </div>
                  <div className="footer-select-options typography-Subtitle4">
                    <div className="footer-currency-item">TRY-₺</div>
                  </div>
                  <div className="footer-select-options typography-Subtitle4">
                    <div className="footer-currency-item">TWD-NT$</div>
                  </div>
                  <div className="footer-select-options typography-Subtitle4">
                    <div className="footer-currency-item">UAH-₴</div>
                  </div>
                  <div className="footer-select-options typography-Subtitle4">
                    <div className="footer-currency-item">UGX-USh</div>
                  </div>
                  <div className="footer-select-options typography-Subtitle4">
                    <div className="footer-currency-item">VES-Bs</div>
                  </div>
                  <div className="footer-select-options typography-Subtitle4">
                    <div className="footer-currency-item">VND-₫</div>
                  </div>
                  <div className="footer-select-options typography-Subtitle4">
                    <div className="footer-currency-item">ZAR-R</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LangDropdown;
