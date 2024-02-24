'use client'

import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import { useFormStatus } from "react-dom";
import Spinner from "../ui/spinner";

export default function AddProductsButton() {

  const { pending, data } = useFormStatus()

  return (
    <Button type="submit">
      {pending ? <Spinner /> : <>
        <PlusCircle className="w-4 h-4 mr-2"/>
        Criar produto
      </>}
    </Button>
  );
}
