function PhoneFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative mx-auto w-[260px] shrink-0 sm:w-[280px]">
      <div className="rounded-[2.4rem] border-[10px] border-gray-900 bg-gray-900 shadow-2xl shadow-black/40 ring-1 ring-white/10">
        <div className="overflow-hidden rounded-[1.85rem] bg-gray-100">
          {/* Dynamic island */}
          <div className="flex justify-center bg-white pb-1 pt-2">
            <div className="h-5 w-24 rounded-full bg-black/90" />
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}

function StatusRow() {
  return (
    <div className="flex items-center justify-between px-4 pb-2 pt-1 text-[10px] font-semibold text-gray-500">
      <span>9:41</span>
      <div className="flex gap-1">
        <span className="text-gray-400">●●●●</span>
      </div>
    </div>
  );
}

export function PhoneHomeMock() {
  return (
    <PhoneFrame>
      <div className="bg-white pb-5">
        <StatusRow />
        <div className="px-4">
          <p className="text-sm text-gray-600">
            Hello <span aria-hidden>👋</span>
          </p>
          <p className="mt-1 text-lg font-bold text-gray-900">What do you need?</p>
          <div className="mt-3 flex items-center gap-2 rounded-2xl border border-gray-100 bg-gray-50 px-3 py-2.5">
            <span className="text-gray-400" aria-hidden>
              ⌕
            </span>
            <span className="text-sm text-gray-400">Search products</span>
          </div>
        </div>
        <div className="mt-4 px-4">
          <div className="overflow-hidden rounded-2xl bg-gradient-to-br from-leek-800 to-leek-600 p-4 text-white shadow-lg">
            <p className="text-xs font-semibold uppercase tracking-wider text-emerald-100/90">Fresh today</p>
            <p className="mt-1 text-lg font-bold leading-tight">Vegetables &amp; fruit</p>
            <p className="mt-1 text-xs text-emerald-100/90">Handpicked for Casablanca</p>
            <div className="mt-3 flex justify-end">
              <span className="rounded-full bg-white/15 px-3 py-1 text-[10px] font-semibold">Shop</span>
            </div>
          </div>
        </div>
        <div className="mt-4 px-4">
          <p className="text-xs font-bold text-gray-800">Categories</p>
          <div className="mt-2 flex gap-2 overflow-hidden">
            {["Fruit", "Dairy", "Bakery"].map((c) => (
              <div key={c} className="shrink-0 rounded-xl bg-gray-50 px-3 py-2 text-[11px] font-semibold text-gray-700">
                {c}
              </div>
            ))}
          </div>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-2 px-4">
          <ProductTile name="Bananas" price="12 MAD" tint="bg-amber-50" />
          <ProductTile name="Tomatoes" price="19 MAD" tint="bg-red-50" />
        </div>
        <BottomNav />
      </div>
    </PhoneFrame>
  );
}

