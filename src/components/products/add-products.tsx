import { revalidateTag } from "next/cache";
import AddProductsButton from "./addproducts-button";
import { Input } from "@/components/ui/input";

export default function AddProducts() {

  async function handleAddProduct(form: FormData) {
    'use server'

    let produto = {
      Produto: form.get('Produto'),
      Fabricante: form.get('Fabricante')
    }

    console.table([produto])

    if (!produto.Produto || !produto.Fabricante) {
      return
    }

    await new Promise(resolve => setTimeout(resolve, 1000))

    await fetch("http://localhost:3001/produtos", {
      method: "POST",
      body: JSON.stringify(produto),
    });

    revalidateTag('get-products')
  }

  return (
    <form
      id="create-product"
      className="flex flex-col space-y-4 p-4 border rounded-sm"
      action={handleAddProduct}
      method="POST"
    >
      <Input type="text" name="Produto" placeholder="produto" />
      <Input type="text" name="Fabricante" placeholder="fabricante" />

      <AddProductsButton />
    </form>
  );
}
