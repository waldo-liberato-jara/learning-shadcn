import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";

interface Usuario {
  id: number;
  name: string;
  state: boolean | "indeterminate";
}

const Crud = () => {
  const [usuarios, setUsuarios] = useState<Usuario[]>([
    { id: 1, name: "Ana Torres", state: true },
    { id: 2, name: "Carlos Mendoza", state: false },
    { id: 3, name: "Lucía Pérez", state: true },
    { id: 4, name: "Javier Ríos", state: true },
    { id: 5, name: "María López", state: false },
  ]);

  const onStateChange = (id: number, checked: boolean | "indeterminate") => {
    setUsuarios((prev) =>
      prev.map((usuario) =>
        usuario.id === id ? { ...usuario, state: checked } : usuario,
      ),
    );
  };

  return (
    <div className="min-h-screen w-full flex flex-col gap-4 p-4">
      {usuarios.map((usuario, index) => (
        <div key={index} className="flex flex-row items-center gap-2">
          <p>{usuario.name}</p>
          <Checkbox
            checked={usuario.state === "indeterminate" ? false : usuario.state}
            onCheckedChange={(checked) => onStateChange(usuario.id, checked)}
          />
          <Button variant={"destructive"}>
            <Trash2 />
          </Button>
        </div>
      ))}
    </div>
  );
};

export default Crud;
