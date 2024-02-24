import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
} from "@/components/ui/table";
import ProductsItens from "./products-itens";

export default async function Products() {

  return (
    <div className="p-4 mx-auto">
      <div className="border rounded-sm">
        <Table>
          <TableHeader>
            <TableHead>Produto</TableHead>
            <TableHead>Fabricante</TableHead>
          </TableHeader>
          <TableBody>
            <ProductsItens />
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
