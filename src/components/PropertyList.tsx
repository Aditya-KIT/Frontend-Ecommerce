import { ItemProperty } from "@/types/catalog";

interface PropertyListProps {
  properties: ItemProperty[];
}

export default function PropertyList({ properties }: PropertyListProps) {
  if (!properties || properties.length === 0) {
    return (
      <div className="p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-100 dark:border-slate-800 text-center text-slate-500">
        No properties available for this item.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {properties.map((prop, index) => (
        <div 
          key={index} 
          className="p-4 bg-white dark:bg-slate-800/80 rounded-xl border border-slate-100 dark:border-slate-700/50 shadow-sm flex flex-col transition-all hover:border-blue-200 dark:hover:border-blue-800"
        >
          <span className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-1">
            {prop.label}
          </span>
          <span className="text-base font-semibold text-slate-900 dark:text-white break-words">
            {prop.value}
          </span>
        </div>
      ))}
    </div>
  );
}
