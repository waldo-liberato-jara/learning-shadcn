/*
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
import { CommandInput } from "cmdk";
import { Search, Image as ImageIcon } from "lucide-react";
import { useState } from "react";
import type { Product, SelectedProduct, TypesMovementStock } from "@/types";
import { typesMovementStock } from "@/data";

interface PopoverCommandProps {
  isTransfer: boolean | "indeterminate";
}

function PopoverCommand2({ isTransfer }: PopoverCommandProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");
  const [activeProduct, setActiveProduct] = useState<Product | null>(null);
  const [selectedProducts, setSelectedProducts] = useState<SelectedProduct[]>(
    [],
  );
  const [typeMovementStock, setTypeMovementStock] =
    useState<TypesMovementStock | null>(typesMovementStock[0]);

  const addProduct = () => {};

  const onSelectProduct = (product: Product) => {};

  const onTypeStock = (typeId: string | null) => {};

  const handleQuantitySelectedProduct = (
    productId: number,
    originTypeId: number,
    value: string,
  ) => {};

  const onSelectedProductStock = (
    productId: number,
    originTypeId: number,
    typeId: string | null,
  ) => {};

  const sendData = () => {};

  return (
    <div className="min-h-screen w-full flex flex-col gap-4 p-4">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-semibold">Movimiento de Stock</h1>
        <Button>Crear</Button>
      </div>

      <div className="flex gap-2 items-center">
        <Select>
          <SelectTrigger className="w-60">
            <SelectValue placeholder="Tipo de movimiento" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1">Ingreso</SelectItem>
            <SelectItem value="2">Salida</SelectItem>
            <SelectItem value="3">Transferencia</SelectItem>
          </SelectContent>
        </Select>

        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              className="w-80 justify-start text-muted-foreground font-normal"
            >
              <Search className="w-4 h-4 mr-2" />
              Buscar por nombre o SKU...
            </Button>
          </PopoverTrigger>

          <PopoverContent className="w-80 p-0">
            <Command>
              <CommandInput placeholder="Escribe para buscar..." />
              <CommandList>
                <CommandEmpty>No se encontraron productos</CommandEmpty>
                <CommandGroup>

                  <CommandItem className="flex items-center gap-3">
                    <div className="h-10 w-10 flex items-center justify-center border rounded">
                      <ImageIcon className="h-4 w-4 text-muted-foreground" />
                    </div>

                    <div className="flex flex-col">
                      <span className="font-medium">Producto ejemplo</span>
                      <span className="text-sm text-muted-foreground">
                        SKU-001
                      </span>
                    </div>

                    <span className="ml-auto text-xs px-2 py-0.5 rounded-full bg-green-100 text-green-700">
                      12
                    </span>
                  </CommandItem>
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>

        <Button>Agregar</Button>
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
          <TableRow>
            <TableCell
              colSpan={isTransfer ? 5 : 3}
              className="text-center text-muted-foreground"
            >
              No hay productos seleccionados
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell>
              <div className="flex flex-col">
                <span className="font-medium">Producto ejemplo</span>
                <span className="text-sm text-muted-foreground">
                  Almacén principal
                </span>
              </div>
            </TableCell>
            <TableCell>20</TableCell>
            <TableCell>
              <Input placeholder="0" />
            </TableCell>

            {isTransfer && (
              <>
                <TableCell>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Destino" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">Almacén secundario</SelectItem>
                    </SelectContent>
                  </Select>
                </TableCell>
                <TableCell>—</TableCell>
              </>
            )}
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}


export default PopoverCommand2;
*/
