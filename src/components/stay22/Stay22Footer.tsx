"use client";

import React, { useState } from "react";
import { RiveAnimation } from "./RiveAnimation";
import { Fit } from "@rive-app/react-canvas";

export function Stay22Footer() {
  const [animationsPaused, setAnimationsPaused] = useState(false);

  return (
    <>
      <footer
        id="contact"
        className="site-footer bg-[#201c1c] text-[#f2e4d8] pt-12 md:pt-20 pb-8 md:pb-12 relative z-20 font-normal"
        style={{ backgroundColor: "#201c1c", color: "#f2e4d8" }}
      >
        <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-14 flex flex-col gap-10 md:gap-14">
          {/* Main 4-Column Navigation */}
          <nav aria-label="Footer navigation" className="w-full">
            <ul className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 list-none m-0 p-0 text-sm md:text-base">
              {/* Column 1: Solutions */}
              <li className="flex flex-col gap-4 md:gap-6">
                <span className="text-[12px] md:text-[13px] uppercase tracking-[0.15em] text-[#ffb200] font-semibold">
                  Solutions
                </span>
                <div className="flex flex-col gap-3">
                  <span className="text-white/50 text-xs md:text-sm font-medium">
                    By Business Type
                  </span>
                  <ul className="flex flex-col gap-2.5 list-none m-0 p-0 text-xs md:text-sm">
                    <li>
                      <a href="https://www.stay22.com/business-type/travel-bloggers" className="hover:text-[#ffb200] transition-colors">
                        Travel bloggers
                      </a>
                    </li>
                    <li>
                      <a href="https://www.stay22.com/business-type/publishers" className="hover:text-[#ffb200] transition-colors">
                        Publishers
                      </a>
                    </li>
                    <li>
                      <a href="https://www.stay22.com/business-type/weather" className="hover:text-[#ffb200] transition-colors">
                        Weather
                      </a>
                    </li>
                    <li>
                      <a href="https://www.stay22.com/business-type/events-and-ticketing" className="hover:text-[#ffb200] transition-colors">
                        Event and Ticketing
                      </a>
                    </li>
                    <li>
                      <a href="https://www.stay22.com/business-type/transportation" className="hover:text-[#ffb200] transition-colors">
                        Transportation
                      </a>
                    </li>
                    <li>
                      <a href="https://www.stay22.com/why-stay22" className="hover:text-[#ffb200] transition-colors">
                        Why Stay22
                      </a>
                    </li>
                  </ul>
                </div>
              </li>

              {/* Column 2: Platform */}
              <li className="flex flex-col gap-4 md:gap-6">
                <span className="text-[12px] md:text-[13px] uppercase tracking-[0.15em] text-[#ffb200] font-semibold">
                  Platform
                </span>
                <div className="flex flex-col gap-3">
                  <a href="https://www.stay22.com/platform-overview" className="text-white/50 text-xs md:text-sm font-medium hover:text-[#ffb200] transition-colors">
                    Platform overview
                  </a>
                  <ul className="flex flex-col gap-2.5 list-none m-0 p-0 text-xs md:text-sm">
                    <li>
                      <a href="https://www.stay22.com/products/nova" className="hover:text-[#ffb200] transition-colors">Nova</a>
                    </li>
                    <li>
                      <a href="https://www.stay22.com/products/spark" className="hover:text-[#ffb200] transition-colors">Spark</a>
                    </li>
                    <li>
                      <a href="https://www.stay22.com/products/lift" className="hover:text-[#ffb200] transition-colors">Lift</a>
                    </li>
                    <li>
                      <a href="https://www.stay22.com/products/map" className="hover:text-[#ffb200] transition-colors">Map</a>
                    </li>
                    <li>
                      <a href="https://www.stay22.com/products/loop" className="hover:text-[#ffb200] transition-colors">Loop</a>
                    </li>
                    <li>
                      <a href="https://www.stay22.com/products/allez" className="hover:text-[#ffb200] transition-colors">Allez</a>
                    </li>
                  </ul>
                </div>
              </li>

              {/* Column 3: Resources */}
              <li className="flex flex-col gap-4 md:gap-6">
                <span className="text-[12px] md:text-[13px] uppercase tracking-[0.15em] text-[#ffb200] font-semibold">
                  Resources
                </span>
                <ul className="flex flex-col gap-2.5 list-none m-0 p-0 text-xs md:text-sm">
                  <li><a href="https://blog.stay22.com" className="hover:text-[#ffb200] transition-colors">Blog</a></li>
                  <li><a href="https://www.stay22.com/referral-program-stay22" className="hover:text-[#ffb200] transition-colors">Referral Program</a></li>
                  <li><a href="https://www.stay22.com/travel-industry-report" className="hover:text-[#ffb200] transition-colors">Travel Industry Report</a></li>
                  <li><a href="https://www.stay22.com/case-studies" className="hover:text-[#ffb200] transition-colors">Case Studies</a></li>
                  <li><a href="https://www.stay22.com/webinars" className="hover:text-[#ffb200] transition-colors">Webinars</a></li>
                  <li><a href="https://www.stay22.com/content-club" className="hover:text-[#ffb200] transition-colors">Content Club</a></li>
                  <li><a href="https://community.stay22.com" className="hover:text-[#ffb200] transition-colors">Help Center</a></li>
                  <li><a href="https://dev.stay22.com/docs" className="hover:text-[#ffb200] transition-colors">Developer Docs</a></li>
                  <li><a href="https://www.stay22.com/faqs" className="hover:text-[#ffb200] transition-colors">FAQs</a></li>
                </ul>
              </li>

              {/* Column 4: Company */}
              <li className="flex flex-col gap-4 md:gap-6">
                <span className="text-[12px] md:text-[13px] uppercase tracking-[0.15em] text-[#ffb200] font-semibold">
                  Company
                </span>
                <ul className="flex flex-col gap-2.5 list-none m-0 p-0 text-xs md:text-sm">
                  <li><a href="https://www.stay22.com/careers" className="hover:text-[#ffb200] transition-colors">Careers</a></li>
                  <li><a href="https://www.stay22.com/privacy" className="hover:text-[#ffb200] transition-colors">Privacy</a></li>
                  <li><a href="https://www.stay22.com/terms" className="hover:text-[#ffb200] transition-colors">Affiliate Partner Terms</a></li>
                  <li><a href="https://www.stay22.com/about-stay22" className="hover:text-[#ffb200] transition-colors">About</a></li>
                  <li><a href="https://www.stay22.com/contact" className="hover:text-[#ffb200] transition-colors">Contact us</a></li>
                </ul>
              </li>
            </ul>
          </nav>

          {/* Social Links, Language Switcher, and Animations Control */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pt-6 border-t border-white/10 text-xs text-white/60">
            {/* Follow Us */}
            <div className="flex items-center gap-4">
              <span className="font-medium text-white/80">Follow us</span>
              <div className="flex items-center gap-2">
                {/* Instagram */}
                <a
                  href="https://www.instagram.com/get.stay22/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#ffb200] hover:text-[#262222] transition-colors flex items-center justify-center text-white"
                >
                  <svg width="15" height="15" viewBox="0 0 20 20" fill="none">
                    <path d="M10 1.80078C12.6719 1.80078 12.9883 1.8125 14.0391 1.85937C15.0156 1.90234 15.543 2.06641 15.8945 2.20313C16.3594 2.38281 16.6953 2.60156 17.043 2.94922C17.3945 3.30078 17.6094 3.63281 17.7891 4.09766C17.9258 4.44922 18.0898 4.98047 18.1328 5.95312C18.1797 7.00781 18.1914 7.32422 18.1914 9.99219C18.1914 12.6641 18.1797 12.9805 18.1328 14.0313C18.0898 15.0078 17.9258 15.5352 17.7891 15.8867C17.6094 16.3516 17.3906 16.6875 17.043 17.0352C16.6914 17.3867 16.3594 17.6016 15.8945 17.7813C15.543 17.918 15.0117 18.082 14.0391 18.125C12.9844 18.1719 12.668 18.1836 10 18.1836C7.32813 18.1836 7.01172 18.1719 5.96094 18.125C4.98438 18.082 4.45703 17.918 4.10547 17.7813C3.64063 17.6016 3.30469 17.3828 2.95703 17.0352C2.60547 16.6836 2.39063 16.3516 2.21094 15.8867C2.07422 15.5352 1.91016 15.0039 1.86719 14.0313C1.82031 12.9766 1.80859 12.6602 1.80859 9.99219C1.80859 7.32031 1.82031 7.00391 1.86719 5.95312C1.91016 4.97656 2.07422 4.44922 2.21094 4.09766C2.39063 3.63281 2.60938 3.29688 2.95703 2.94922C3.30859 2.59766 3.64063 2.38281 4.10547 2.20313C4.45703 2.06641 4.98828 1.90234 5.96094 1.85937C7.01172 1.8125 7.32813 1.80078 10 1.80078ZM10 0C7.28516 0 6.94531 0.0117187 5.87891 0.0585938C4.81641 0.105469 4.08594 0.277344 3.45313 0.523438C2.79297 0.78125 2.23438 1.12109 1.67969 1.67969C1.12109 2.23438 0.78125 2.79297 0.523438 3.44922C0.277344 4.08594 0.105469 4.8125 0.0585938 5.875C0.0117188 6.94531 0 7.28516 0 10C0 12.7148 0.0117188 13.0547 0.0585938 14.1211C0.105469 15.1836 0.277344 15.9141 0.523438 16.5469C0.78125 17.207 1.12109 17.7656 1.67969 18.3203C2.23438 18.875 2.79297 19.2188 3.44922 19.4727C4.08594 19.7188 4.8125 19.8906 5.875 19.9375C6.94141 19.9844 7.28125 19.9961 9.99609 19.9961C12.7109 19.9961 13.0508 19.9844 14.1172 19.9375C15.1797 19.8906 15.9102 19.7188 16.543 19.4727C17.1992 19.2188 17.7578 18.875 18.3125 18.3203C18.8672 17.7656 19.2109 17.207 19.4648 16.5508C19.7109 15.9141 19.8828 15.1875 19.9297 14.125C19.9766 13.0586 19.9883 12.7188 19.9883 10.0039C19.9883 7.28906 19.9766 6.94922 19.9297 5.88281C19.8828 4.82031 19.7109 4.08984 19.4648 3.45703C19.2188 2.79297 18.8789 2.23438 18.3203 1.67969C17.7656 1.125 17.207 0.78125 16.5508 0.527344C15.9141 0.28125 15.1875 0.109375 14.125 0.0625C13.0547 0.0117188 12.7148 0 10 0Z" fill="currentColor" />
                    <path d="M10 4.86328C7.16406 4.86328 4.86328 7.16406 4.86328 10C4.86328 12.8359 7.16406 15.1367 10 15.1367C12.8359 15.1367 15.1367 12.8359 15.1367 10C15.1367 7.16406 12.8359 4.86328 10 4.86328ZM10 13.332C8.16016 13.332 6.66797 11.8398 6.66797 10C6.66797 8.16016 8.16016 6.66797 10 6.66797C11.8398 6.66797 13.332 8.16016 13.332 10C13.332 11.8398 11.8398 13.332 10 13.332Z" fill="currentColor" />
                    <path d="M16.5391 4.66016C16.5391 5.32422 16 5.85938 15.3398 5.85938C14.6758 5.85938 14.1406 5.32031 14.1406 4.66016C14.1406 3.99609 14.6797 3.46094 15.3398 3.46094C16 3.46094 16.5391 4 16.5391 4.66016Z" fill="currentColor" />
                  </svg>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://ca.linkedin.com/company/stay22"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#ffb200] hover:text-[#262222] transition-colors flex items-center justify-center text-white"
                >
                  <svg width="15" height="15" viewBox="0 0 20 20" fill="none">
                    <path d="M18.5195 0H1.47656C0.660156 0 0 0.644531 0 1.44141V18.5547C0 19.3516 0.660156 20 1.47656 20H18.5195C19.3359 20 20 19.3516 20 18.5586V1.44141C20 0.644531 19.3359 0 18.5195 0ZM5.93359 17.043H2.96484V7.49609H5.93359V17.043ZM4.44922 6.19531C3.49609 6.19531 2.72656 5.42578 2.72656 4.47656C2.72656 3.52734 3.49609 2.75781 4.44922 2.75781C5.39844 2.75781 6.16797 3.52734 6.16797 4.47656C6.16797 5.42188 5.39844 6.19531 4.44922 6.19531ZM17.043 17.043H14.0781V12.4023C14.0781 11.2969 14.0586 9.87109 12.5352 9.87109C10.9922 9.87109 10.7578 11.0781 10.7578 12.3242V17.043H7.79688V7.49609H10.6406V8.80078H10.6797C11.0742 8.05078 12.043 7.25781 13.4844 7.25781C16.4883 7.25781 17.043 9.23438 17.043 11.8047V17.043Z" fill="currentColor" />
                  </svg>
                </a>

                {/* TikTok */}
                <a
                  href="https://www.tiktok.com/@getstay22"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="TikTok"
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#ffb200] hover:text-[#262222] transition-colors flex items-center justify-center text-white"
                >
                  <svg width="15" height="15" viewBox="0 0 20 20" fill="none">
                    <path d="M14.2284 0H10.8578V13.6232C10.8578 15.2464 9.56146 16.5797 7.94819 16.5797C6.33492 16.5797 5.03854 15.2464 5.03854 13.6232C5.03854 12.029 6.30611 10.7246 7.86178 10.6667V7.24639C4.43357 7.30433 1.66797 10.1159 1.66797 13.6232C1.66797 17.1594 4.49118 20 7.97701 20C11.4628 20 14.286 17.1304 14.286 13.6232V6.63767C15.5536 7.56522 17.1092 8.11594 18.7513 8.14495V4.72464C16.2162 4.63768 14.2284 2.55072 14.2284 0Z" fill="currentColor" />
                  </svg>
                </a>

                {/* Facebook */}
                <a
                  href="https://www.facebook.com/getstay22/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#ffb200] hover:text-[#262222] transition-colors flex items-center justify-center text-white"
                >
                  <svg width="15" height="15" viewBox="0 0 20 20" fill="none">
                    <path d="M10 0C4.4772 0 0 4.4772 0 10C0 14.6896 3.2288 18.6248 7.5844 19.7056V13.056H5.5224V10H7.5844V8.6832C7.5844 5.2796 9.1248 3.702 12.4664 3.702C13.1 3.702 14.1932 3.8264 14.6404 3.9504V6.7204C14.4044 6.6956 13.9944 6.6832 13.4852 6.6832C11.8456 6.6832 11.212 7.3044 11.212 8.9192V10H14.4784L13.9172 13.056H11.212V19.9268C16.1636 19.3288 20.0004 15.1128 20.0004 10C20 4.4772 15.5228 0 10 0Z" fill="currentColor" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Language & Utilities */}
            <div className="flex items-center gap-6">
              <a href="https://mill3.studio" target="_blank" rel="noreferrer" className="text-white/40 hover:text-white transition-colors">
                Credits
              </a>

              <div className="flex items-center gap-1.5 font-medium">
                <a href="https://www.stay22.com/fr/" className="text-white/40 hover:text-white transition-colors">Fr</a>
                <span className="text-white/20">/</span>
                <span className="text-white">En</span>
              </div>

              <button
                type="button"
                onClick={() => setAnimationsPaused(!animationsPaused)}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 text-white text-xs font-semibold transition-colors"
              >
                {animationsPaused ? (
                  <>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polygon points="5 3 19 12 5 21 5 3" />
                    </svg>
                    <span>Play Animations</span>
                  </>
                ) : (
                  <>
                    <svg width="12" height="12" viewBox="0 0 14 14" fill="currentColor">
                      <rect x="2.5" y="1" width="2.5" height="12" />
                      <rect x="8.5" y="1" width="2.5" height="12" />
                    </svg>
                    <span>Animations</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Lower Section: Ask AI & Newsletter */}
          <div className="pt-8 border-t border-white/10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Ask AI Section */}
            <div className="flex flex-col gap-3">
              <p className="text-sm font-medium text-white/90">
                Ask AI how Stay22 turns your audience into revenue
              </p>
              <div className="flex items-center gap-3">
                {/* Claude */}
                <a
                  href="https://claude.ai/new?q=Tell%20me%20about%20stay22"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Ask Claude"
                  className="hover:scale-105 transition-transform"
                >
                  <svg width="48" height="48" viewBox="0 0 58 58" fill="none">
                    <rect width="58" height="58" rx="12" fill="#D77655" />
                    <path d="M15.0236 36.5901L24.0751 31.5145L24.2273 31.0737L24.0751 30.8285H23.634L22.1213 30.7353L16.9494 30.5956L12.464 30.4094L8.11844 30.1765L7.02505 29.9437L6 28.5933L6.10561 27.9197L7.02505 27.3019L8.34209 27.4168L11.2526 27.6155L15.62 27.9166L18.7883 28.1029L23.4818 28.5902H24.2273L24.3329 28.2891L24.0782 28.1029L23.8794 27.9166L19.3598 24.8557L14.4676 21.621L11.9049 19.7584L10.5195 18.8147L9.82065 17.9299L9.51935 15.9991L10.7774 14.6145L12.4671 14.7294L12.8989 14.8442L14.6104 16.1605L18.2665 18.9885L23.0407 22.5026L23.7396 23.0831L24.0192 22.8845L24.0533 22.7448L23.7396 22.2201L21.1428 17.5295L18.3721 12.7581L17.1389 10.7807L16.8127 9.59482C16.6978 9.10744 16.614 8.69767 16.614 8.19787L18.0459 6.25456L18.838 6L20.7483 6.25456L21.5528 6.95303L22.7394 9.66622L24.6622 13.9378L27.6441 19.746L28.517 21.4689L28.9829 23.0645L29.1569 23.5519H29.4582V23.2725L29.7036 20.0005L30.1571 15.9835L30.5981 10.8148L30.7504 9.35889L31.471 7.61425L32.903 6.67054L34.0212 7.20448L34.9406 8.52072L34.8133 9.37131L34.2666 12.9227L33.1949 18.4856L32.496 22.2108H32.903L33.3689 21.7452L35.2544 19.2431L38.4227 15.2851L39.8205 13.7143L41.4513 11.9789L42.4981 11.1532H44.4767L45.9336 13.3169L45.2812 15.552L43.2436 18.1348L41.5538 20.3234L39.1309 23.5829L37.6182 26.1906L37.758 26.3986L38.1183 26.3644L43.5915 25.2003L46.5486 24.6664L50.0772 24.061L51.6738 24.806L51.8478 25.5635L51.2203 27.1126L47.4463 28.0439L43.0199 28.9286L36.4285 30.487L36.3478 30.546L36.441 30.6608L39.4105 30.9402L40.6809 31.0085H43.7903L49.5803 31.44L51.093 32.4396L52 33.6627L51.8478 34.594L49.5181 35.7799L46.3746 35.0348L39.0377 33.2902L36.5217 32.6631H36.1738V32.8711L38.2705 34.92L42.1129 38.3875L46.9244 42.8577L47.1698 43.9629L46.5517 44.8352L45.8994 44.7421L41.6718 41.5632L40.0411 40.1321L36.3478 37.0247H36.1024V37.3507L36.9535 38.5955L41.4482 45.3474L41.6811 47.418L41.355 48.0916L40.1902 48.4983L38.9104 48.2655L36.2794 44.5744L33.5646 40.4177L31.3747 36.6925L31.1076 36.8447L29.8154 50.7552L29.2097 51.4661L27.8119 52L26.647 51.1153L26.0289 49.6842L26.647 46.8561L27.3925 43.1651L27.9982 40.2315L28.5449 36.587L28.8711 35.3763L28.8493 35.2956L28.5822 35.3297L25.8332 39.1015L21.6522 44.7483L18.3441 48.2872L17.552 48.6008L16.1791 47.8899L16.3064 46.6202L17.0737 45.4902L21.6522 39.6696L24.4137 36.0624L26.1966 33.9794L26.1842 33.6782H26.0786L13.9178 41.5694L11.7527 41.8488L10.8209 40.9765L10.9358 39.5454L11.3769 39.0798L15.0329 36.5653L15.0205 36.5777L15.0236 36.5901Z" fill="#FCF2EE" />
                  </svg>
                </a>

                {/* Perplexity */}
                <a
                  href="https://www.perplexity.ai/search?q=Tell%20me%20about%20stay22"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Ask Perplexity"
                  className="hover:scale-105 transition-transform"
                >
                  <svg width="48" height="48" viewBox="0 0 58 58" fill="none">
                    <rect width="58" height="58" rx="12" fill="#1F1F1F" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M41.6043 10V21.514H46V37.8983H41.2481V48L29.8549 38.1928V47.9224H28.0885V38.1818L16.6823 48V37.7638H12V21.381H16.6693V10L28.0885 20.2822V10.3008H29.8532V20.5767L41.6043 10ZM29.8549 24.3197V35.9081L39.4817 44.1953V32.8633L29.8549 24.3197ZM28.0755 24.193L18.4487 32.7398V44.1953L28.0755 35.9081V24.1946V24.193ZM41.2481 36.1947H44.2336V23.2193H31.3638L41.2481 31.9909V36.1947ZM26.7058 23.0847H13.7648V36.0601H16.679V31.9814L26.7042 23.0831L26.7058 23.0847ZM18.4357 13.9203V21.3778H26.7171L18.4357 13.9203ZM39.8379 13.9203L31.5565 21.3778H39.8379V13.9203Z" fill="white" />
                  </svg>
                </a>

                {/* ChatGPT / OpenAI */}
                <a
                  href="https://chatgpt.com/?prompt=Tell%20me%20about%20stay22"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Ask ChatGPT"
                  className="hover:scale-105 transition-transform"
                >
                  <svg width="48" height="48" viewBox="0 0 58 58" fill="none">
                    <rect width="58" height="58" rx="12" fill="#74AA9C" />
                    <path d="M48.1645 25.5997C49.1532 22.6716 48.8127 19.464 47.2317 16.8006C44.8539 12.7155 40.0739 10.6138 35.4055 11.6029C33.3287 9.29426 30.345 7.98139 27.2168 8.0002C22.445 7.98945 18.211 11.021 16.743 15.5012C13.6775 16.1207 11.0315 18.014 9.48306 20.6976C7.0876 24.7719 7.63369 29.9078 10.834 33.4016C9.84531 36.3297 10.1858 39.5373 11.7669 42.2007C14.1446 46.2858 18.9246 48.3875 23.593 47.3984C25.6684 49.7071 28.6536 51.0199 31.7817 50.9998C36.5563 51.0119 40.7916 47.9776 42.2596 43.4934C45.3251 42.8739 47.9711 40.9806 49.5195 38.297C51.9123 34.2227 51.3648 29.0908 48.1659 25.597L48.1645 25.5997ZM31.7844 48.1899C29.8738 48.1926 28.023 47.5328 26.5563 46.3248C26.6231 46.2898 26.7388 46.2267 26.8137 46.181L35.4913 41.2359C35.9353 40.9873 36.2076 40.521 36.2049 40.0171V27.9459L39.8723 30.0355C39.9118 30.0543 39.9377 30.0919 39.9431 30.1349V40.1313C39.9377 44.5765 36.2893 48.1805 31.7844 48.1899ZM14.2386 40.7951C13.2812 39.1638 12.9367 37.2516 13.2649 35.3958C13.3289 35.4334 13.4419 35.502 13.5223 35.5477L22.1998 40.4928C22.6397 40.7467 23.1844 40.7467 23.6257 40.4928L34.2194 34.4565V38.6357C34.2221 38.6787 34.2017 38.7203 34.1676 38.7472L25.3961 43.7447C21.489 45.9646 16.4992 44.645 14.2399 40.7951H14.2386ZM11.9548 22.1045C12.9081 20.4705 14.4129 19.2208 16.2051 18.5717C16.2051 18.6456 16.201 18.776 16.201 18.8673V28.7589C16.1982 29.2615 16.4706 29.7278 16.9132 29.9764L27.5069 36.0113L23.8395 38.1008C23.8027 38.125 23.7564 38.1291 23.7156 38.1116L14.9426 33.11C11.0437 30.8821 9.7064 25.9598 11.9534 22.1058L11.9548 22.1045ZM42.0867 29.0236L31.493 22.9874L35.1604 20.8991C35.1972 20.8749 35.2435 20.8709 35.2843 20.8884L44.0572 25.8859C47.963 28.1125 49.3016 33.0429 47.0451 36.8968C46.0904 38.5282 44.587 39.7779 42.7962 40.4283V30.2411C42.8003 29.7385 42.5293 29.2736 42.088 29.0236H42.0867ZM45.7364 23.6028C45.6724 23.5638 45.5593 23.4967 45.479 23.451L36.8014 18.5059C36.3615 18.2519 35.8168 18.2519 35.3756 18.5059L24.7819 24.5421V20.363C24.7791 20.32 24.7996 20.2783 24.8336 20.2514L33.6052 15.2579C37.5123 13.034 42.5075 14.3576 44.7599 18.2143C45.7119 19.8429 46.0564 21.7497 45.7336 23.6028H45.7364ZM22.7882 31.0514L19.1194 28.9618C19.0799 28.943 19.054 28.9054 19.0486 28.8624V18.866C19.0513 14.4154 22.7105 10.8087 27.2209 10.8114C29.1288 10.8114 30.9755 11.4725 32.4422 12.6765C32.3754 12.7115 32.261 12.7746 32.1848 12.8203L23.5072 17.7654C23.0632 18.014 22.7909 18.479 22.7936 18.9829L22.7882 31.0487V31.0514ZM24.7805 26.8131L29.4993 24.1242L34.218 26.8118V32.1882L29.4993 34.8758L24.7805 32.1882V26.8131Z" fill="white" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Newsletter Subscription */}
            <div className="flex flex-col gap-3">
              <p className="text-sm font-medium text-white/90">
                Subscribe for more Updates
              </p>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Thank you for subscribing to Stay22 updates!");
                }}
                className="relative flex items-center max-w-md w-full"
              >
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  className="w-full bg-[#181515] border border-white/20 rounded-full py-3.5 pl-6 pr-14 text-sm text-[#f2e4d8] placeholder:text-white/40 focus:outline-none focus:border-[#ffb200] transition-colors"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="absolute right-1.5 w-10 h-10 rounded-full bg-[#ffb200] text-[#262222] flex items-center justify-center hover:bg-[#ffa000] hover:scale-105 active:scale-95 transition-all shadow-md cursor-pointer"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
              </form>
            </div>
          </div>

          {/* Monumental 1392px STAY22 Brand Logo Wordmark */}
          <figure className="w-full mt-8 md:mt-12 pointer-events-auto">
            <a href="/" className="block w-full text-current hover:text-[#ffb200] transition-colors" title="Stay 22">
              <svg width="1392" height="283" viewBox="0 0 1392 283" fill="none" className="w-full h-auto">
                <path d="M1281.31 146.037C1307.06 130.28 1330.51 116.06 1330.51 88.1966C1330.51 66.6744 1313.79 50.5329 1289.58 50.5329C1263.25 50.5329 1246.92 68.5961 1242.11 90.1182C1241.73 91.8476 1240.38 92.6163 1238.65 92.232L1188.5 81.0866C1186.77 80.7023 1186 79.5493 1186.39 77.6277C1195.61 37.6581 1227.32 0.186523 1292.08 0.186523C1350.68 0.186523 1392 31.8932 1392 85.6985C1392 133.547 1358.95 159.104 1331.08 176.399C1308.6 190.042 1282.27 206.184 1282.27 216.945C1282.27 222.325 1286.31 226.361 1291.88 226.361H1388.54C1390.27 226.361 1391.42 227.514 1391.42 229.243V274.209C1391.42 275.939 1390.27 277.091 1388.54 277.091H1190.04C1188.31 277.091 1187.15 275.362 1187.15 272.287C1188.31 204.262 1244.61 168.712 1281.31 146.037Z" fill="currentColor" />
                <path d="M1043.06 146.037C1068.81 130.28 1092.25 116.06 1092.25 88.1966C1092.25 66.6744 1075.53 50.5329 1051.32 50.5329C1024.99 50.5329 1008.66 68.5961 1003.86 90.1182C1003.47 91.8476 1002.13 92.6163 1000.4 92.232L950.242 81.0866C948.513 80.7023 947.744 79.5493 948.128 77.6277C957.352 37.6581 989.059 0.186523 1053.82 0.186523C1112.43 0.186523 1153.74 31.8932 1153.74 85.6985C1153.74 133.547 1120.69 159.104 1092.83 176.399C1070.34 190.042 1044.02 206.184 1044.02 216.945C1044.02 222.325 1048.05 226.361 1053.63 226.361H1150.28C1152.01 226.361 1153.16 227.514 1153.16 229.243V274.209C1153.16 275.939 1152.01 277.091 1150.28 277.091H951.779C950.05 277.091 948.897 275.362 948.897 272.287C950.05 204.262 1006.35 168.712 1043.06 146.037Z" fill="currentColor" />
                <path d="M800.465 93.97C806.998 105.884 821.026 105.884 827.367 93.7779L873.486 8.07375C874.255 6.53645 875.408 5.95996 876.945 5.95996H938.052C940.358 5.95996 941.319 7.30509 940.166 9.41887L848.313 168.721C845.623 173.525 844.278 178.137 844.278 183.325V274.026C844.278 275.755 843.125 276.908 841.395 276.908H786.053C784.323 276.908 783.17 275.755 783.17 274.026V183.325C783.17 178.137 781.825 173.525 779.135 168.721L687.282 9.41887C686.129 7.30509 687.089 5.95996 689.395 5.95996H750.695C752.232 5.95996 753.385 6.53645 754.154 8.07375L800.465 93.97Z" fill="currentColor" />
                <path d="M616.232 5.95996C617.769 5.95996 618.923 6.53628 619.499 8.26562L713.659 273.642C714.235 275.563 713.465 276.908 711.352 276.908H653.703C652.166 276.908 651.013 276.331 650.437 274.602L635.832 230.789C633.334 223.103 627.954 219.26 619.691 219.26H536.101C528.03 219.26 522.458 223.103 520.152 230.789L505.547 274.602C504.971 276.331 503.818 276.908 502.281 276.908H444.632C442.519 276.908 441.749 275.563 442.326 273.642L536.293 8.26562C536.87 6.53644 538.023 5.95996 539.56 5.95996H616.232ZM588.367 86.8037C585.485 76.2348 570.111 76.2348 567.229 86.8037L544.362 158.672C541.864 167.511 547.821 174.43 556.66 174.43H599.128C608.16 174.43 613.925 167.511 611.427 158.672L588.367 86.8037Z" fill="currentColor" />
                <path d="M236.609 8.84238C236.609 7.30509 237.955 5.95996 239.492 5.95996H462.592C464.129 5.95996 465.474 7.30509 465.474 8.84238V54.3847C465.474 55.922 464.129 57.2671 462.592 57.2671H397.257C388.417 57.2671 381.691 63.8006 381.691 72.8322V274.026C381.691 275.563 380.346 276.908 378.809 276.908H323.274C321.737 276.908 320.392 275.563 320.392 274.026V72.8322C320.392 63.9928 313.858 57.2671 304.827 57.2671H239.492C237.955 57.2671 236.609 55.922 236.609 54.3847V8.84238Z" fill="currentColor" />
                <path d="M114.742 282.67C51.7126 282.67 15.9705 251.155 0.213269 205.037C-0.363215 203.307 0.213268 201.962 2.13488 201.385L51.7126 186.589C53.2499 186.013 54.9793 186.397 55.5558 188.318C64.0109 215.029 85.533 233.284 115.895 233.284C142.221 233.284 165.664 222.523 165.664 199.848C165.664 185.628 156.441 177.173 139.915 173.138L74.3877 157.188C28.6532 146.235 6.36244 115.873 6.36244 81.4765C6.36244 32.6675 52.8656 0 111.859 0C168.355 0 206.595 29.0164 221.007 70.139C221.583 72.0606 220.623 73.2136 219.085 73.7901L171.621 89.9317C170.084 90.5082 168.547 89.7395 167.97 88.2022C161.821 69.7547 145.487 49.0012 112.628 49.0012C86.8782 49.0012 67.8542 62.0682 67.8542 79.3628C67.8542 92.6219 79.1917 101.461 93.0273 104.728L157.978 120.101C198.524 129.901 226.964 154.498 226.964 195.428C226.964 250.195 177.386 282.67 114.742 282.67Z" fill="currentColor" />
              </svg>
            </a>
          </figure>
        </div>
      </footer>

      {/* Rive Easter Egg below Footer */}
      <div className="easter-egg relative z-10 w-full overflow-hidden h-36 md:h-52 bg-[#f2e4d8] pointer-events-none">
        <RiveAnimation
          src="/stay22/footer.riv"
          stateMachines="State Machine 1"
          fit={Fit.Cover}
          autoplay={true}
          className="w-full h-full"
        />
      </div>
    </>
  );
}
