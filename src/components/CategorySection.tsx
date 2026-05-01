import { CatalogItem } from "@/types/catalog";
import ItemCard from "./ItemCard";

interface CategorySectionProps {
  category: string;
  items: CatalogItem[];
}

export default function CategorySection({ category, items }: CategorySectionProps) {
  if (!items || items.length === 0) return null;

  return (
    <section id={category.toLowerCase()} className="mb-16 scroll-mt-24">
      <div className="flex items-center mb-8">
        <h2 className="text-3xl font-bold capitalize tracking-tight" style={{ color: "#e4e1ed" }}>
          {category || "Uncategorized"}
        </h2>
        <div className="ml-4 h-px flex-grow" style={{ background: "rgba(255,255,255,0.08)" }} />
        <span
          className="ml-4 text-sm font-semibold px-3 py-1 rounded-full"
          style={{
            background: "rgba(192,193,255,0.12)",
            color: "#c0c1ff",
            border: "1px solid rgba(192,193,255,0.2)",
          }}
        >
          {items.length} {items.length === 1 ? "Item" : "Items"}
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {items.map((item, index) => (
          <ItemCard key={`${item.itemname}-${index}`} item={item} />
        ))}
      </div>
    </section>
  );
}
