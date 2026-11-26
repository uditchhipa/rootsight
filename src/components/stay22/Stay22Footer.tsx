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
                    By Operational Scope
                  </span>
                  <ul className="flex flex-col gap-2.5 list-none m-0 p-0 text-xs md:text-sm">
                    <li>
                      <a href="#solutions" className="hover:text-[#ffb200] transition-colors">
                        Cyber Crime Cells
                      </a>
                    </li>
                    <li>
                      <a href="#solutions" className="hover:text-[#ffb200] transition-colors">
                        State Police CID &amp; Special Bureaus
                      </a>
                    </li>
                    <li>
                      <a href="#solutions" className="hover:text-[#ffb200] transition-colors">
                        Banking &amp; Financial Services (BFSI)
                      </a>
                    </li>
                    <li>
                      <a href="#solutions" className="hover:text-[#ffb200] transition-colors">
                        Critical Telecom Infrastructure
                      </a>
                    </li>
                    <li>
                      <a href="#solutions" className="hover:text-[#ffb200] transition-colors">
                        Adversarial Red Teaming
                      </a>
                    </li>
                    <li>
                      <a href="#why-rootsight" className="hover:text-[#ffb200] transition-colors">
                        Why Rootsight
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
                  <a href="#products" className="text-white/50 text-xs md:text-sm font-medium hover:text-[#ffb200] transition-colors">
                    Platform overview
                  </a>
                  <ul className="flex flex-col gap-2.5 list-none m-0 p-0 text-xs md:text-sm">
                    <li>
                      <a href="#products" className="hover:text-[#ffb200] transition-colors">Nexus (CDR / IPDR)</a>
                    </li>
                    <li>
                      <a href="#products" className="hover:text-[#ffb200] transition-colors">Sentinel (Darknet OSINT)</a>
                    </li>
                    <li>
                      <a href="#products" className="hover:text-[#ffb200] transition-colors">Vanguard (Red Team)</a>
                    </li>
                    <li>
                      <a href="#products" className="hover:text-[#ffb200] transition-colors">Kernel (Binary Sandbox)</a>
                    </li>
                    <li>
                      <a href="#products" className="hover:text-[#ffb200] transition-colors">Trace (Geo-Temporal GIS)</a>
                    </li>
                    <li>
                      <a href="#products" className="hover:text-[#ffb200] transition-colors">Sovereign (Air-Gapped Vault)</a>
                    </li>
                  </ul>
                </div>
              </li>

              {/* Column 3: Company */}
              <li className="flex flex-col gap-4 md:gap-6">
                <span className="text-[12px] md:text-[13px] uppercase tracking-[0.15em] text-[#ffb200] font-semibold">
                  Company
                </span>
                <div className="flex flex-col gap-3">
                  <span className="text-white/50 text-xs md:text-sm font-medium">
                    Rootsight Cyber Technologies
                  </span>
                  <ul className="flex flex-col gap-2.5 list-none m-0 p-0 text-xs md:text-sm">
                    <li>
                      <a href="#about" className="hover:text-[#ffb200] transition-colors">About Us</a>
                    </li>
                    <li>
                      <a href="#team" className="hover:text-[#ffb200] transition-colors">Founders Dossier</a>
                    </li>
                    <li>
                      <a href="#case-studies" className="hover:text-[#ffb200] transition-colors">Case Studies</a>
                    </li>
                    <li>
                      <a href="#faq" className="hover:text-[#ffb200] transition-colors">Startup India (DPIIT)</a>
                    </li>
                    <li>
                      <a href="#contact" className="hover:text-[#ffb200] transition-colors">Confidential Inquiries</a>
                    </li>
                  </ul>
                </div>
              </li>

              {/* Column 4: Headquarters & Compliance */}
              <li className="flex flex-col gap-4 md:gap-6">
                <span className="text-[12px] md:text-[13px] uppercase tracking-[0.15em] text-[#ffb200] font-semibold">
                  Headquarters
                </span>
                <div className="flex flex-col gap-3 text-xs md:text-sm leading-relaxed text-white/80">
                  <p>
                    <strong className="text-white">Rootsight Cyber Technologies Pvt. Ltd.</strong><br />
                    New Delhi, India
                  </p>
                  <p className="text-white/60">
                    Recognized Startup India (DPIIT)<br />
                    100% In-Country Data Residency<br />
                    Air-Gapped &amp; On-Premises Ready
                  </p>
                  <div className="pt-2">
                    <a
                      href="mailto:contact@rootsight.in"
                      className="inline-block text-[#ffb200] hover:underline font-mono text-xs"
                    >
                      contact@rootsight.in
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </nav>

          {/* Middle Row: Social & Legal */}
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-xs text-white/60">
            <div className="flex flex-wrap items-center gap-6">
              <span>&copy; {new Date().getFullYear()} Rootsight Cyber Technologies. All rights reserved.</span>
              <a href="#" className="hover:text-[#ffb200] transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-[#ffb200] transition-colors">Terms of Engagement</a>
              <a href="#" className="hover:text-[#ffb200] transition-colors">Section 65B Compliance</a>
            </div>

            <div className="flex items-center gap-4">
              <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10 font-mono text-[11px] text-[#ffb200]">
                INDIA SOVEREIGN
              </span>
              <button
                type="button"
                onClick={() => setAnimationsPaused(!animationsPaused)}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 text-white text-xs font-semibold transition-colors cursor-pointer"
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

          {/* Lower Section: Ask AI & Intelligence Briefing Newsletter */}
          <div className="pt-8 border-t border-white/10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Ask AI Section */}
            <div className="flex flex-col gap-3">
              <p className="text-sm font-medium text-white/90">
                Ask AI how Rootsight protects critical infrastructure &amp; automates investigations
              </p>
              <div className="flex items-center gap-3">
                {/* Claude */}
                <a
                  href="https://claude.ai/new?q=Tell%20me%20about%20Rootsight%20Cyber%20Technologies"
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
                  href="https://www.perplexity.ai/search?q=Tell%20me%20about%20Rootsight%20Cyber%20Technologies"
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
                  href="https://chatgpt.com/?prompt=Tell%20me%20about%20Rootsight%20Cyber%20Technologies"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Ask ChatGPT"
                  className="hover:scale-105 transition-transform"
                >
                  <svg width="48" height="48" viewBox="0 0 58 58" fill="none">
                    <rect width="58" height="58" rx="12" fill="#74AA9C" />
                    <path d="M48.1645 25.5997C49.1532 22.6716 48.8127 19.464 47.2317 16.8006C44.8539 12.7155 40.0739 10.6138 35.4055 11.6029C33.3287 9.29426 30.345 7.98139 27.2168 8.0002C22.445 7.98945 18.211 11.021 16.743 15.5012C13.6775 16.1207 11.0315 18.014 9.48306 20.6976C7.0876 24.7719 7.63369 29.9078 10.834 33.4016C9.84531 36.3297 10.1858 39.5373 11.7669 42.2007C14.1446 46.2858 18.9246 48.3875 23.593 47.3984C25.6684 49.7071 28.6536 51.0199 31.7817 50.9998C36.5563 51.0119 40.7916 47.9776 42.2596 43.4934C45.3251 42.8739 47.9711 40.9806 49.5195 38.297C51.9123 34.2227 51.3648 29.0908 48.1659 25.597L48.1645 25.5997ZM31.7844 48.1899C29.8738 48.1926 28.023 47.5328 26.5563 46.3248C26.6231 46.2898 26.7388 46.2267 26.8137 46.181L35.4913 41.2359C35.9353 40.9873 36.2076 40.521 36.2049 40.0171V27.9459L39.8723 30.0355C39.9118 30.0543 39.9377 30.0919 39.9431 30.1349V40.1313C39.9377 44.5765 36.2893 48.1805 31.7844 48.1899ZM14.2386 40.7951C13.2812 39.1638 12.9367 37.2516 13.2649 35.3958C13.3289 35.4334 13.4419 35.502 13.5223 35.5477L22.1998 40.4928C22.6397 40.7467 23.1844 40.7467 23.6257 40.4928L34.2194 34.4565V38.6357C34.2221 38.6787 34.2017 38.7203 34.1676 38.7472L25.3961 43.7447C21.489 45.9646 16.4992 44.645 14.2399 40.7951H14.2386ZM11.9548 22.1045C12.9081 20.4705 14.4129 19.2208 16.2051 18.5717C16.2051 18.6456 16.201 18.776 16.201 18.8673V28.7589C16.1982 29.2615 16.4706 29.7278 16.9132 29.9764L27.5069 36.0113L23.8395 38.1008C23.8027 38.125 23.7564 38.1291 23.7156 38.1116L14.9426 33.11C11.0437 30.8821 9.7064 25.9598 11.9534 22.1058L11.9548 22.1045ZM42.0867 29.0236L31.493 22.9874L35.1604 20.8991C35.1972 20.8749 35.2435 20.8709 35.2843 20.8884L44.0572 25.8859C47.963 28.1125 49.3016 33.0429 47.0451 36.8968C46.0904 38.5282 44.587 39.7779 42.7962 40.4283V30.2411C42.8003 29.7385 42.5293 29.2736 42.088 29.0236H42.0867ZM45.7364 23.6028C45.6724 23.5638 45.5593 23.4967 45.479 23.451L36.8014 18.5059C36.3615 18.2519 35.8168 18.2519 35.3756 18.5059L24.7819 24.5421V20.363C24.7791 20.32 24.7996 20.2783 24.8336 20.2514L33.6052 15.2579C37.5123 13.034 42.5075 14.3576 44.7599 18.2143C45.7119 19.8429 46.0564 21.7497 45.7336 23.6028H45.7364ZM22.7882 31.0514L19.1194 28.9618C19.0799 28.943 19.054 28.9054 19.0486 28.8624V18.866C19.0513 14.4154 22.7105 10.8087 27.2209 10.8114C29.1288 10.8114 30.9755 11.4725 32.4422 12.6765C32.3754 12.7115 32.261 12.7746 32.1848 12.8203L23.5072 17.7654C23.0632 18.014 22.7909 18.479 22.7936 18.9829L22.7882 31.0487V31.0514ZM24.7805 26.8131L29.4993 24.1242L34.218 26.8118V32.1882L29.4993 34.8758L24.7805 32.1882V26.8131Z" fill="#FCF2EE" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Newsletter Subscription */}
            <div className="flex flex-col gap-3">
              <p className="text-sm font-medium text-white/90">
                Subscribe for Sovereign Threat Intelligence Briefings
              </p>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Thank you for subscribing to Rootsight Threat Intelligence updates.");
                }}
                className="relative flex items-center max-w-md w-full"
              >
                <input
                  type="email"
                  required
                  placeholder="Enter your official / agency email"
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

          {/* Monumental 1392px ROOTSIGHT Brand Logo Wordmark */}
          <figure className="w-full mt-8 md:mt-12 pointer-events-auto">
            <a href="/" className="block w-full text-current hover:text-[#ffb200] transition-colors" title="Rootsight">
              <svg width="1392" height="230" viewBox="0 0 1392 230" fill="none" className="w-full h-auto">
                <text
                  x="50%"
                  y="74%"
                  textAnchor="middle"
                  fill="currentColor"
                  className="font-heading tracking-[-0.035em] uppercase select-none font-bold"
                  style={{
                    fontFamily: "'Exposure', Georgia, serif",
                    fontSize: "205px",
                    letterSpacing: "-0.035em",
                  }}
                >
                  ROOTSIGHT
                </text>
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
