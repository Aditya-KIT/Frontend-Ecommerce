import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import catalogData from "@/data/catalog.json";
import { CatalogItem } from "@/types/catalog";
import { slugify } from "@/lib/utils";
import PropertyList from "@/components/PropertyList";
import ZoomableImage from "@/components/ZoomableImage";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = catalogData.find((i: any) => slugify(i.itemname) === slug) as CatalogItem;

  if (!item) {
    return { title: "Item Not Found" };
  }

  return {
    title: `${item.itemname} | Catalog Hub`,
    description: `Details and specifications for ${item.itemname} in the ${item.category} category.`,
  };
}

export default async function ItemDetailPage({ params }: Props) {
  const { slug } = await params;
  const item = catalogData.find((i: any) => slugify(i.itemname) === slug) as CatalogItem | undefined;

  if (!item) {
    notFound();
  }

  const fallbackImage = "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop";

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#020617] text-slate-900 dark:text-white transition-colors duration-300">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-[#020617]/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center">
          <Link 
            href="/"
            className="inline-flex items-center text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Catalog
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-xl border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col md:flex-row">
          
          {/* Image Section */}
          <div className="w-full md:w-1/2 relative bg-slate-100 dark:bg-slate-800 flex items-center justify-center p-8 min-h-[300px]">
            <ZoomableImage
              src={item.image}
              fallbackSrc={fallbackImage}
              alt={item.itemname}
              className="w-full h-auto max-h-[500px] object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute top-6 left-6 bg-blue-600/10 text-blue-700 dark:text-blue-400 dark:bg-blue-900/30 backdrop-blur-md px-4 py-1.5 rounded-full text-sm font-bold border border-blue-200 dark:border-blue-800/50 uppercase tracking-wider shadow-sm">
              {item.category || "Uncategorized"}
            </div>
          </div>

          {/* Details Section */}
          <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center border-t md:border-t-0 md:border-l border-slate-200 dark:border-slate-800">
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-4 tracking-tight leading-tight">
              {item.itemname}
            </h1>
            
            <div className="h-px w-full bg-slate-200 dark:bg-slate-800 my-6"></div>
            
            <div className="mb-8">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
                <svg className="w-6 h-6 mr-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                Technical Specifications
              </h2>
              
              {/* Dynamic Property List */}
              <PropertyList properties={item.itemprops} />
            </div>

            <button className="mt-auto w-full py-4 bg-slate-900 dark:bg-white hover:bg-slate-800 dark:hover:bg-slate-100 text-white dark:text-slate-900 font-bold rounded-xl transition-colors shadow-md hover:shadow-lg focus:ring-4 focus:ring-slate-900/20 dark:focus:ring-white/20">
              Enquire Now
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
