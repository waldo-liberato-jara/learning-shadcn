export interface Product {
  id: number;
  name: string;
  terms: string[];
  sku: string;
  stock: number;
  image: string | null;
}
export interface TypesMovementStock {
  id: number;
  name: string;
  code: string;
}

export interface SelectedProduct extends Product {
  quantity: number | null;
  originType: TypesMovementStock;
  destinationType?: TypesMovementStock | null | undefined;
}
