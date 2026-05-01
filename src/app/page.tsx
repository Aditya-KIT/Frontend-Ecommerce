import catalogData from "@/data/catalog.json";
import { CatalogItem } from "@/types/catalog";
import CategorySection from "@/components/CategorySection";
import HeroSlider from "@/components/HeroSlider";
import FirebaseAnalytics from "@/components/FirebaseAnalytics";

import ScrollStorySection from "@/components/ScrollStorySection";
import Navbar from "@/components/Navbar";

export default function Home() {
  const items: CatalogItem[] = catalogData as CatalogItem[];

  const groupedItems = items.reduce((acc: Record<string, CatalogItem[]>, item) => {
    const category = item.category || "Uncategorized";
    if (!acc[category]) acc[category] = [];
    acc[category].push(item);
    return acc;
  }, {});

  const categories = Object.keys(groupedItems).sort();

  return (
    <div
      className="min-h-screen text-white"
      style={{
        background: "linear-gradient(180deg, #1e1b4b 0%, #13131b 25%, #13131b 100%)",
      }}
    >
       <FirebaseAnalytics />
      {/* Navbar */}
      <Navbar />

      {/* ── Main ── */}
      <main className="w-full flex flex-col relative pt-20">

        {/* Ambient blobs (scoped to hero area) */}
        <div className="absolute top-0 left-0 right-0 h-[120vh] pointer-events-none z-0 overflow-hidden">
          <div
            className="absolute top-[-5%] left-[-5%] w-[55%] h-[45%] rounded-full blur-[120px]"
            style={{ background: "rgba(99,102,241,0.12)" }}
          />
          <div
            className="absolute top-[30%] right-[-10%] w-[50%] h-[50%] rounded-full blur-[150px]"
            style={{ background: "rgba(34,211,238,0.05)" }}
          />
          <div
            className="absolute bottom-[10%] left-[10%] w-[40%] h-[40%] rounded-full blur-[130px]"
            style={{ background: "rgba(167,139,250,0.07)" }}
          />
        </div>

        {/* 1. Hero Slider */}
        <div className="relative z-10">
          <HeroSlider />
        </div>

        {/* Scroll Story Section */}
        <div className="relative z-10">
          <ScrollStorySection />
        </div>

        {/* 5. Discover Our Collection */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10 w-full">
          {/* Section heading */}
          <div className="text-center mb-16">
            <p
              className="text-xs font-bold uppercase tracking-[0.3em] mb-3"
              style={{ color: "#c0c1ff" }}
            >
              Full Catalog
            </p>
            <h2
              className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4"
              style={{ color: "#e4e1ed" }}
            >
              Discover Our Collection
            </h2>
            <p className="text-lg max-w-xl mx-auto" style={{ color: "#c7c4d7" }}>
              Browse through our premium selection of dynamically rendered multi-category products.
            </p>
          </div>

          {/* Divider */}
          <div className="h-px w-full mb-12" style={{ background: "rgba(255,255,255,0.07)" }} />

          {categories.length === 0 ? (
            <div
              className="text-center py-20 rounded-2xl border"
              style={{
                background: "rgba(255,255,255,0.04)",
                borderColor: "rgba(255,255,255,0.08)",
              }}
            >
              <p className="text-lg" style={{ color: "#c7c4d7" }}>
                No products found in the catalog.
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              {categories.map((category) => (
                <CategorySection
                  key={category}
                  category={category}
                  items={groupedItems[category]}
                />
              ))}
            </div>
          )}
        </div>
      </main>

      {/* ── Footer ── */}
      <footer
        className="border-t py-12"
        style={{ background: "#0d0d15", borderColor: "rgba(255,255,255,0.05)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="font-bold text-lg" style={{ color: "#e4e1ed" }}>
            Ethereal Dynamics
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            {["Privacy Policy", "Terms of Service", "Contact", "Support"].map((link) => (
              <a
                key={link}
                href="#"
                className="footer-link transition-colors duration-200"
                style={{ color: "#908fa0" }}
              >
                {link}
              </a>
            ))}
          </div>
          <p className="text-sm" style={{ color: "#908fa0" }}>
            © {new Date().getFullYear()} Ethereal Dynamics. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
