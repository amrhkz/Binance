import React from "react";
import "@/components/download/download.css";
import DownloadTab from "./download-tab/download-tab";

function Download() {
  return (
    <div class="bg-bg1">
      <div
        class="mx-auto mobile:px-m px-xl smooth_style relative mobile:py-6 tablet:py-16 py-20"
        style={{ maxWidth: "1248px" }}
      >
        <div class="flex gap-[80px] mobile:flex-col mobile:gap-xl tablet:gap-m">
          <DownloadTab />
          <div class="flex w-1/2 flex-col justify-between mobile:w-full tablet:w-[352px] desktop:h-[610px]">
            <div class="flex items-start justify-between mobile:flex-col mobile:items-center tablet:flex-col">
              <h2 class="text-headline2 text-t-primary mobile:text-center mobile:text-headline5 tablet:text-headline4">
                Trade on the go. Anywhere, anytime.
              </h2>
            </div>
            <div class="hidden justify-center gap-xl mobile:flex">
              <a
                class="h-[40px] w-[135px] items-center rounded-xs bg-contain py-2xs pl-2xs"
                href="https://app.appsflyer.com/id1436799971?pid=homepage_download_a&amp;c=new_homepage?utm_source=new_homepage_download_section&amp;pid=homepage_download_a&amp;c=new_homepage"
                style={{
                  backgroundImage:
                    "url(https://bin.bnbstatic.com/image/julia/new-homepage/download-btn/en-apple.png)",
                }}
              ></a>
              <a
                class="h-[40px] w-[135px] items-center rounded-xs bg-contain py-2xs pl-2xs"
                href="https://app.appsflyer.com/com.binance.dev?pid=homepage_download_a&amp;c=new_homepage?utm_source=new_homepage_download_section&amp;pid=homepage_download_a&amp;c=new_homepage"
                style={{
                  backgroundImage:
                    "url(https://bin.bnbstatic.com/image/julia/new-homepage/download-btn/en-apple.png)",
                }}
              ></a>
            </div>
            <div class="download-pc flex flex-col gap-5xl mobile:gap-xl tablet:gap-xl mobile:hidden">
              <div class="mt-[0px] flex items-center mobile:mt-4xl">
                <div class="items-center rounded-[24px] border border-solid p-l border-[#2B3139] mobile:rounded-xl mobile:p-m tablet:p-m">
                  <div class="rounded-[8px] bg-white p-xs">
                    <div
                      class="relative flex items-center justify-center"
                      style={{
                        width: "156px",
                        height: "156px",
                        borderRadius: "4px",
                      }}
                    >
                      <svg
                        shape-rendering="crispEdges"
                        height="152"
                        width="152"
                        viewBox="0 0 45 45"
                      >
                        <path fill="#FFFFFF" d="M0,0 h45v45H0z"></path>
                        <path
                          fill="#000000"
                          d="M0 0h7v1H0zM8 0h2v1H8zM13 0h2v1H13zM20 0h2v1H20zM25 0h2v1H25zM28 0h3v1H28zM33 0h1v1H33zM36 0h1v1H36zM38,0 h7v1H38zM0 1h1v1H0zM6 1h1v1H6zM9 1h1v1H9zM11 1h3v1H11zM15 1h1v1H15zM17 1h2v1H17zM20 1h6v1H20zM27 1h2v1H27zM31 1h3v1H31zM35 1h1v1H35zM38 1h1v1H38zM44,1 h1v1H44zM0 2h1v1H0zM2 2h3v1H2zM6 2h1v1H6zM10 2h3v1H10zM19 2h2v1H19zM22 2h2v1H22zM25 2h3v1H25zM30 2h1v1H30zM32 2h2v1H32zM35 2h1v1H35zM38 2h1v1H38zM40 2h3v1H40zM44,2 h1v1H44zM0 3h1v1H0zM2 3h3v1H2zM6 3h1v1H6zM8 3h1v1H8zM11 3h2v1H11zM20 3h1v1H20zM22 3h1v1H22zM25 3h2v1H25zM28 3h1v1H28zM30 3h2v1H30zM35 3h2v1H35zM38 3h1v1H38zM40 3h3v1H40zM44,3 h1v1H44zM0 4h1v1H0zM2 4h3v1H2zM6 4h1v1H6zM8 4h4v1H8zM13 4h5v1H13zM20 4h5v1H20zM26 4h6v1H26zM33 4h4v1H33zM38 4h1v1H38zM40 4h3v1H40zM44,4 h1v1H44zM0 5h1v1H0zM6 5h1v1H6zM8 5h1v1H8zM11 5h1v1H11zM13 5h1v1H13zM17 5h1v1H17zM19 5h2v1H19zM24 5h2v1H24zM29 5h1v1H29zM32 5h1v1H32zM38 5h1v1H38zM44,5 h1v1H44zM0 6h7v1H0zM8 6h1v1H8zM10 6h1v1H10zM12 6h1v1H12zM14 6h1v1H14zM16 6h1v1H16zM18 6h1v1H18zM20 6h1v1H20zM22 6h1v1H22zM24 6h1v1H24zM26 6h1v1H26zM28 6h1v1H28zM30 6h1v1H30zM32 6h1v1H32zM34 6h1v1H34zM36 6h1v1H36zM38,6 h7v1H38zM8 7h2v1H8zM11 7h1v1H11zM16 7h3v1H16zM20 7h1v1H20zM24 7h4v1H24zM32 7h3v1H32zM36 7h1v1H36zM0 8h1v1H0zM4 8h1v1H4zM6 8h4v1H6zM11 8h2v1H11zM14 8h1v1H14zM17 8h1v1H17zM19 8h6v1H19zM29 8h2v1H29zM32 8h1v1H32zM34 8h1v1H34zM37 8h5v1H37zM44,8 h1v1H44zM0 9h1v1H0zM2 9h4v1H2zM9 9h1v1H9zM11 9h4v1H11zM16 9h1v1H16zM18 9h1v1H18zM21 9h3v1H21zM26 9h2v1H26zM29 9h2v1H29zM33 9h1v1H33zM35 9h7v1H35zM1 10h1v1H1zM4 10h4v1H4zM12 10h1v1H12zM14 10h2v1H14zM18 10h1v1H18zM22 10h1v1H22zM26 10h1v1H26zM29 10h2v1H29zM33 10h1v1H33zM35 10h1v1H35zM37 10h4v1H37zM43 10h1v1H43zM0 11h6v1H0zM8 11h1v1H8zM10 11h1v1H10zM15 11h2v1H15zM18 11h1v1H18zM22 11h1v1H22zM25 11h1v1H25zM28 11h2v1H28zM31 11h1v1H31zM34 11h1v1H34zM36 11h1v1H36zM38 11h1v1H38zM1 12h2v1H1zM4 12h1v1H4zM6 12h1v1H6zM8 12h1v1H8zM10 12h1v1H10zM16 12h3v1H16zM20 12h1v1H20zM22 12h3v1H22zM26 12h2v1H26zM29 12h1v1H29zM32 12h1v1H32zM35 12h1v1H35zM38 12h2v1H38zM41 12h1v1H41zM43 12h1v1H43zM0 13h2v1H0zM4 13h2v1H4zM7 13h3v1H7zM11 13h1v1H11zM20 13h1v1H20zM23 13h1v1H23zM25 13h4v1H25zM30 13h1v1H30zM32 13h1v1H32zM35 13h2v1H35zM38 13h6v1H38zM1 14h1v1H1zM6 14h5v1H6zM14 14h1v1H14zM20 14h4v1H20zM25 14h2v1H25zM28 14h1v1H28zM30 14h3v1H30zM36 14h3v1H36zM42 14h2v1H42zM0 15h2v1H0zM3 15h1v1H3zM5 15h1v1H5zM9 15h2v1H9zM19 15h1v1H19zM22 15h2v1H22zM25 15h1v1H25zM27 15h1v1H27zM32 15h1v1H32zM35 15h1v1H35zM37 15h3v1H37zM43,15 h2v1H43zM0 16h2v1H0zM3 16h1v1H3zM5 16h2v1H5zM9 16h2v1H9zM12 16h1v1H12zM14 16h1v1H14zM16 16h3v1H16zM20 16h1v1H20zM22 16h4v1H22zM27 16h1v1H27zM29 16h2v1H29zM32 16h3v1H32zM39 16h1v1H39zM44,16 h1v1H44zM3 17h3v1H3zM7 17h1v1H7zM10 17h1v1H10zM15 17h1v1H15zM17 17h1v1H17zM21 17h3v1H21zM26 17h3v1H26zM30 17h2v1H30zM33 17h1v1H33zM35 17h2v1H35zM38 17h1v1H38zM41 17h3v1H41zM0 18h3v1H0zM4 18h1v1H4zM6 18h1v1H6zM9 18h1v1H9zM12 18h2v1H12zM15 18h1v1H15zM17 18h1v1H17zM20 18h1v1H20zM25 18h2v1H25zM29 18h5v1H29zM36 18h3v1H36zM40 18h1v1H40zM43 18h1v1H43zM2 19h2v1H2zM8 19h5v1H8zM14 19h1v1H14zM16 19h2v1H16zM19 19h1v1H19zM22 19h1v1H22zM26 19h2v1H26zM29 19h1v1H29zM32 19h3v1H32zM36 19h2v1H36zM39 19h1v1H39zM43 19h1v1H43zM1 20h2v1H1zM4 20h5v1H4zM10 20h1v1H10zM12 20h1v1H12zM16 20h3v1H16zM20 20h8v1H20zM29 20h1v1H29zM31 20h3v1H31zM36,20 h9v1H36zM3 21h2v1H3zM8 21h1v1H8zM10 21h1v1H10zM12 21h4v1H12zM20 21h1v1H20zM24 21h1v1H24zM26 21h1v1H26zM28 21h3v1H28zM32 21h2v1H32zM35 21h2v1H35zM40 21h4v1H40zM0 22h2v1H0zM4 22h1v1H4zM6 22h1v1H6zM8 22h2v1H8zM11 22h3v1H11zM16 22h2v1H16zM19 22h2v1H19zM22 22h1v1H22zM24 22h1v1H24zM26 22h5v1H26zM33 22h1v1H33zM36 22h1v1H36zM38 22h1v1H38zM40 22h2v1H40zM1 23h2v1H1zM4 23h1v1H4zM8 23h2v1H8zM11 23h2v1H11zM14 23h1v1H14zM19 23h2v1H19zM24 23h2v1H24zM27 23h1v1H27zM29 23h1v1H29zM31 23h3v1H31zM35 23h2v1H35zM40 23h1v1H40zM4 24h5v1H4zM10 24h2v1H10zM13 24h1v1H13zM15 24h1v1H15zM18 24h7v1H18zM26 24h2v1H26zM29 24h1v1H29zM32 24h2v1H32zM36 24h6v1H36zM44,24 h1v1H44zM1 25h1v1H1zM5 25h1v1H5zM13 25h6v1H13zM21 25h4v1H21zM26 25h5v1H26zM33 25h1v1H33zM39 25h1v1H39zM42 25h2v1H42zM1 26h2v1H1zM5 26h8v1H5zM16 26h2v1H16zM23 26h2v1H23zM26 26h1v1H26zM30 26h4v1H30zM37 26h1v1H37zM39 26h5v1H39zM0 27h3v1H0zM4 27h1v1H4zM7 27h5v1H7zM14 27h1v1H14zM18 27h3v1H18zM25 27h2v1H25zM30 27h1v1H30zM32 27h1v1H32zM36 27h1v1H36zM38 27h1v1H38zM40 27h1v1H40zM1 28h1v1H1zM3 28h5v1H3zM9 28h5v1H9zM15 28h3v1H15zM20 28h2v1H20zM23 28h1v1H23zM26 28h2v1H26zM29 28h2v1H29zM32 28h3v1H32zM36 28h2v1H36zM39 28h2v1H39zM43 28h1v1H43zM0 29h2v1H0zM5 29h1v1H5zM11 29h5v1H11zM18 29h1v1H18zM22 29h2v1H22zM26 29h2v1H26zM29 29h5v1H29zM35 29h1v1H35zM37 29h1v1H37zM39 29h1v1H39zM41 29h3v1H41zM0 30h1v1H0zM6 30h2v1H6zM9 30h2v1H9zM16 30h3v1H16zM20 30h2v1H20zM23 30h2v1H23zM26 30h1v1H26zM28 30h4v1H28zM39 30h2v1H39zM43 30h1v1H43zM0 31h2v1H0zM3 31h2v1H3zM8 31h2v1H8zM11 31h1v1H11zM14 31h2v1H14zM17 31h1v1H17zM19 31h4v1H19zM27 31h1v1H27zM30 31h1v1H30zM32 31h3v1H32zM36 31h1v1H36zM38 31h3v1H38zM43 31h1v1H43zM2 32h1v1H2zM4 32h3v1H4zM9 32h2v1H9zM14 32h1v1H14zM16 32h1v1H16zM18 32h4v1H18zM23 32h5v1H23zM32 32h2v1H32zM37 32h2v1H37zM40,32 h5v1H40zM0 33h2v1H0zM3 33h2v1H3zM8 33h1v1H8zM10 33h1v1H10zM12 33h2v1H12zM16 33h1v1H16zM22 33h2v1H22zM26 33h2v1H26zM29 33h2v1H29zM32 33h2v1H32zM37 33h1v1H37zM39 33h1v1H39zM41 33h1v1H41zM43 33h1v1H43zM4 34h1v1H4zM6 34h1v1H6zM13 34h2v1H13zM17 34h1v1H17zM20 34h5v1H20zM26 34h2v1H26zM29 34h2v1H29zM33 34h1v1H33zM35 34h1v1H35zM37 34h1v1H37zM39 34h2v1H39zM42 34h2v1H42zM1 35h4v1H1zM7 35h1v1H7zM9 35h1v1H9zM11 35h1v1H11zM13 35h1v1H13zM16 35h1v1H16zM18 35h3v1H18zM22 35h1v1H22zM25 35h2v1H25zM30 35h1v1H30zM32 35h1v1H32zM34 35h1v1H34zM38 35h1v1H38zM40 35h1v1H40zM0 36h1v1H0zM3 36h2v1H3zM6 36h1v1H6zM8 36h1v1H8zM10 36h3v1H10zM15 36h2v1H15zM20 36h5v1H20zM27 36h1v1H27zM29 36h1v1H29zM32 36h1v1H32zM36 36h5v1H36zM43,36 h2v1H43zM8 37h2v1H8zM11 37h1v1H11zM13 37h4v1H13zM19 37h2v1H19zM24 37h1v1H24zM26 37h2v1H26zM29 37h2v1H29zM33 37h1v1H33zM35 37h2v1H35zM40 37h4v1H40zM0 38h7v1H0zM8 38h2v1H8zM11 38h2v1H11zM14 38h2v1H14zM18 38h3v1H18zM22 38h1v1H22zM24 38h1v1H24zM26 38h1v1H26zM28 38h1v1H28zM30 38h3v1H30zM34 38h1v1H34zM36 38h1v1H36zM38 38h1v1H38zM40 38h2v1H40zM43 38h1v1H43zM0 39h1v1H0zM6 39h1v1H6zM10 39h2v1H10zM14 39h2v1H14zM17 39h1v1H17zM19 39h2v1H19zM24 39h4v1H24zM31 39h1v1H31zM36 39h1v1H36zM40 39h1v1H40zM43 39h1v1H43zM0 40h1v1H0zM2 40h3v1H2zM6 40h1v1H6zM8 40h1v1H8zM11 40h1v1H11zM15 40h2v1H15zM18 40h8v1H18zM27 40h1v1H27zM30 40h1v1H30zM32 40h1v1H32zM34 40h8v1H34zM43,40 h2v1H43zM0 41h1v1H0zM2 41h3v1H2zM6 41h1v1H6zM11 41h1v1H11zM13 41h2v1H13zM19 41h3v1H19zM23 41h11v1H23zM38 41h1v1H38zM40 41h3v1H40zM0 42h1v1H0zM2 42h3v1H2zM6 42h1v1H6zM9 42h3v1H9zM13 42h1v1H13zM16 42h1v1H16zM18 42h1v1H18zM20 42h2v1H20zM23 42h2v1H23zM26 42h6v1H26zM33 42h1v1H33zM37 42h2v1H37zM40 42h1v1H40zM43 42h1v1H43zM0 43h1v1H0zM6 43h1v1H6zM9 43h1v1H9zM11 43h2v1H11zM15 43h4v1H15zM20 43h1v1H20zM22 43h6v1H22zM30 43h3v1H30zM34 43h4v1H34zM0 44h7v1H0zM8 44h3v1H8zM13 44h1v1H13zM15 44h2v1H15zM18 44h1v1H18zM20 44h6v1H20zM27 44h1v1H27zM32 44h2v1H32zM35 44h1v1H35zM37 44h1v1H37zM39 44h2v1H39zM44,44 h1v1H44z"
                        ></path>
                      </svg>
                      <div
                        class="absolute left-1/2 top-1/2 rounded-xs"
                        style={{
                          width: "26px",
                          height: "26px",
                          border: "3px solid rgb(255, 255, 255)",
                          transform: "translate(-50%, -50%)",
                          backgroundSize: "85%",
                          backgroundPosition: "center center",
                          backgroundRepeat: "no-repeat",
                          backgroundImage:
                            "url(/img/logo-2.png)",
                          backgroundColor: "rgb(0, 0, 0)",
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
                <div class="text-t-primary ml-xl">
                  <div class="text-body1 text-t-third mobile:text-body2 tablet:text-body2">
                    Scan to Download App
                  </div>
                  <div class="mt-2xs text-headline6 mobile:text-subtitle1 tablet:text-subtitle1">
                    iOS and Android
                  </div>
                </div>
              </div>
              <div class="flex w-[436px] justify-between gap-[64px] mobile:w-full mobile:gap-[0px] tablet:w-[336px] tablet:gap-[24px]">
                <a
                  href="https://download.binance.com/electron-desktop/mac/production/binance.dmg"
                  id="Download_2023_macOS"
                  class="flex w-[112px] cursor-pointer flex-col items-center rounded-[8px] p-2xs mobile:w-auto tablet:w-[96px] hover:bg-[#252A32]"
                >
                  <svg
                    class="bn-svg text-[40px] text-t-primary mobile:text-[32px] tablet:text-[32px]"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M15.69 1.978c.133 1.149-.345 2.28-1.046 3.112-.73.819-1.9 1.445-3.037 1.364-.15-1.104.428-2.28 1.073-2.996.73-.815 1.997-1.438 3.01-1.48zm3.64 6.17c-.135.076-2.231 1.27-2.208 3.699.026 2.94 2.707 3.912 2.739 3.922-.015.069-.42 1.403-1.424 2.757-.84 1.193-1.72 2.359-3.116 2.38-.665.014-1.113-.168-1.58-.357-.488-.197-.996-.402-1.79-.402-.843 0-1.374.212-1.886.416-.442.177-.87.349-1.474.372-1.33.047-2.347-1.273-3.217-2.454-1.738-2.413-3.092-6.8-1.277-9.786.88-1.464 2.484-2.406 4.197-2.432.755-.014 1.48.262 2.114.504.485.186.918.35 1.273.35.312 0 .733-.158 1.224-.343.773-.291 1.72-.648 2.683-.552.659.018 2.536.247 3.745 1.924l-.003.002z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  <div class="mt-2xs text-subtitle1 text-t-primary mobile:text-subtitle2 tablet:text-subtitle2">
                    MacOS
                  </div>
                </a>
                <a
                  id="Download_2023_windows"
                  class="flex w-[112px] cursor-pointer flex-col items-center rounded-[8px] p-2xs mobile:w-auto tablet:w-[96px] hover:bg-[#252A32]"
                  href="https://download.binance.com/electron-desktop/windows/production/binance-setup.exe"
                >
                  <svg
                    class="bn-svg text-[40px] text-t-primary mobile:text-[32px] tablet:text-[32px]"
                    viewBox="0 0 24 25"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3 3.895h8.533v8.529H3v-8.53zm9.467 0H21v8.529h-8.533v-8.53zM3 13.362h8.533v8.533H3v-8.533zm9.467 0H21v8.533h-8.533"
                      fill="currentColor"
                    ></path>
                  </svg>
                  <div class="mt-2xs text-subtitle1 text-t-primary mobile:text-subtitle2 tablet:text-subtitle2">
                    Windows
                  </div>
                </a>
                <a
                  id="Download_2023_linux"
                  class="flex w-[112px] cursor-pointer flex-col items-center rounded-[8px] p-2xs mobile:w-auto tablet:w-[96px] hover:bg-[#252A32]"
                  href="https://download.binance.com/electron-desktop/linux/production/binance-amd64-linux.deb"
                >
                  <svg
                    class="bn-svg text-[40px] text-t-primary mobile:text-[32px] tablet:text-[32px]"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M20.578 18.633c-.553-.23-1.015-.588-.99-1.267.039-.691-.488-1.139-.488-1.139s.463-1.498.039-2.74c-.424-1.24-1.837-3.225-2.917-4.735-1.092-1.51-.167-3.239-1.156-5.453-.99-2.227-3.546-2.087-4.92-1.14-1.375.948-.951 3.29-.887 4.404.064 1.114.026 1.894-.103 2.189-.128.281-1.015 1.344-1.606 2.214-.59.883-1.015 2.714-1.451 3.456-.424.755-.129 1.434-.129 1.434s-.295.102-.527.589c-.23.486-.693.716-1.516.883-.822.166-.822.691-.629 1.28.193.589 0 .909-.231 1.664-.232.742.925.973 2.03 1.1 1.117.129 2.363.846 3.417.986 1.053.128 1.375-.716 1.375-.716s1.182-.27 2.428-.295a10.117 10.117 0 012.428.256s.231.525.655.755c.424.23 1.35.256 1.94-.358.591-.627 2.171-1.408 3.058-1.895.899-.499.745-1.241.18-1.472zM12.895 4.246c.565 0 1.015.55 1.015 1.242 0 .486-.231.909-.566 1.113l-.27-.115c.206-.102.348-.358.348-.653 0-.384-.245-.704-.54-.704-.296 0-.54.32-.54.704 0 .141.039.282.09.397-.18-.064-.334-.128-.462-.18a2.24 2.24 0 01-.09-.575c0-.678.462-1.229 1.015-1.229zm-.064 2.611c.282.103.59.282.565.461-.039.18-.18.18-.565.41-.386.23-1.208.742-1.478.768-.27.038-.41-.115-.694-.295-.282-.179-.809-.614-.68-.844 0 0 .41-.32.59-.474.18-.166.643-.563.925-.512.296.051 1.054.384 1.337.486zm-2.544-2.419c.45 0 .81.525.81 1.178 0 .115-.014.23-.04.333a.828.828 0 00-.32.192c-.052.038-.103.09-.155.128a.824.824 0 00.065-.512c-.065-.359-.296-.615-.527-.576-.231.038-.373.358-.321.716.064.359.295.615.526.576.013 0 .026 0 .039-.012a2.978 2.978 0 01-.321.281c-.321-.153-.566-.601-.566-1.126.013-.653.373-1.178.81-1.178zm-.86 16.487c-.104.473-.656.806-.656.806-.501.154-1.889-.448-2.518-.704-.63-.256-2.236-.346-2.441-.576-.206-.243.103-.755.18-1.254.077-.5-.154-.807-.077-1.152.077-.333 1.104-.333 1.49-.576.398-.23.475-.91.784-1.101.32-.18.886.473 1.13.832.231.358 1.13 1.933 1.49 2.317.373.422.72.934.617 1.408zm5.806-4.544c-.09.46-.09 2.124-.09 2.124s-1.015 1.396-2.595 1.626c-1.58.23-2.364.064-2.364.064l-.886-1.011s.693-.103.59-.781c-.102-.678-2.106-1.626-2.466-2.483-.36-.845-.064-2.279.398-3.008.463-.717.758-2.279 1.208-2.803.462-.525.822-1.626.655-2.125 0 0 .99 1.177 1.67.985.694-.192 2.236-1.33 2.467-1.139.231.192 2.197 4.506 2.39 5.875.192 1.37-.129 2.42-.129 2.42s-.758-.205-.848.256zm5.036 3.072c-.308.281-2.017.96-2.53 1.497-.515.525-1.17.96-1.58.832-.412-.128-.772-.69-.592-1.497.18-.807.334-1.703.309-2.202-.026-.512-.129-1.19 0-1.293.128-.102.333-.051.333-.051s-.102.96.489 1.216c.59.256 1.426-.102 1.683-.358.257-.256.436-.628.436-.628s.257.128.232.538c-.026.41.18.986.565 1.19.373.192.964.474.655.756z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  <div class="mt-2xs text-subtitle1 text-t-primary mobile:text-subtitle2 tablet:text-subtitle2">
                    Linux
                  </div>
                </a>
              </div>
              <a
                id="Download_2023_more"
                href="/en/download"
                class="flex h-[48px] w-fit items-center bg-transparent text-t-primary hover:text-t-secondary mobile:mt-[40px] mobile:h-[40px]"
              >
                <svg
                  class="bn-svg text-[20px] text-iconNormal"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7.5 9V6H16v3h3V3H4.5v6h3zm-3 12H19v-6h-3v3H7.5v-3h-3v6zm6.009-13h3v4.002l2.508.006-4.008 4.008-4.01-4.008 2.51-.025V8z"
                    fill="currentColor"
                  ></path>
                </svg>
                <div class="text-subtitle1 mobile:text-subtitle2 ml-4xs">
                  More Download Options
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Download;
