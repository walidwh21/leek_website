const STEPS = [
  {
    title: "Browse products",
    body: "Search and explore curated groceries with photos, clarity, and real availability.",
    icon: GridIcon,
  },
  {
    title: "Order instantly",
    body: "Add to basket, repeat your last shop, or jump straight to favorites — frictionless.",
    icon: ZapIcon,
  },
  {
    title: "Receive fast delivery",
    body: "Track your order live and get everything at your door in minutes across Casablanca.",
    icon: TruckIcon,
  },
] as const;

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="scroll-mt-28 bg-background py-20 sm:scroll-mt-24 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-leek-800">How it works</p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            From basket to doorstep — in three simple moves
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            LEEK is built for speed: fewer taps, smarter defaults, and delivery tuned for your neighborhood.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {STEPS.map((step, idx) => (
            <div
              key={step.title}
              className="group relative overflow-hidden rounded-3xl border border-gray-100 bg-white p-8 shadow-sm transition hover:border-leek-800/15 hover:shadow-lg"
            >
              <span className="absolute right-6 top-6 text-6xl font-black text-leek-50 transition group-hover:text-leek-100">
                {(idx + 1).toString().padStart(2, "0")}
              </span>
              <div className="relative">
                <div className="inline-flex size-12 items-center justify-center rounded-2xl bg-leek-50 text-leek-800 ring-1 ring-leek-800/10">
                  <step.icon className="size-6" />
                </div>
                <h3 className="mt-6 text-xl font-bold text-gray-900">{step.title}</h3>
                <p className="mt-3 text-gray-600">{step.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function GridIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} aria-hidden {...props}>
      <path d="M4 4h7v7H4V4zM13 4h7v7h-7V4zM4 13h7v7H4v-7zM13 13h7v7h-7v-7z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ZapIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} aria-hidden {...props}>
      <path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function TruckIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} aria-hidden {...props}>
      <path d="M3 7h11v10H3V7z" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14 10h3l3 3v4h-6V10z" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="7.5" cy="18.5" r="1.75" />
      <circle cx="17.5" cy="18.5" r="1.75" />
    </svg>
  );
}
