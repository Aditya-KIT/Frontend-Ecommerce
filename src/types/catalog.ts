export interface ItemProperty {
  label: string;
  value: string;
}

export interface CatalogItem {
  itemname: string;
  category: string;
  image: string;
  itemprops: ItemProperty[];
}
