import type { JSX } from "react";
import { PhoneBrowseMock, PhoneCartMock, PhoneCheckoutMock, PhoneHomeMock } from "./phone-mocks";

const ITEMS: {
  label: string;
  desc: string;
  Mock: () => JSX.Element;
}[] = [
  {
    label: "Home",
    desc: "Personalized greeting, search, and category strips.",
    Mock: PhoneHomeMock,
  },
  {
    label: "Product browsing",
    desc: "Filters, rich cards, and fast add-to-basket patterns.",
    Mock: PhoneBrowseMock,
  },
  {
    label: "Cart",
    desc: "Clean line items, quantities, and transparent totals.",
    Mock: PhoneCartMock,
  },
  {
    label: "Checkout",
    desc: "Address, payment, and a confident place-order flow.",
    Mock: PhoneCheckoutMock,
  },
];

export function ShowcaseSection() {
  return (
    <section id="app" className="scroll-mt-28 bg-background py-20 sm:scroll-mt-24 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-leek-800">Mobile app showcase</p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            A real React Native–style experience — polished, fast, and familiar
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            The LEEK app mirrors how top grocery products behave: bold hierarchy, soft cards, and a bottom navigation
            that keeps you moving.
          </p>
        </div>

        <div className="mt-14 space-y-16 lg:space-y-24">
          {ITEMS.map((item, i) => {
            const { Mock } = item;
            return (
              <div
                key={item.label}
                className={`flex flex-col items-center gap-10 lg:gap-16 ${
                  i % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
                }`}
              >
                <div className="w-full max-w-xl lg:w-1/2">
                  <div className="inline-flex items-center gap-2 rounded-full bg-leek-50 px-3 py-1 text-xs font-bold text-leek-800 ring-1 ring-leek-800/10">
                    Screen {i + 1}
                  </div>
                  <h3 className="mt-4 text-2xl font-bold text-gray-900">{item.label}</h3>
                  <p className="mt-3 text-lg text-gray-600">{item.desc}</p>
                  <ul className="mt-6 space-y-3 text-sm text-gray-600">
                    <li className="flex gap-2">
                      <span className="mt-1 text-leek-accent" aria-hidden>
                        ●
                      </span>
                      Large touch targets, rounded surfaces, and calm whitespace.
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-1 text-leek-accent" aria-hidden>
                        ●
                      </span>
                      Green primary actions that match the LEEK brand system.
                    </li>
                  </ul>
                </div>
                <div className="flex w-full justify-center lg:w-1/2">
                  <Mock />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
