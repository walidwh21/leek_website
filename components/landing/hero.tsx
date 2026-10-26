import { APK_DOWNLOAD_URL, getAndroidInstallAnchorProps } from "@/lib/site";
import { ApkQr } from "./apk-qr";
import { PhoneHomeMock } from "./phone-mocks";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-leek-950 text-white">
      <div
        className="pointer-events-none absolute inset-0 animate-shimmer-bg opacity-90"
        style={{
          backgroundImage:
            "linear-gradient(115deg, #064e3b 0%, #065f46 35%, #047857 55%, #064e3b 100%)",
        }}
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(190,242,100,0.18),transparent_45%),radial-gradient(circle_at_85%_10%,rgba(52,211,153,0.12),transparent_40%),radial-gradient(circle_at_70%_80%,rgba(250,204,21,0.08),transparent_35%)]" />

      {/* Floating groceries */}
      <div
        className="pointer-events-none absolute left-[6%] top-[18%] hidden text-5xl opacity-25 [--rotate:-8deg] animate-float-slow md:block"
        aria-hidden
      >
        🥬
      </div>
      <div
        className="pointer-events-none absolute right-[8%] top-[22%] hidden text-4xl opacity-20 animate-float-delayed md:block"
        aria-hidden
      >
        🍅
      </div>
      <div
        className="pointer-events-none absolute bottom-[20%] left-[12%] hidden text-3xl opacity-15 animate-float-delayed lg:block"
        aria-hidden
      >
        🥛
      </div>
      <div
        className="pointer-events-none absolute bottom-[18%] right-[14%] hidden text-4xl opacity-18 animate-float-slow lg:block"
        aria-hidden
      >
        🍌
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8 lg:py-20">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-leek-accent-bright/95">
            Casablanca · Dark-store grocery
          </p>
          <h1 className="mt-4 text-balance text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
            Groceries delivered in minutes.
          </h1>
          <p className="mt-5 max-w-xl text-lg text-emerald-100/95 sm:text-xl">
            LEEK brings your everyday essentials to your door in{" "}
            <span className="font-semibold text-white">15–30 minutes</span> at the best prices in{" "}
            <span className="font-semibold text-white">Casablanca</span>.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <a
              {...getAndroidInstallAnchorProps(APK_DOWNLOAD_URL)}
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-leek-accent px-7 py-4 text-base font-bold text-leek-950 shadow-lg shadow-black/20 transition hover:bg-leek-accent-bright"
            >
              <AndroidIcon className="size-6" />
              Download Android APK
            </a>
            <span className="inline-flex items-center justify-center rounded-2xl border border-white/25 bg-white/5 px-6 py-4 text-sm font-semibold text-white/90 backdrop-blur-sm">
              Coming Soon on iPhone
            </span>
          </div>

          <p className="mt-4 text-sm text-emerald-100/70">
            Fast · Simple · Modern — built for how you actually shop.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-8">
            <div className="flex items-center gap-4 rounded-2xl border border-white/15 bg-white/5 p-4 backdrop-blur-sm">
              <div className="rounded-xl bg-white p-2 shadow-sm">
                <ApkQr size={112} />
              </div>
              <div className="text-sm">
                <p className="font-semibold text-white">Scan &amp; install</p>
                <p className="mt-1 text-emerald-100/80">Opens the Android APK on your phone.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end">
          <div className="relative flex w-full max-w-md justify-center lg:max-w-none">
            <div
              className="absolute inset-x-12 -bottom-8 h-32 rounded-[50%] bg-black/25 blur-2xl"
              aria-hidden
            />
            <PhoneHomeMock />
            <div className="absolute -right-4 top-1/4 z-10 hidden translate-x-[20%] sm:block lg:right-0 lg:translate-x-[45%]">
              <MiniCardShell
                emoji="🛒"
                title="Basket ready"
                subtitle="Checkout in seconds"
                className="animate-float-delayed w-44"
              />
            </div>
            <div className="absolute -left-6 top-1/3 z-10 hidden -translate-x-[10%] sm:block lg:-left-4 lg:-translate-x-[30%]">
              <MiniCardShell
                emoji="⚡"
                title="15–30 min"
                subtitle="Local delivery"
                className="animate-float-slow w-40 [--rotate:-4deg]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AndroidIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M17.6 9.48 19 6.92a.54.54 0 0 0-.92-.54l-1.44 2.62A11.71 11.71 0 0 0 12 7.5c-2.04 0-3.93.53-5.61 1.45L5.05 6.38a.54.54 0 1 0-.92.54l1.42 2.56A11.94 11.94 0 0 0 3 15.92v2.58h1.92v-.04c0-.8.63-1.46 1.42-1.46h14.32c.79 0 1.42.66 1.42 1.46v.04H21V15.9c0-2.94-1.35-5.54-3.42-7.43ZM8.76 13.73a1.06 1.06 0 1 1 0-2.12 1.06 1.06 0 0 1 0 2.12Zm6.48 0a1.06 1.06 0 1 1 0-2.12 1.06 1.06 0 0 1 0 2.12Z" />
    </svg>
  );
}

function MiniCardShell({
  emoji,
  title,
  subtitle,
  className,
}: {
  emoji: string;
  title: string;
  subtitle: string;
  className?: string;
}) {
  return (
    <div
      className={`rounded-2xl border border-white/20 bg-white/10 p-3 text-xs text-white shadow-lg backdrop-blur-md ${className ?? ""}`}
    >
      <div className="flex items-start gap-2">
        <span className="text-lg" aria-hidden>
          {emoji}
        </span>
        <div>
          <p className="font-bold">{title}</p>
          <p className="mt-0.5 text-[11px] text-emerald-100/85">{subtitle}</p>
        </div>
      </div>
    </div>
  );
}
