import React from "react";

function DownloadQr() {
  return (
    <div className="bn-tooltips-wrap dropdownAndDraw-dropdown">
      <div className="bn-tooltips-ele">
        <div className="header-menu-rightItem rwd-1200-hide-flex">
          <svg
            className="bn-svg hover-color text-[20px] text-iconNormal"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7.5 9V6H16v3h3V3H4.5v6h3zm-3 12H19v-6h-3v3H7.5v-3h-3v6zm6.009-13h3v4.002l2.508.006-4.008 4.008-4.01-4.008 2.51-.025V8z"
              fill="currentColor"
            />
          </svg>
        </div>
      </div>
      <div
        className="bn-bubble bn-bubble__unset shadow bn-tooltips "
        style={{
          transform: "translate(0px, 0px)",
          top: "100%",
          right: "0px",
        }}
      >
        <div className="bn-bubble-content" style={{ marginTop: "4px" }}>
          <div className="QRCode-wrap">
            <div className="QRCode-img">
              <img className="QRCode-logo" src="/img/logo-2.png" alt="" />
              <svg height="136" width="136" viewBox="0 0 37 37">
                <path
                  fill="#FFFFFF"
                  d="M0,0 h37v37H0z"
                  shapeRendering="crispEdges"
                />
                <path
                  fill="#000000"
                  d="M0 0h7v1H0zM10 0h4v1H10zM18 0h4v1H18zM23 0h1v1H23zM26 0h1v1H26zM28 0h1v1H28zM30,0 h7v1H30zM0 1h1v1H0zM6 1h1v1H6zM9 1h4v1H9zM15 1h2v1H15zM18 1h1v1H18zM20 1h3v1H20zM27 1h2v1H27zM30 1h1v1H30zM36,1 h1v1H36zM0 2h1v1H0zM2 2h3v1H2zM6 2h1v1H6zM8 2h3v1H8zM21 2h2v1H21zM24 2h1v1H24zM26 2h3v1H26zM30 2h1v1H30zM32 2h3v1H32zM36,2 h1v1H36zM0 3h1v1H0zM2 3h3v1H2zM6 3h1v1H6zM8 3h2v1H8zM12 3h1v1H12zM14 3h2v1H14zM17 3h1v1H17zM19 3h1v1H19zM22 3h6v1H22zM30 3h1v1H30zM32 3h3v1H32zM36,3 h1v1H36zM0 4h1v1H0zM2 4h3v1H2zM6 4h1v1H6zM8 4h3v1H8zM13 4h9v1H13zM23 4h1v1H23zM28 4h1v1H28zM30 4h1v1H30zM32 4h3v1H32zM36,4 h1v1H36zM0 5h1v1H0zM6 5h1v1H6zM8 5h2v1H8zM11 5h3v1H11zM15 5h3v1H15zM20 5h1v1H20zM22 5h1v1H22zM26 5h2v1H26zM30 5h1v1H30zM36,5 h1v1H36zM0 6h7v1H0zM8 6h1v1H8zM10 6h1v1H10zM12 6h1v1H12zM14 6h1v1H14zM16 6h1v1H16zM18 6h1v1H18zM20 6h1v1H20zM22 6h1v1H22zM24 6h1v1H24zM26 6h1v1H26zM28 6h1v1H28zM30,6 h7v1H30zM8 7h2v1H8zM11 7h2v1H11zM14 7h3v1H14zM18 7h6v1H18zM28 7h1v1H28zM0 8h1v1H0zM2 8h5v1H2zM10 8h3v1H10zM17 8h1v1H17zM19 8h1v1H19zM22 8h5v1H22zM28 8h1v1H28zM30 8h5v1H30zM0 9h6v1H0zM7 9h2v1H7zM11 9h1v1H11zM13 9h1v1H13zM15 9h2v1H15zM18 9h3v1H18zM23 9h1v1H23zM25 9h1v1H25zM28 9h1v1H28zM31 9h1v1H31zM33 9h1v1H33zM35 9h1v1H35zM1 10h2v1H1zM6 10h1v1H6zM9 10h1v1H9zM11 10h1v1H11zM13 10h2v1H13zM22 10h1v1H22zM25 10h3v1H25zM29 10h3v1H29zM34,10 h3v1H34zM0 11h5v1H0zM7 11h2v1H7zM16 11h1v1H16zM18 11h4v1H18zM24 11h1v1H24zM28 11h2v1H28zM31 11h1v1H31zM36,11 h1v1H36zM0 12h1v1H0zM3 12h1v1H3zM6 12h1v1H6zM9 12h1v1H9zM11 12h1v1H11zM14 12h1v1H14zM17 12h2v1H17zM24 12h4v1H24zM29,12 h8v1H29zM2 13h1v1H2zM4 13h1v1H4zM7 13h7v1H7zM16 13h1v1H16zM19 13h2v1H19zM23 13h3v1H23zM28 13h2v1H28zM31 13h1v1H31zM0 14h1v1H0zM3 14h1v1H3zM6 14h1v1H6zM9 14h1v1H9zM13 14h1v1H13zM15 14h2v1H15zM22 14h1v1H22zM26 14h8v1H26zM35,14 h2v1H35zM1 15h1v1H1zM7 15h1v1H7zM11 15h3v1H11zM20 15h2v1H20zM26 15h2v1H26zM31 15h2v1H31zM5 16h2v1H5zM8 16h2v1H8zM15 16h3v1H15zM19 16h1v1H19zM23 16h2v1H23zM26 16h1v1H26zM29 16h2v1H29zM32 16h1v1H32zM34 16h1v1H34zM36,16 h1v1H36zM0 17h3v1H0zM4 17h2v1H4zM7 17h2v1H7zM10 17h2v1H10zM13 17h1v1H13zM15 17h1v1H15zM17 17h4v1H17zM22 17h2v1H22zM26 17h1v1H26zM31 17h1v1H31zM35 17h1v1H35zM1 18h1v1H1zM4 18h1v1H4zM6 18h2v1H6zM9 18h1v1H9zM12 18h1v1H12zM14 18h4v1H14zM20 18h1v1H20zM22 18h1v1H22zM24 18h2v1H24zM27 18h1v1H27zM29 18h2v1H29zM35,18 h2v1H35zM3 19h3v1H3zM7 19h2v1H7zM10 19h1v1H10zM13 19h3v1H13zM20 19h3v1H20zM24 19h1v1H24zM26 19h4v1H26zM31 19h1v1H31zM33 19h1v1H33zM36,19 h1v1H36zM1 20h1v1H1zM3 20h2v1H3zM6 20h5v1H6zM13 20h5v1H13zM22 20h1v1H22zM24 20h4v1H24zM29 20h2v1H29zM32 20h1v1H32zM34 20h1v1H34zM1 21h1v1H1zM3 21h1v1H3zM5 21h1v1H5zM8 21h1v1H8zM11 21h2v1H11zM16 21h1v1H16zM19 21h2v1H19zM23 21h1v1H23zM25 21h1v1H25zM28 21h2v1H28zM33 21h1v1H33zM35 21h1v1H35zM0 22h1v1H0zM5 22h2v1H5zM9 22h1v1H9zM11 22h1v1H11zM13 22h1v1H13zM15 22h2v1H15zM21 22h2v1H21zM25 22h3v1H25zM31 22h3v1H31zM35,22 h2v1H35zM0 23h1v1H0zM2 23h2v1H2zM5 23h1v1H5zM7 23h3v1H7zM11 23h1v1H11zM14 23h1v1H14zM16 23h1v1H16zM18 23h6v1H18zM26 23h1v1H26zM29 23h4v1H29zM35,23 h2v1H35zM0 24h1v1H0zM5 24h2v1H5zM10 24h1v1H10zM13 24h1v1H13zM18 24h2v1H18zM22 24h2v1H22zM25 24h3v1H25zM29 24h2v1H29zM32 24h1v1H32zM34,24 h3v1H34zM0 25h1v1H0zM5 25h1v1H5zM7 25h1v1H7zM9 25h1v1H9zM15 25h2v1H15zM18 25h6v1H18zM28 25h1v1H28zM31 25h1v1H31zM34 25h1v1H34zM0 26h1v1H0zM4 26h4v1H4zM13 26h2v1H13zM21 26h2v1H21zM26 26h5v1H26zM32 26h1v1H32zM35,26 h2v1H35zM0 27h1v1H0zM2 27h2v1H2zM5 27h1v1H5zM10 27h3v1H10zM14 27h1v1H14zM16 27h1v1H16zM20 27h2v1H20zM26 27h4v1H26zM31 27h2v1H31zM35 27h1v1H35zM0 28h1v1H0zM4 28h5v1H4zM10 28h1v1H10zM12 28h3v1H12zM16 28h2v1H16zM22 28h4v1H22zM27 28h6v1H27zM34 28h2v1H34zM8 29h2v1H8zM11 29h1v1H11zM13 29h1v1H13zM15 29h3v1H15zM19 29h3v1H19zM23 29h1v1H23zM27 29h2v1H27zM32 29h2v1H32zM35 29h1v1H35zM0 30h7v1H0zM9 30h2v1H9zM12 30h1v1H12zM15 30h3v1H15zM20 30h3v1H20zM25 30h1v1H25zM28 30h1v1H28zM30 30h1v1H30zM32 30h1v1H32zM34,30 h3v1H34zM0 31h1v1H0zM6 31h1v1H6zM8 31h1v1H8zM11 31h14v1H11zM26 31h1v1H26zM28 31h1v1H28zM32 31h2v1H32zM35 31h1v1H35zM0 32h1v1H0zM2 32h3v1H2zM6 32h1v1H6zM8 32h3v1H8zM14 32h1v1H14zM16 32h1v1H16zM22 32h1v1H22zM24 32h9v1H24zM34 32h2v1H34zM0 33h1v1H0zM2 33h3v1H2zM6 33h1v1H6zM8 33h1v1H8zM10 33h4v1H10zM15 33h1v1H15zM18 33h3v1H18zM23 33h1v1H23zM25 33h1v1H25zM27 33h2v1H27zM30 33h1v1H30zM32 33h1v1H32zM36,33 h1v1H36zM0 34h1v1H0zM2 34h3v1H2zM6 34h1v1H6zM8 34h1v1H8zM11 34h6v1H11zM22 34h1v1H22zM25 34h2v1H25zM28 34h1v1H28zM35,34 h2v1H35zM0 35h1v1H0zM6 35h1v1H6zM15 35h1v1H15zM18 35h5v1H18zM24 35h1v1H24zM27 35h3v1H27zM32 35h1v1H32zM36,35 h1v1H36zM0 36h7v1H0zM8 36h2v1H8zM11 36h2v1H11zM14 36h2v1H14zM17 36h1v1H17zM19 36h2v1H19zM22 36h1v1H22zM24 36h3v1H24zM32,36 h5v1H32z"
                  shapeRendering="crispEdges"
                />
              </svg>
            </div>
            <p className="typography-Caption2 text-center QRCode-text1 mt-4">
              Scan to Download App iOS &amp; Android
            </p>
            <a
              id="ba-downloadoptions"
              href="https://www.binance.com/en/download?utm_source=undefined&amp;utm_campaign=undefined"
            >
              <button
                fr=""
                as="a"
                href="https://www.binance.com/en/download?utm_source=undefined&amp;utm_campaign=undefined"
                className="bn-button bn-button__primary data-size-small mt-16"
              >
                <p className="typography-Caption1">More Download Options</p>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DownloadQr;
