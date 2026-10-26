import Image from "next/image";
import { CONTACT_EMAIL, SOCIAL } from "@/lib/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Image src="/leek-logo-mark.png" alt="LEEK" width={140} height={52} className="h-10 w-auto" />
            <p className="mt-4 max-w-md text-gray-600">
              FRESH. PURE. FAIR. Groceries delivered in minutes across Casablanca — built mobile-first from the dark store up.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 md:col-span-7 md:grid-cols-3">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500">Product</p>
              <ul className="mt-4 space-y-3 text-sm text-gray-700">
                <li>
                  <a href="#download" className="hover:text-leek-800">
                    Android APK
                  </a>
                </li>
                <li>
                  <a href="#app" className="hover:text-leek-800">
                    App showcase
                  </a>
                </li>
                <li>
                  <span className="text-gray-400">iPhone (soon)</span>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500">Company</p>
              <ul className="mt-4 space-y-3 text-sm text-gray-700">
                <li>
                  <a href="#why-leek" className="hover:text-leek-800">
                    Why LEEK
                  </a>
                </li>
                <li>
                  <a href="#how-it-works" className="hover:text-leek-800">
                    How it works
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500">Connect</p>
              <ul className="mt-4 space-y-3 text-sm text-gray-700">
                <li>
                  <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-leek-800">
                    {CONTACT_EMAIL}
                  </a>
                </li>
                <li className="flex flex-wrap gap-4">
                  <a href={SOCIAL.instagram} className="hover:text-leek-800" target="_blank" rel="noreferrer">
                    Instagram
                  </a>
                  <a href={SOCIAL.facebook} className="hover:text-leek-800" target="_blank" rel="noreferrer">
                    Facebook
                  </a>
                  <a href={SOCIAL.x} className="hover:text-leek-800" target="_blank" rel="noreferrer">
                    X
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-gray-100 pt-8 text-sm text-gray-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} LEEK. All rights reserved. Serving Casablanca, Morocco.</p>
          <p className="text-gray-400">Website for app discovery · not ecommerce</p>
        </div>
      </div>
    </footer>
  );
}
