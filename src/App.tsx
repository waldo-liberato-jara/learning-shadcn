import "./App.css";
import PopoverCommand from "./pages/PopoverCommand";
import PopoverCommand2 from "./pages/PopoverCommand2";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Checkbox } from "./components/ui/checkbox";
import { useState } from "react";
import Crud from "./pages/Crud";

function App() {
  const [isTransfer, setIsTransfer] = useState<boolean | "indeterminate">(
    false,
  );

  return (
    <>
      <Checkbox
        checked={isTransfer}
        onCheckedChange={(value) => setIsTransfer(value)}
      />
      <Sonner richColors />
      <Crud />
    </>
  );
}

export default App;
