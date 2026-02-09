import type { Product, TypesMovementStock } from "./types";

export const products: Product[] = [
  {
    id: 1,
    name: "Producto 01",
    terms: ["S", "M", "L", "XL"],
    sku: "10000001",
    stock: 10,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    name: "Producto 02",
    terms: ["S", "M", "L"],
    sku: "10000002",
    stock: 3,
    image: null,
  },
  {
    id: 3,
    name: "Producto 03",
    terms: ["S", "XL"],
    sku: "10000003",
    stock: 21,
    image:
      "https://images.unsplash.com/photo-1627384113743-6bd5a479fffd?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    name: "Producto 04",
    terms: ["S", "L", "XL"],
    sku: "10000004",
    stock: 0,
    image:
      "https://images.unsplash.com/photo-1491933382434-500287f9b54b?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    name: "Producto 05",
    terms: ["M", "L", "XL"],
    sku: "10000005",
    stock: 18,
    image: null,
  },
];

export const productsFallidos: Product[] = [
  {
    id: 1,
    name: "Producto 01",
    terms: ["S", "M", "L", "XL"],
    sku: "10000001",
    stock: 10,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    name: "Producto 02",
    terms: ["S", "M", "L"],
    sku: "10000002",
    stock: 0,
    image: null,
  },
  {
    id: 6,
    name: "Producto F 01",
    terms: ["S", "M", "L", "XL"],
    sku: "10000006",
    stock: 10,
    image:
      "https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 7,
    name: "Producto F 02",
    terms: ["S", "M", "L"],
    sku: "10000007",
    stock: 3,
    image:
      "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 8,
    name: "Producto F 03",
    terms: ["S", "XL"],
    sku: "10000008",
    stock: 21,
    image:
      "https://images.unsplash.com/photo-1640890959827-6307611b34a1?q=80&w=327&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 9,
    name: "Producto F 04",
    terms: ["S", "L", "XL"],
    sku: "10000009",
    stock: 0,
    image:
      "https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=404&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 10,
    name: "Producto F 05",
    terms: ["M", "L", "XL"],
    sku: "10000010",
    stock: 18,
    image:
      "https://images.unsplash.com/photo-1617858123189-b26eb62d8eb4?q=80&w=847&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export const typesMovementStock: TypesMovementStock[] = [
  { id: 9, name: "Producción", code: "PRD" },
  { id: 10, name: "Fallido", code: "FAL" },
];
