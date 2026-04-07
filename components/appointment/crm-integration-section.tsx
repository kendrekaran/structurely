const CARD_SHADOW =
  "shadow-[0_0_0_1px_rgba(0,0,0,0.08),0_1px_1px_-0.5px_rgba(51,51,51,0.05),0_3px_3px_-1.5px_rgba(51,51,51,0.05),0_6px_6px_-3px_rgba(51,51,51,0.05),0_12px_12px_-6px_rgba(51,51,51,0.05),0_24px_24px_-12px_rgba(51,51,51,0.05)]";

const crmLogosRow1 = [
  {
    key: "hubspot",
    src: "https://api.builder.io/api/v1/image/assets/TEMP/f93ac6ffb79d5a300a4c4ef80182ccea94483b0e?width=137",
    alt: "HubSpot",
    width: 68,
    height: 20,
  },
  {
    key: "boomtown",
    src: "https://api.builder.io/api/v1/image/assets/TEMP/e73721b688471710a47629827eae7e91305151fa?width=171",
    alt: "BoomTown!",
    width: 85,
    height: 20,
  },
  {
    key: "fub",
    src: "https://api.builder.io/api/v1/image/assets/TEMP/05e776bf3609e4cdc0ccc613c3a2815c0bf6da5f?width=137",
    alt: "fub",
    width: 69,
    height: 24,
  },
];

const crmLogosRow2 = [
  {
    key: "salesforce",
    src: "https://api.builder.io/api/v1/image/assets/TEMP/a2e103013277a518dde27e1a271eec5efdcb7bb4?width=114",
    alt: "Salesforce",
    width: 57,
    height: 40,
  },
  {
    key: "lp",
    src: "https://api.builder.io/api/v1/image/assets/TEMP/dbd28563bbe6efb0baa1385c2a37f556347a58f9?width=80",
    alt: "LP",
    width: 40,
    height: 40,
  },
  {
    key: "acculynx",
    svg: true,
  },
  {
    key: "marketsharp",
    src: "https://api.builder.io/api/v1/image/assets/TEMP/8638bbea97b9ae380e264ca617f444107528d9f4?width=238",
    alt: "MarketSharp",
    width: 119,
    height: 28,
  },
];

