import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
} from "@/components/ui/table";
import TarefasItens from "./tarefas-itens";

export default async function Tarefas() {

  return (
    <div className="p-4 mx-auto">
      <div className="border rounded-sm">
        <Table>
          <TableHeader>
            <TableHead>Código</TableHead>
            <TableHead>Projeto</TableHead>
            <TableHead>Tarefa</TableHead>
          </TableHeader>
          <TableBody>
            <TarefasItens/>
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
