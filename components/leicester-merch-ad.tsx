import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"

const LCFC_STORE_URL = "https://shop.lcfc.com/en"
const LCFC_CREST_SRC =
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1793703415663.jpg-uh5UIRtg0dkjDa2ikkVwGkZederVMD.jpeg"
const LCFC_HOME_SHIRT_SRC =
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1793703421125.jpg-ODlVLuMSO82RL5A3yIRRE5MGL2umyb.jpeg"

export function LeicesterMerchAd() {
  return (
    <section
      aria-labelledby="leicester-merch-ad-heading"
      className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8"
    >
      <div className="relative isolate overflow-hidden rounded-3xl border border-blue-200/20 bg-gradient-to-br from-blue-950 via-blue-800 to-blue-950 text-white shadow-2xl shadow-blue-950/25">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-blue-300/10"
        />
        <div className="relative grid items-center gap-6 p-5 sm:gap-8 sm:p-7 md:grid-cols-[minmax(0,1fr)_minmax(10rem,.75fr)] md:p-8 lg:grid-cols-[9rem_minmax(0,1fr)_13rem] lg:gap-10 lg:px-10">
          <div className="flex items-center justify-center gap-4 md:col-start-2 md:row-start-1 md:flex-col md:gap-5 lg:contents">
            <Image
              src={LCFC_CREST_SRC}
              alt="Leicester City Football Club crest"
              width={500}
              height={500}
              unoptimized
              className="h-24 w-24 shrink-0 rounded-full border border-white/30 bg-white p-1.5 shadow-xl sm:h-28 sm:w-28 md:h-24 md:w-24 lg:col-start-1 lg:row-start-1 lg:h-32 lg:w-32"
            />
            <Image
              src={LCFC_HOME_SHIRT_SRC}
              alt="Unsponsored 2026/27 Leicester City blue home shirt"
              width={1024}
              height={1280}
              unoptimized
              className="h-36 w-auto max-w-[45%] rounded-lg object-contain drop-shadow-xl sm:h-44 sm:max-w-none md:h-48 lg:col-start-3 lg:row-start-1 lg:h-56"
            />
          </div>
          <div className="flex flex-col items-center text-center md:col-start-1 md:row-start-1 md:items-start md:text-left lg:col-start-2 lg:row-start-1">
            <p className="inline-flex items-center rounded-full border border-white/25 bg-white/10 px-3 py-1 text-[0.65rem] font-semibold tracking-[0.18em] text-blue-50">
              ADVERTISEMENT
            </p>
            <h2
              id="leicester-merch-ad-heading"
              className="mt-4 text-balance text-2xl font-semibold tracking-tight text-white sm:text-3xl lg:text-4xl"
            >
              OFFICIAL LEICESTER CITY MERCHANDISE
            </h2>
            <p className="mt-3 text-sm leading-6 text-blue-50/90 sm:text-base">
              Discover the latest Foxes kit and merchandise.
            </p>
            <a
              className={buttonVariants({ size: "lg", className: "mt-6" })}
              href={LCFC_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              SHOP NOW <ArrowUpRight data-icon="inline-end" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
