"use client";
import Link from "next/link";
import { CatalogItem } from "@/types/catalog";
import { slugify } from "@/lib/utils";

interface ItemCardProps {
  item: CatalogItem;
}

export default function ItemCard({ item }: ItemCardProps) {
  const fallbackImage =
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop";

  return (
    <div
      className="group relative flex flex-col rounded-xl overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(99,102,241,0.3)] cursor-pointer"
      style={{
        background: "rgba(255,255,255,0.05)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        border: "1px solid rgba(255,255,255,0.10)",
      }}
    >
      {/* Image Container */}
      <div className="aspect-[4/3] w-full overflow-hidden relative">
        <img
          src={item.image || fallbackImage}
          alt={item.itemname}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          onError={(e) => {
            e.currentTarget.src = fallbackImage;
          }}
        />
        {/* Category tag */}
        <div
          className="absolute top-3 left-3 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest"
          style={{
            background: "rgba(167,139,250,0.2)",
            backdropFilter: "blur(8px)",
            border: "1px solid rgba(167,139,250,0.3)",
          }}
        >
          {item.category || "Uncategorized"}
        </div>
        {/* Bottom gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#13131b]/60 to-transparent pointer-events-none" />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
        <h3
          className="text-lg font-bold mb-2 line-clamp-1 tracking-tight"
          style={{ color: "#e4e1ed" }}
        >
          {item.itemname || "Unknown Item"}
        </h3>

        {/* Short property preview */}
        <div className="flex flex-wrap gap-2 mb-4">
          {item.itemprops?.slice(0, 2).map((prop, index) => (
            <span
              key={index}
              className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium"
              style={{
                background: "rgba(255,255,255,0.07)",
                color: "#c7c4d7",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              {prop.label}: {prop.value}
            </span>
          ))}
          {item.itemprops && item.itemprops.length > 2 && (
            <span
              className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium"
              style={{
                background: "rgba(255,255,255,0.07)",
                color: "#c7c4d7",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              +{item.itemprops.length - 2} more
            </span>
          )}
        </div>

        {/* Action Button */}
        <div className="mt-auto pt-4">
          <Link
            href={`/item/${slugify(item.itemname)}`}
            className="inline-flex w-full items-center justify-center px-4 py-2.5 text-sm font-semibold rounded-lg transition-all duration-300 focus:ring-4 focus:ring-indigo-600/30 group/btn"
            style={{
              background: "rgba(99,102,241,0.85)",
              color: "#ffffff",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "#4F46E5";
              (e.currentTarget as HTMLElement).style.boxShadow = "0 0 20px rgba(99,102,241,0.4)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "rgba(99,102,241,0.85)";
              (e.currentTarget as HTMLElement).style.boxShadow = "none";
            }}
          >
            View Details
            <span className="material-symbols-outlined text-sm ml-2 transform group-hover/btn:translate-x-1 transition-transform">
              arrow_forward
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
