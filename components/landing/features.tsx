const FEATURES = [
  {
    title: "Fast delivery",
    body: "15–30 minute windows so dinner plans don’t wait on the store.",
    icon: ClockIcon,
  },
  {
    title: "Cheapest basket",
    body: "Optimized assortment and operations to keep your total surprisingly low.",
    icon: TagIcon,
  },
  {
    title: "Simple checkout",
    body: "Clear fees, fast address selection, and payment options that fit Casablanca.",
    icon: CardIcon,
  },
  {
    title: "Real-time order tracking",
    body: "See picking, dispatch, and arrival — transparency from tap to doorstep.",
    icon: RadarIcon,
  },
  {
    title: "Repeat last order",
    body: "Re-stock your staples in seconds with one tap on your previous basket.",
    icon: RepeatIcon,
  },
  {
    title: "Secure payments",
    body: "Modern payment flows built with security-first defaults for peace of mind.",
    icon: ShieldIcon,
  },
] as const;

export function FeaturesSection() {
  return (
    <section id="features" className="scroll-mt-28 border-t border-gray-100 bg-leek-50/40 py-20 sm:scroll-mt-24 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-leek-800">App features</p>
            <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Everything you need for a smarter grocery routine
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              LEEK is mobile-first — the experience is engineered around quick decisions and trusted delivery.
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f) => (
            <article
              key={f.title}
              className="rounded-3xl border border-gray-100/80 bg-white p-7 shadow-sm transition hover:border-leek-800/15 hover:shadow-md"
            >
              <div className="flex size-11 items-center justify-center rounded-xl bg-leek-800 text-white shadow-sm">
                <f.icon className="size-5" />
              </div>
              <h3 className="mt-5 text-lg font-bold text-gray-900">{f.title}</h3>
              <p className="mt-2 text-gray-600">{f.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ClockIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} aria-hidden {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v6l4 2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function TagIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} aria-hidden {...props}>
      <path d="M4 11.5V4h7.5L20 12.5 12.5 20 4 11.5z" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="7.5" cy="7.5" r="1.25" fill="currentColor" stroke="none" />
    </svg>
  );
}

function CardIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} aria-hidden {...props}>
      <path d="M4 8h16v10H4V8z" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4 11h16" strokeLinecap="round" />
      <path d="M9 15h4" strokeLinecap="round" />
    </svg>
  );
}

function RadarIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} aria-hidden {...props}>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 3v2M12 19v2M3 12h2M19 12h2" strokeLinecap="round" />
      <path d="M7 12a5 5 0 015-5M17 12a5 5 0 01-5 5" strokeLinecap="round" />
    </svg>
  );
}

function RepeatIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} aria-hidden {...props}>
      <path d="M5 13a7 7 0 016-7h6M19 11l-4-4 4-4M19 11h-8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ShieldIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} aria-hidden {...props}>
      <path d="M12 3l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V7l8-4z" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
