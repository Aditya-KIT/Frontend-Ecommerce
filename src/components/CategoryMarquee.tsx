"use client";

const categories = [
  {
    name: "Cars", emoji: "🚗",
    items: [
      { name: "Kia Sonet", img: "https://stimg.cardekho.com/images/car-images/930x620/Kia/Sonet/9783/1705386619542/222_Pewter-Olive_33382d.jpg" },
      { name: "Tesla Model 3", img: "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-3-Main-Hero-Desktop-LHD.jpg" },
      { name: "Ford Mustang", img: "https://images.unsplash.com/photo-1591293836027-e05b48473b67?q=80&w=400&auto=format&fit=crop" },
      { name: "Porsche 911", img: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=400&auto=format&fit=crop" },
      { name: "Audi e-tron", img: "https://images.unsplash.com/photo-1615222874898-37089fcf47ee?q=80&w=400&auto=format&fit=crop" },
    ],
  },
  {
    name: "Bikes", emoji: "🏍️",
    items: [
      { name: "Ducati Panigale", img: "https://images.ctfassets.net/x7j9qwvpvr5s/43adRuY33iuCayAyMy3wTw/5545b174f876fc95ffcfff3d643c4d23/Ducati-MY25-Panigale-V4-overview-carousel-hero-link-1600x650-01.jpg" },
      { name: "Kawasaki Ninja H2", img: "https://cdn.bikedekho.com/processedimages/kawasaki/kawasaki-ninja-h2/source/kawasaki-ninja-h261a5ba444bbd9.jpg" },
      { name: "Harley Fat Boy", img: "https://images.unsplash.com/photo-1646904473811-a6a4b3a0a508?q=80&w=400&auto=format&fit=crop" },
      { name: "Yamaha R1", img: "https://images.unsplash.com/photo-1626840362735-afb64615318d?q=80&w=400&auto=format&fit=crop" },
      { name: "KTM Duke 390", img: "https://images.unsplash.com/photo-1591378603223-e15b45a81640?q=80&w=400&auto=format&fit=crop" },
    ],
  },
  {
    name: "Phones", emoji: "📱",
    items: [
      { name: "iPhone 16 Pro", img: "https://images.unsplash.com/photo-1726732970014-f2df88c87dd3?q=80&w=400&auto=format&fit=crop" },
      { name: "Samsung S24 Ultra", img: "https://images.samsung.com/in/smartphones/galaxy-s24-ultra/images/galaxy-s24-ultra-highlights-color-carousel-exclusive.jpg" },
      { name: "Google Pixel 9", img: "https://images.unsplash.com/photo-1727132528094-117c9dceb047?q=80&w=400&auto=format&fit=crop" },
      { name: "Nothing Phone 2", img: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?q=80&w=400&auto=format&fit=crop" },
      { name: "OnePlus 12", img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=400&auto=format&fit=crop" },
    ],
  },
  {
    name: "Computers", emoji: "💻",
    items: [
      { name: "MacBook Pro M3", img: "https://images.unsplash.com/photo-1724859234679-964acf07b126?q=80&w=400&auto=format&fit=crop" },
      { name: "Dell XPS 15", img: "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?q=80&w=400&auto=format&fit=crop" },
      { name: "ASUS ROG Zephyrus", img: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?q=80&w=400&auto=format&fit=crop" },
      { name: "Lenovo Legion 5", img: "https://images.unsplash.com/photo-1611078489935-0cb964de46d6?q=80&w=400&auto=format&fit=crop" },
      { name: "HP Spectre x360", img: "https://images.unsplash.com/photo-1599299009482-3b5326fc52e4?q=80&w=400&auto=format&fit=crop" },
    ],
  },
];

const allItems = categories.flatMap((cat) =>
  cat.items.map((item) => ({ ...item, category: cat.name, emoji: cat.emoji }))
);
const triple = [...allItems, ...allItems, ...allItems];
const tripleRev = [...allItems].reverse();
const tripleRevFull = [...tripleRev, ...tripleRev, ...tripleRev];

function Card({
  item,
  accentColor = "#c0c1ff",
  glowColor = "#6366F1",
}: {
  item: { name: string; img: string; category: string; emoji: string };
  accentColor?: string;
  glowColor?: string;
}) {
  return (
    <a
      href={`#${item.category.toLowerCase()}`}
      className="group flex-shrink-0 flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer no-underline"
      style={{
        background: "rgba(255,255,255,0.05)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        border: "1px solid rgba(255,255,255,0.08)",
        transition: "transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease",
        willChange: "transform",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.transform = "scale(1.05)";
        el.style.borderColor = `${glowColor}55`;
        el.style.boxShadow = `0 0 18px ${glowColor}33`;
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.transform = "scale(1)";
        el.style.borderColor = "rgba(255,255,255,0.08)";
        el.style.boxShadow = "none";
      }}
    >
      <div className="w-14 h-14 rounded-lg overflow-hidden flex-shrink-0 ring-1 ring-white/10">
        <img
          src={item.img}
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).style.display = "none";
          }}
        />
      </div>
      <div className="min-w-0">
        <p
          className="text-xs font-bold uppercase tracking-widest mb-0.5 whitespace-nowrap"
          style={{ color: accentColor }}
        >
          {item.emoji} {item.category}
        </p>
        <p className="text-sm font-bold whitespace-nowrap" style={{ color: "#e4e1ed" }}>
          {item.name}
        </p>
      </div>
    </a>
  );
}

export default function CategoryMarquee() {
  return (
    <section className="w-full py-12 overflow-hidden relative" aria-label="Category marquee">
      {/* Edge fade masks */}
      <div
        className="absolute left-0 top-0 bottom-0 w-28 z-10 pointer-events-none"
        style={{ background: "linear-gradient(90deg, #13131b 0%, transparent 100%)" }}
      />
      <div
        className="absolute right-0 top-0 bottom-0 w-28 z-10 pointer-events-none"
        style={{ background: "linear-gradient(270deg, #13131b 0%, transparent 100%)" }}
      />

      {/* Label */}
      <div className="text-center mb-8 relative z-10">
        <p className="text-xs font-bold uppercase tracking-[0.35em]" style={{ color: "#c0c1ff" }}>
          Browse by Category
        </p>
      </div>

      {/* Row 1 — slides LEFT */}
      <div className="overflow-hidden mb-4">
        <div
          className="flex gap-4 w-max"
          style={{ animation: "marquee-left 40s linear infinite" }}
        >
          {triple.map((item, i) => (
            <Card key={`r1-${i}`} item={item} accentColor="#c0c1ff" glowColor="#6366F1" />
          ))}
        </div>
      </div>

      {/* Row 2 — slides RIGHT */}
      <div className="overflow-hidden">
        <div
          className="flex gap-4 w-max"
          style={{ animation: "marquee-right 48s linear infinite" }}
        >
          {tripleRevFull.map((item, i) => (
            <Card key={`r2-${i}`} item={item} accentColor="#A78BFA" glowColor="#A78BFA" />
          ))}
        </div>
      </div>
    </section>
  );
}