function CrmIntegrationSection() {
  return (
    <div className="px-global">
      <section id="crm-integration" className="max-w-global mx-auto border-x border-[#E5E7EB]">
        <div className="flex flex-col items-center gap-8 py-16 px-6 md:px-24">
          <div className="flex flex-col items-center gap-4">
            <div
              className={`inline-flex items-center justify-center overflow-hidden rounded-lg bg-white px-4 py-2 ${CARD_SHADOW}`}
            >
              <span className="text-center text-[12px] leading-4 font-medium text-[#646464]">
                Activity Logs + Remote Management
              </span>
            </div>

            <h2 data-reveal="words" className="max-w-[10em] text-center">
              Integrated with your CRM.
            </h2>
          </div>
        </div>

        <div className="relative border-t border-[#E5E7EB]">
          <svg
            className="absolute left-0 top-0 z-10"
            width="1"
            height="132"
            viewBox="0 0 1 132"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0.5 0L0.5 132" stroke="url(#crm-gradient)" strokeWidth="1" />
            <defs>
              <linearGradient id="crm-gradient" x1="0.5" y1="0" x2="0.5" y2="132" gradientUnits="userSpaceOnUse">
                <stop stopColor="#006FFF" />
                <stop offset="1" stopColor="#006FFF" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>

          <div className="grid grid-cols-2 sm:grid-cols-3 divide-x divide-[#E5E7EB] border-b border-[#E5E7EB]">
            {crmLogosRow1.map((logo) => (
              <div
                key={logo.key}
                className="flex items-center justify-center p-8"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.width}
                  height={logo.height}
                  style={{ width: logo.width, height: logo.height }}
                />
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-[#E5E7EB] border-b border-[#E5E7EB]">
            {crmLogosRow2.map((logo) => (
              <div
                key={logo.key}
                className="flex items-center justify-center p-8"
              >
                {logo.svg ? (
                  <svg width="122" height="20" viewBox="0 0 122 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#acculynx-clip)">
                      <path d="M50.7246 3.66759V11.1247C50.7246 11.7247 50.6103 12.1676 50.3818 12.4104C50.1532 12.6533 49.8103 12.7819 49.3389 12.7819C48.4103 12.7819 47.9675 12.2962 47.9389 11.2533V3.66759H44.7246V11.1962C44.7389 12.4819 45.1675 13.5104 45.996 14.2533C46.8103 14.9962 47.9389 15.3676 49.3532 15.3676C50.19 15.3855 51.0201 15.2146 51.7817 14.8676C52.4817 14.539 53.0246 14.039 53.396 13.3962C53.7675 12.7533 53.9532 11.9962 53.9532 11.139V3.66759H50.7246ZM29.7389 9.48187C29.7389 13.7247 32.2675 15.4962 35.1532 15.4962C37.6675 15.4962 39.5817 13.8247 39.8103 11.3819H36.6389C36.5675 12.0676 36.0103 13.0104 34.9103 12.9104C33.596 12.7962 33.1246 11.3819 33.1532 9.48187C33.1532 7.39616 33.7818 6.0533 34.9103 6.02473C35.9389 5.98187 36.5246 6.68187 36.6389 7.58187H39.8103C39.5246 5.0533 37.5817 3.46758 34.8532 3.46758C31.7817 3.48187 29.7389 5.86758 29.7389 9.48187ZM15.5246 9.48187C15.5246 13.7247 18.0532 15.4962 20.9389 15.4962C23.4532 15.4962 25.3675 13.8247 25.596 11.3819H22.4246C22.3532 12.0676 21.796 13.0104 20.696 12.9104C19.3818 12.7962 18.9103 11.3819 18.9389 9.48187C18.9389 7.39616 19.5675 6.0533 20.696 6.02473C21.7246 5.98187 22.3103 6.68187 22.4246 7.58187H25.596C25.3103 5.0533 23.3675 3.46758 20.6389 3.46758C17.5675 3.48187 15.5246 5.86758 15.5246 9.48187ZM7.79604 3.66759H4.72461L0.224609 15.2533H3.62461L4.36747 13.1962H8.18175L8.93889 15.2533H12.3246L7.79604 3.66759ZM5.32461 10.5819L6.26747 7.96758L7.22461 10.5819H5.32461ZM120.125 0.239014H120.367V19.2676H120.125V0.239014Z" fill="#24476C"/>
                      <path d="M110.367 9.42451L113.638 3.62451H109.909L108.267 6.96737L106.609 3.62451H102.895L106.167 9.42451L102.809 15.3388H106.552L108.267 11.9102L109.967 15.3388H113.724L110.367 9.42451ZM93.7523 3.66737V9.79594L90.2666 3.66737H87.1523V15.3388H90.3809V9.19594L93.8809 15.3388H96.9809V3.66737H93.7523ZM78.538 3.62451L76.6666 8.02451L74.7951 3.62451H71.2666L75.0237 11.1102V15.3388H78.3094V11.1102L82.0809 3.62451H78.538ZM63.1094 12.6817V3.66737H59.8809V15.2959H68.2666V12.6817H63.1094Z" fill="#F5863B"/>
                    </g>
                    <defs>
                      <clipPath id="acculynx-clip">
                        <rect width="121.429" height="20" fill="white"/>
                      </clipPath>
                    </defs>
                  </svg>
                ) : (
                  <img
                    src={(logo as { src: string; alt: string; width: number; height: number; key: string }).src}
                    alt={(logo as { src: string; alt: string; width: number; height: number; key: string }).alt}
                    width={(logo as { src: string; alt: string; width: number; height: number; key: string }).width}
                    height={(logo as { src: string; alt: string; width: number; height: number; key: string }).height}
                    style={{
                      width: (logo as { src: string; alt: string; width: number; height: number; key: string }).width,
                      height: (logo as { src: string; alt: string; width: number; height: number; key: string }).height,
                    }}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default CrmIntegrationSection;
