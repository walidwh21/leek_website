import { APK_DOWNLOAD_URL, EXPO_BUILD_PAGE_URL, getAndroidInstallAnchorProps } from "@/lib/site";
import { ApkQr } from "./apk-qr";

export function DownloadSection() {
  return (
    <section id="download" className="scroll-mt-28 bg-background py-20 sm:scroll-mt-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-[2rem] border border-gray-100 bg-white shadow-xl shadow-leek-950/5 ring-1 ring-gray-900/5">
          <div className="grid gap-10 p-10 lg:grid-cols-2 lg:gap-14 lg:p-14">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-leek-800">Download</p>
              <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Get LEEK on your phone in seconds
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Install the Android APK to start ordering. Prefer iPhone? We&apos;re polishing the App Store launch —
                tap below to be notified soon.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  {...getAndroidInstallAnchorProps(APK_DOWNLOAD_URL)}
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-2xl bg-leek-800 px-8 py-4 text-base font-bold text-white shadow-lg transition hover:bg-leek-600 sm:flex-none sm:min-w-[220px]"
                >
                  Download Android APK
                  <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden>
                    <path d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
                <button
                  type="button"
                  disabled
                  className="inline-flex cursor-not-allowed flex-1 items-center justify-center rounded-2xl border border-gray-200 bg-gray-50 px-8 py-4 text-base font-semibold text-gray-500 sm:flex-none"
                >
                  iOS Coming Soon
                </button>
              </div>

              <div className="mt-10 rounded-2xl bg-leek-50 p-6 ring-1 ring-leek-800/10">
                <div className="flex items-start gap-4">
                  <svg className="mt-1 size-6 shrink-0 text-leek-800" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75}>
                    <path d="M12 9v5M12 17h.01" strokeLinecap="round" />
                    <circle cx="12" cy="12" r="9" />
                  </svg>
                  <div>
                    <p className="font-bold text-gray-900">Installing from APK</p>
                    <p className="mt-2 text-sm text-gray-600">
                      On Android: allow installs from trusted sources when prompted — LEEK distributes updates via this
                      official download page.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center gap-8">
              <div className="mx-auto rounded-3xl bg-white p-6 shadow-lg ring-1 ring-gray-100 sm:mx-0">
                <p className="text-center text-sm font-bold text-gray-900">Scan to download APK</p>
                <div className="mx-auto mt-4 flex justify-center rounded-2xl bg-white p-3 ring-1 ring-gray-100">
                  <ApkQr size={200} />
                </div>
                <p className="mt-4 text-center text-xs text-gray-500">
                  Same link as the button — on Android, camera or Chrome opens it.
                </p>
                {EXPO_BUILD_PAGE_URL && EXPO_BUILD_PAGE_URL !== APK_DOWNLOAD_URL ? (
                  <p className="mt-3 text-center text-xs text-gray-500">
                    <a href={EXPO_BUILD_PAGE_URL} className="font-semibold text-leek-800 underline underline-offset-2">
                      Expo build details
                    </a>{" "}
                    (not the install file — use the button or QR above to install)
                  </p>
                ) : null}
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-gray-100 bg-gray-50 p-4 text-sm text-gray-700">
                  <p className="font-bold text-gray-900">Need help?</p>
                  <p className="mt-2">Our team responds quickly if install or permissions need a hand.</p>
                </div>
                <div className="rounded-2xl border border-gray-100 bg-gray-50 p-4 text-sm text-gray-700">
                  <p className="font-bold text-gray-900">Trust-first</p>
                  <p className="mt-2">Minimal surprises at checkout — clear fees and delivery timelines.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
