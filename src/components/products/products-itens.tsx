import {
  TableCell,
  TableRow,
} from "@/components/ui/table";
import ApiProduct from "../../api/api-produtos";
import { Product } from "@/types/product.entity";

const apiProduct = new ApiProduct();

export default async function ProductsItens() {
  const response = await apiProduct.getProducts();

  return (
    <>
      {response.map((product: Product) => (
        <TableRow key={product.id}>
          <TableCell>{product.Produto}</TableCell>
          <TableCell>{product.Fabricante}</TableCell>
        </TableRow>
      ))}
    </>
  );
}
