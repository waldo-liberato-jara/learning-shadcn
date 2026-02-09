import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import { CommandInput } from "cmdk";
import { Search, Image as ImageIcon, Check } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

interface Product {
  id: number;
  name: string;
  terms: string[];
  sku: string;
  stock: number;
  image: string | null;
}
interface TypesMovementStock {
  id: number;
  name: string;
  code: string;
}

interface SelectedProduct extends Product {
  quantity: number | null;
  originType: TypesMovementStock;
  destinationType?: TypesMovementStock | null | undefined;
}

const products: Product[] = [
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

const productsFallidos: Product[] = [
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

/*
SOLO PARA INTERCAMBIO DE TIPO
- Al seleccionar un type debe buscar coincidencias en ese type para ese SKU (el sku es igual en fallido y en producción)
- Si encuentra muestra esa cantidad del type
- Si no encuentra muestra 0

*/

const typesMovementStock: TypesMovementStock[] = [
  { id: 9, name: "Producción", code: "PRD" },
  { id: 10, name: "Fallido", code: "FAL" },
];

interface PopoverCommandProps {
  isTransfer: boolean | "indeterminate";
}

function PopoverCommand({ isTransfer }: PopoverCommandProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());
  const [selectedProducts, setSelectedProducts] = useState<SelectedProduct[]>(
    [],
  );
  const [typeMovementStock, setTypeMovementStock] =
    useState<TypesMovementStock | null>(typesMovementStock[0]);

  const makeKey = (productId: number, typeId: number) =>
    `${productId}-${typeId}`;

  const onSearchChange = (value: string) => {
    setSearch(value);
  };
  const addProduct = () => {
    if (!selectedProduct || !typeMovementStock) return;

    const exists = selectedProducts.some(
      (p) =>
        p.id === selectedProduct.id && p.originType.id === typeMovementStock.id,
    );

    if (exists) {
      toast.info("Este producto ya se encuentra en la tabla");
      return;
    }

    const newSelected: SelectedProduct = {
      ...selectedProduct,
      quantity: null,
      originType: typeMovementStock,
      destinationType: isTransfer ? null : undefined,
    };

    setSelectedProducts((prev) => [...prev, newSelected]);
    setSelectedProduct(null);
    toast.success("Producto guardado correctamente");
  };

  const onSelectProduct = (product: Product) => {
    if (product && typeMovementStock) {
      const exists = selectedProducts.some(
        (p) => p.id === product.id && p.originType.id === typeMovementStock.id,
      );

      if (exists) {
        toast.info("Este producto ya se encuentra en la tabla");
        return;
      }
    }

    if (product.stock === 0) {
      toast.info("Producto sin stock disponible");
      return;
    }
    if (!typeMovementStock) return;

    const newKey = makeKey(product.id, typeMovementStock.id);

    setSelectedIds((prev) => {
      const next = new Set(prev);

      // 🔹 limpiar selección temporal anterior
      if (selectedProduct) {
        const prevKey = makeKey(selectedProduct.id, typeMovementStock.id);

        const isAlreadyAdded = selectedProducts.some(
          (p) =>
            p.id === selectedProduct.id &&
            p.originType.id === typeMovementStock.id,
        );

        if (!isAlreadyAdded) {
          next.delete(prevKey);
        }
      }

      // 🔹 marcar el nuevo producto
      next.add(newKey);
      return next;
    });

    setSelectedProduct(product);
    setIsOpen(false);
  };

  const onTypeStock = (typeId: string | null) => {
    if (!typeId || isNaN(Number(typeId))) return;

    const findMovementType =
      typesMovementStock.find((type) => type.id.toString() === typeId) || null;

    setTypeMovementStock(findMovementType);

    // 🔹 limpiar SOLO el producto actualmente seleccionado
    if (selectedProduct && typeMovementStock) {
      const key = makeKey(selectedProduct.id, typeMovementStock.id);
      setSelectedIds((prev) => {
        if (!prev.has(key)) return prev;

        const next = new Set(prev);
        next.delete(key);
        return next;
      });
    }

    setSelectedProduct(null);
  };

  const normalizeQuantity = (
    rawValue: string,
    stock: number,
  ): number | null => {
    const sanitized = rawValue.replace(/\D/g, "");

    if (sanitized === "") return null;

    const value = Number(sanitized);

    if (!value || value <= 0) return null;

    return Math.min(value, stock);
  };

  const handleQuantitySelectedProduct = (
    productId: number,
    originTypeId: number,
    value: string,
  ) => {
    setSelectedProducts((prev) =>
      prev.map((p) => {
        if (p.id !== productId || p.originType.id !== originTypeId) {
          return p;
        }

        const quantity = normalizeQuantity(value, p.stock);

        return {
          ...p,
          quantity,
        };
      }),
    );
  };

  const onSelectedProductStock = (
    productId: number,
    originTypeId: number,
    typeId: string | null,
  ) => {
    setSelectedProducts((prev) =>
      prev.map((p) => {
        if (p.id !== productId || p.originType.id !== originTypeId) {
          return p;
        }

        return {
          ...p,
          destinationType:
            typeId === "none"
              ? null
              : typesMovementStock.find((t) => t.id.toString() === typeId) ||
                null,
        };
      }),
    );
  };

  const sendData = () => {
    if (selectedProducts.length === 0) {
      toast.error("No hay productos seleccionados");
      return;
    }

    const hasInvalidProduct = selectedProducts.some((p) => {
      if (p.quantity === null) return true;

      if (isTransfer && p.destinationType === null) return true;

      return false;
    });

    if (hasInvalidProduct) {
      toast.error("Complete todos los campos de los productos");
      return;
    }

    const payload = selectedProducts.map((p) => ({
      id: p.id,
      quantity: p.quantity!,
      originType: p.originType,
      destinationType: isTransfer ? p.destinationType! : undefined,
    }));

    console.log("Datos enviados:", payload);
    toast.success("Datos enviados correctamente");
  };

  const productsByType =
    typeMovementStock?.code === "PRD" ? products : productsFallidos;

  return (
    <div className="min-h-screen w-full flex flex-col p-4">
      <div className="flex flex-row">
        <h1 className="text-3xl py-2">PopoverCommand</h1>
        <Button onClick={sendData}>Crear</Button>
      </div>
      <div className="flex gap-2">
        <Select
          value={typeMovementStock?.id.toString()}
          onValueChange={(v) => onTypeStock(v)}
        >
          <SelectTrigger id="stock-type" aria-labelledby="stock-type">
            <SelectValue placeholder="Seleccione un tipo"></SelectValue>
          </SelectTrigger>
          <SelectContent>
            {typesMovementStock.map((typeMS, index) => (
              <SelectItem key={index} value={typeMS.id.toString()}>
                {typeMS.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Popover open={isOpen} onOpenChange={setIsOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              className="w-100 justify-start text-muted-foreground font-normal overflow-hidden"
            >
              <Search className="w-4 h-4 mr-2 shrink-0" />
              <span className="truncate">
                {selectedProduct?.name || "Buscar por nombre o SKU..."}
              </span>
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-100 p-0 bg-popover">
            <Command shouldFilter={false}>
              <CommandInput
                placeholder="Escribe para buscar..."
                value={search}
                onValueChange={onSearchChange}
                className="py-2 px-4"
              />
              <CommandList>
                <CommandEmpty>No se encontraron productos</CommandEmpty>
                <CommandGroup className="p-0">
                  {productsByType.map((product) => {
                    const termsNames = product.terms.map((t) => t).join(" / ");
                    const displayTerms = termsNames
                      ? `${termsNames} (${product.sku})`
                      : product.sku;

                    return (
                      <CommandItem
                        key={product.id}
                        className="flex items-center gap-3 py-2 cursor-pointer"
                        onSelect={() => onSelectProduct(product)}
                      >
                        <Check
                          className={cn(
                            "h-4 w-4 shrink-0",
                            selectedIds.has(
                              makeKey(product.id, typeMovementStock!.id),
                            )
                              ? "opacity-100"
                              : "opacity-0",
                          )}
                        />
                        <div className="h-10 w-10">
                          {product.image ? (
                            <img
                              className="h-full w-full object-cover"
                              src={product.image}
                            />
                          ) : (
                            <div className="flex h-full w-full items-center justify-center">
                              <ImageIcon className="h-4 w-4 text-muted-foreground" />
                            </div>
                          )}
                        </div>

                        <div className="flex flex-1 flex-col min-w-0">
                          <span className="font-medium truncate">
                            {product.name}
                          </span>
                          <span className="text-sm text-muted-foreground truncate">
                            {displayTerms}
                          </span>
                        </div>

                        <span
                          className={cn(
                            "shrink-0 text-xs font-medium px-2 py-0.5 rounded-full",
                            product.stock > 0
                              ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                              : "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
                          )}
                        >
                          {product.stock}
                        </span>
                      </CommandItem>
                    );
                  })}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>

        <Button
          variant="default"
          className="cursor-pointer"
          onClick={addProduct}
        >
          Agregar
        </Button>
      </div>

      <Table className="mt-4">
        <TableHeader>
          <TableRow>
            <TableHead>Producto</TableHead>
            <TableHead>Stock Actual</TableHead>
            <TableHead>Cantidad</TableHead>
            {isTransfer && (
              <>
                <TableHead>Tipo de Inventario</TableHead>
                <TableHead>Nuevo Stock</TableHead>
              </>
            )}
          </TableRow>
        </TableHeader>
        <TableBody>
          {selectedProducts.length === 0 ? (
            <TableRow>
              <TableCell colSpan={isTransfer ? 4 : 3} className="text-center">
                No hay productos seleccionados
              </TableCell>
            </TableRow>
          ) : (
            selectedProducts.map((sproduct) => (
              <TableRow key={`${sproduct.id}-${sproduct.originType.id}`}>
                <TableCell className="flex flex-col">
                  <p className="text-base">{sproduct.name}</p>
                  <p className="text-sm text-gray-400">
                    {sproduct.originType.name}
                  </p>
                </TableCell>
                <TableCell>{sproduct.stock}</TableCell>
                <TableCell>
                  <Input
                    value={
                      sproduct.quantity === null
                        ? ""
                        : String(sproduct.quantity)
                    }
                    onChange={(e) =>
                      handleQuantitySelectedProduct(
                        sproduct.id,
                        sproduct.originType.id,
                        e.target.value,
                      )
                    }
                  />
                </TableCell>
                {isTransfer && (
                  <>
                    <TableCell>
                      <Select
                        value={
                          sproduct.destinationType?.id.toString() || "none"
                        }
                        onValueChange={(v) =>
                          onSelectedProductStock(
                            sproduct.id,
                            sproduct.originType.id,
                            v,
                          )
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Seleccione un tipo"></SelectValue>
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="none">
                            Seleccione un tipo
                          </SelectItem>
                          {typesMovementStock
                            .filter(
                              (typeMS) => typeMS.id !== sproduct.originType.id,
                            )
                            .map((typeMS) => (
                              <SelectItem
                                key={typeMS.id}
                                value={typeMS.id.toString()}
                              >
                                {typeMS.name}
                              </SelectItem>
                            ))}
                        </SelectContent>
                      </Select>
                    </TableCell>
                    <TableCell>n</TableCell>
                  </>
                )}
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
}

export default PopoverCommand;
