import React, { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";

interface Usuario {
  id: number;
  name: string;
  state: boolean;
}

const Crud = () => {
  const [usuarios, setUsuarios] = useState<Usuario[]>([
    { id: 1, name: "Ana Torres", state: true },
    { id: 2, name: "Carlos Mendoza", state: false },
    { id: 3, name: "Lucía Pérez", state: true },
    { id: 4, name: "Javier Ríos", state: true },
    { id: 5, name: "María López", state: false },
  ]);

  return (
    <div className="min-h-screen w-full flex flex-col gap-4 p-4">
      {usuarios.map((usuario, index) => (
        <div key={index} className="flex flex-row items-center gap-2">
          <p>{usuario.name}</p>
          <Checkbox
            checked={usuario.state}
            onCheckedChange={(chk) => {
              console.log(chk);
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default Crud;
