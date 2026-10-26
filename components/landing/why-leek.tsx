const PILLARS = [
  {
    title: "Curated products",
    body: "A tight catalogue focused on staples, freshness, and local demand — fewer dead ends, more wins.",
  },
  {
    title: "Optimized operations",
    body: "Dark-store workflows built for picking speed so your order doesn’t stall at the shelf.",
  },
  {
    title: "Fast local delivery",
    body: "Riders tuned to Casablanca traffic patterns — tight ETAs that respect your time.",
  },
  {
    title: "Modern grocery experience",
    body: "A mobile UX that feels like the best global apps — with the Moroccan reality in mind.",
  },
] as const;

const STATS = [
  { value: "15–30 min", label: "Typical delivery window" },
  { value: "300+", label: "Curated SKU count" },
  { value: "Casablanca", label: "Launch coverage" },
] as const;

export function WhyLeekSection() {
  return (
    <section id="why-leek" className="scroll-mt-28 border-t border-gray-100 bg-gray-950 py-20 text-white sm:scroll-mt-24 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-leek-accent-bright">Why LEEK</p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            Premium grocery delivery — without premium friction
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            LEEK exists to compress the gap between craving and carton: clearer choices, sharper operations, faster
            delivery.
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.value} className="rounded-3xl bg-white/5 p-6 ring-1 ring-white/10">
              <p className="text-2xl font-extrabold text-leek-accent-bright">{s.value}</p>
              <p className="mt-2 text-sm text-gray-400">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {PILLARS.map((p) => (
            <div key={p.title} className="rounded-3xl bg-white/5 p-7 ring-1 ring-white/10">
              <h3 className="text-lg font-bold">{p.title}</h3>
              <p className="mt-3 text-gray-400">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
