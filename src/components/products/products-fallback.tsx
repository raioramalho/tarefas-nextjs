import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Skeleton } from "../ui/skeleton";

export default async function ProductsFallback() {

  return (
    <div className="p-4 mx-auto">
      <div className="border rounded-sm">
        <Table>
          <TableHeader>
            <TableHead>Produto</TableHead>
            <TableHead>Fabricante</TableHead>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>
                <Skeleton className="w-[auto] h-[10px] rounded-sm bg-slate-300" />
              </TableCell>
              <TableCell>
                <Skeleton className="w-[auto] h-[10px] rounded-sm bg-slate-300" />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
