/*
From Uiverse.io by mihocsaszilard - https://uiverse.io/mihocsaszilard/rare-fox-73
MIT License, Copyright (c) mihocsaszilard (Mihocsa Szilard)
*/

"use client";

import React from "react";
import "./rare-fox-card.css";

export interface RareFoxCardProps {
  title?: string;
  ultraText?: string;
  engineTag?: string;
  cardNumber?: string;
  cardHolder?: string;
  validThru?: string;
  engineSpecs?: string;
  airgapBadge?: string;
  masterText?: string;
}

export function RareFoxCard({
  title = "Nexus",
  ultraText = "NEXUS // ULTRA",
  engineTag = "CDR & IPDR CORRELATION",
  cardNumber = "9024  8810  2408  5192",
  cardHolder = "ROOTSIGHT // TELECOM CORE",
  validThru = "11/30",
  engineSpecs = "10M+ RECS/S • <12MS",
  airgapBadge = "AIR-GAPPED",
  masterText = "mastercard",
}: RareFoxCardProps) {
  return (
    <div className="rf-card-wrapper">
      <div className="rf-main-container" title={`${title} Ultra Titanium Architecture`}>
        <div className="rf-border">
          <div className="rf-card">
            <div className="rf-shadow">
              <div className="rf-content">
                {/* Header Row */}
                <p className="rf-rev">{title}</p>
                <div className="rf-top-badges">
                  <span className="rf-ultra-text">{ultraText}</span>
                  <span className="rf-airgap-badge">{airgapBadge}</span>
                </div>

                {/* EMV Chip and Contactless Waves */}
                <div className="rf-chip-cluster">
                  <svg
                    version="1.1"
                    className="rf-chip"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    width="44px"
                    height="44px"
                    viewBox="0 0 50 50"
                    xmlSpace="preserve"
                  >
                    <image
                      width="50"
                      height="50"
                      x="0"
                      y="0"
                      href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAAABGdBTUEAALGPC/xhBQAAACBjSFJN
                      AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAB6VBMVEUAAACNcTiVeUKVeUOY
                      fEaafEeUeUSYfEWZfEaykleyklaXe0SWekSZZjOYfEWYe0WXfUWXe0WcgEicfkiXe0SVekSXekSW
                      ekKYe0a9nF67m12ZfUWUeEaXfESVekOdgEmVeUWWekSniU+VeUKVeUOrjFKYfEWliE6WeESZe0GS
                      e0WYfES7ml2Xe0WXeESUeEOWfEWcf0eWfESXe0SXfEWYekSVeUKXfEWxklawkVaZfEWWekOUekOW
                      ekSYfESZe0eXekWYfEWZe0WZe0eVeUSWeETAnmDCoWLJpmbxy4P1zoXwyoLIpWbjvXjivnjgu3bf
                      u3beunWvkFWxkle/nmDivXiWekTnwXvkwHrCoWOuj1SXe0TEo2TDo2PlwHratnKZfEbQrWvPrWua
                      fUfbt3PJp2agg0v0zYX0zYSfgkvKp2frxX7mwHrlv3rsxn/yzIPgvHfduXWXe0XuyIDzzISsjVO1
                      lVm0lFitjVPzzIPqxX7duna0lVncuHTLqGjvyIHeuXXxyYGZfUayk1iyk1e2lln1zYTEomO2llrb
                      tnOafkjFpGSbfkfZtXLhvHfkv3nqxH3mwXujhU3KqWizlFilh06khk2fgkqsjlPHpWXJp2erjVOh
                      g0yWe0SliE+XekShhEvAn2D///+gx8TWAAAARnRSTlMACVCTtsRl7Pv7+vxkBab7pZv5+ZlL/UnU
                      /f3SJCVe+Fx39naA9/75XSMh0/3SSkia+pil/KRj7Pr662JPkrbP7OLQ0JFOijI1MwAAAAFiS0dE
                      orDd34wAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQfnAg0IDx2lsiuJAAACLElEQVRIx2Ng
                      GAXkAUYmZhZWPICFmYkRVQcbOwenmzse4MbFzc6DpIGXj8PD04sA8PbhF+CFaxEU8iWkAQT8hEVg
                      OkTF/InR4eUVICYO1SIhCRMLDAoKDvFDVhUaEhwUFAjjSUlDdMiEhcOEItzdI6OiYxA6YqODIt3d
                      I2DcuDBZsBY5eVTr4xMSYcyk5BRUOXkFsBZFJTQnp6alQxgZmVloUkrKYC0qqmji2WE5EEZuWB6a
                      lKoKdi35YQUQRkFYPpFaCouKIYzi6EDitJSUlsGY5RWVRGjJLyxNy4ZxqtIqqvOxaVELQwZFZdkI
                      JVU1RSiSalAt6rUwUBdWG1CP6pT6gNqwOrgCdQyHNYR5YQFhDXj8MiK1IAeyN6aORiyBjByVTc0F
                      qBoKWpqwRCVSgilOaY2OaUPw29qjOzqLvTAchpos47u6EZyYnngUSRwpuTe6D+6qaFQdOPNLRzOM
                      1dzhRZyW+CZouHk3dWLXglFcFIflQhj9YWjJGlZcaKAVSvjyPrRQ0oQVKDAQHlYFYUwIm4gqExGm
                      BSkutaVQJeomwViTJqPK6OhCy2Q9sQBk8cY0DxjTJw0lAQWK6cOKfgNhpKK7ZMpUeF3jPa28BCET
                      amiEqJKM+X1gxvWXpoUjVIVPnwErw71nmpgiqiQGBjNzbgs3j1nus+fMndc+Cwm0T52/oNR9lsdC
                      S24ra7Tq1cbWjpXV3sHRCb1idXZ0sGdltXNxRateRwHRAACYHutzk/2I5QAAACV0RVh0ZGF0ZTpj
                      cmVhdGUAMjAyMy0wMi0xM1QwODoxNToyOSswMDowMEUnN7UAAAAldEVYdGRhdGU6bW9kaWZ5ADIw
                      MjMtMDItMTNUMDg6MTU6MjkrMDA6MDA0eo8JAAAAKHRFWHRkYXRlOnRpbWVzdGFtcAAyMDIzLTAy
                      LTEzVDA4OjE1OjI5KzAwOjAwY2+u1gAAAABJRU5ErkJggg=="
                    />
                  </svg>
                  {/* Contactless waves icon */}
                  <svg
                    className="rf-nfc"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-2.5" />
                    <path d="M5.5 17.5A6.5 6.5 0 0 0 12 6c-2.5 0-4.5 1-5.5 2.5" />
                    <path d="M2.5 20.5A10.5 10.5 0 0 0 13 2c-4.5 0-8 2-9.5 4.5" />
                  </svg>
                </div>

                {/* Subtitle / Engine Tag */}
                <div className="rf-engine-tag">
                  {engineTag}
                </div>

                {/* Embossed Card Security Number */}
                <div className="rf-card-number">
                  {cardNumber}
                </div>

                {/* Bottom Row with Holder, Expiry, Telemetry */}
                <div className="rf-bottom-row">
                  <div>
                    <div className="rf-micro-label">AUTHORIZED SYSTEM</div>
                    <div className="rf-card-holder-name">{cardHolder}</div>
                  </div>

                  <div>
                    <div className="rf-micro-label">VAL THRU</div>
                    <div className="rf-expiry-val">{validThru}</div>
                  </div>

                  <div className="rf-specs-badge">
                    {engineSpecs}
                  </div>
                </div>

                {/* Mastercard Metallic Insignia */}
                <div className="rf-master-wrapper">
                  <p className="rf-master-text">{masterText}</p>
                  <p className="rf-master rf-master-one" />
                  <p className="rf-master rf-master-two" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