export function PhoneBrowseMock() {
  return (
    <PhoneFrame>
      <div className="bg-white pb-5">
        <StatusRow />
        <div className="flex items-center gap-3 px-4 pb-3">
          <span className="text-lg text-gray-500" aria-hidden>
            ‹
          </span>
          <p className="text-base font-bold text-gray-900">Fresh produce</p>
        </div>
        <div className="flex gap-2 overflow-hidden px-4 pb-3">
          {["All", "Veg", "Fruit"].map((t, i) => (
            <span
              key={t}
              className={`shrink-0 rounded-full px-3 py-1.5 text-[11px] font-bold ${
                i === 0 ? "bg-leek-800 text-white" : "bg-gray-100 text-gray-700"
              }`}
            >
              {t}
            </span>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-2 px-4">
          <LargeProductCard name="Red apples" price="28 MAD" />
          <LargeProductCard name="Milk 1L" price="14 MAD" />
        </div>
        <BottomNav active={1} />
      </div>
    </PhoneFrame>
  );
}

export function PhoneCartMock() {
  return (
    <PhoneFrame>
      <div className="bg-gray-50 pb-5">
        <StatusRow />
        <div className="px-4 pb-3 pt-1">
          <p className="text-lg font-bold text-gray-900">Your basket</p>
          <p className="text-xs text-gray-500">LEEK Casablanca</p>
        </div>
        <div className="space-y-2 px-4">
          <CartLine name="Fresh tomatoes" qty={2} price="38 MAD" />
          <CartLine name="Eggs x6" qty={1} price="23 MAD" />
        </div>
        <div className="mx-4 mt-4 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-gray-100">
          <Row label="Subtotal" value="61 MAD" />
          <Row label="Delivery" value="9 MAD" />
          <div className="my-3 border-t border-dashed border-gray-200" />
          <Row label="Total" value="70 MAD" bold />
        </div>
        <div className="px-4 pt-4">
          <div className="rounded-2xl bg-leek-800 py-3.5 text-center text-sm font-bold text-white shadow-md">
            Go to checkout
          </div>
        </div>
        <BottomNav active={2} />
      </div>
    </PhoneFrame>
  );
}

export function PhoneCheckoutMock() {
  return (
    <PhoneFrame>
      <div className="bg-white pb-5">
        <StatusRow />
        <div className="flex items-center gap-3 px-4 pb-3">
          <span className="text-lg text-gray-500" aria-hidden>
            ‹
          </span>
          <p className="text-base font-bold text-gray-900">Checkout</p>
        </div>
        <div className="space-y-3 px-4">
          <div className="rounded-2xl border border-gray-100 bg-gray-50 p-3">
            <p className="text-[10px] font-bold uppercase tracking-wider text-gray-500">Address</p>
            <p className="mt-1 text-sm font-semibold text-gray-900">Maarif, Casablanca</p>
            <p className="text-xs text-gray-500">Drop-off instructions added</p>
          </div>
          <div className="rounded-2xl border border-gray-100 bg-gray-50 p-3">
            <p className="text-[10px] font-bold uppercase tracking-wider text-gray-500">Payment</p>
            <div className="mt-2 flex gap-2">
              {["Cash", "Card"].map((p, i) => (
                <span
                  key={p}
                  className={`rounded-xl px-3 py-2 text-[11px] font-bold ${
                    i === 0 ? "bg-white text-leek-800 shadow-sm ring-1 ring-gray-200" : "text-gray-600"
                  }`}
                >
                  {p}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="px-4 pt-5">
          <div className="rounded-2xl bg-leek-accent py-4 text-center text-sm font-extrabold text-leek-950 shadow-lg">
            Place order
          </div>
          <p className="mt-3 text-center text-[10px] text-gray-500">Secure checkout · SSL encrypted</p>
        </div>
        <BottomNav active={2} />
      </div>
    </PhoneFrame>
  );
}

function ProductTile({ name, price, tint }: { name: string; price: string; tint: string }) {
  return (
    <div className={`rounded-2xl p-3 ${tint} ring-1 ring-black/5`}>
      <div className="mb-3 flex justify-between">
        <span className="text-lg" aria-hidden>
          {name.includes("Banana") ? "🍌" : "🍅"}
        </span>
        <span className="flex size-7 items-center justify-center rounded-full bg-leek-800 text-lg font-bold text-white">
          +
        </span>
      </div>
      <p className="text-xs font-bold text-gray-900">{name}</p>
      <p className="text-[11px] font-semibold text-leek-800">{price}</p>
    </div>
  );
}

function LargeProductCard({ name, price }: { name: string; price: string }) {
  return (
    <div className="rounded-2xl bg-white p-2 shadow-sm ring-1 ring-gray-100">
      <div className="flex h-24 items-center justify-center rounded-xl bg-gray-50 text-3xl">
        {name.includes("apple") ? "🍎" : "🥛"}
      </div>
      <p className="mt-2 px-1 text-[11px] font-bold text-gray-900">{name}</p>
      <div className="mt-2 flex items-center justify-between px-1">
        <span className="text-[11px] font-bold text-leek-800">{price}</span>
        <span className="rounded-full bg-leek-800 px-2 py-1 text-[10px] font-bold text-white">Add</span>
      </div>
    </div>
  );
}

function CartLine({ name, qty, price }: { name: string; qty: number; price: string }) {
  return (
    <div className="flex items-center gap-3 rounded-2xl bg-white p-3 shadow-sm ring-1 ring-gray-100">
      <div className="flex size-10 items-center justify-center rounded-xl bg-leek-50 text-lg text-leek-800">
        🛒
      </div>
      <div className="min-w-0 flex-1">
        <p className="truncate text-xs font-bold text-gray-900">{name}</p>
        <p className="text-[10px] text-gray-500">Qty {qty}</p>
      </div>
      <p className="text-xs font-bold text-gray-900">{price}</p>
    </div>
  );
}

function Row({ label, value, bold }: { label: string; value: string; bold?: boolean }) {
  return (
    <div className="flex items-center justify-between text-xs">
      <span className={bold ? "font-bold text-gray-900" : "text-gray-500"}>{label}</span>
      <span className={bold ? "font-extrabold text-gray-900" : "font-semibold text-gray-800"}>{value}</span>
    </div>
  );
}

function BottomNav({ active = 0 }: { active?: number }) {
  const items = ["Home", "Categories", "Cart", "Orders", "Profile"];
  return (
    <div className="mt-5 border-t border-gray-100 bg-white px-2 pt-2">
      <div className="flex justify-between text-[9px] font-semibold text-gray-400">
        {items.map((label, i) => (
          <div
            key={label}
            className={`flex flex-1 flex-col items-center gap-0.5 py-1 ${
              i === active ? "text-leek-800" : ""
            }`}
          >
            <span className="text-sm" aria-hidden>
              {i === 0 ? "⌂" : i === 1 ? "▦" : i === 2 ? "🛒" : i === 3 ? "☰" : "◎"}
            </span>
            {label}
          </div>
        ))}
      </div>
    </div>
  );
}
