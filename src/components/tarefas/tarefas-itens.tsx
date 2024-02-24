import {
  TableCell,
  TableRow,
} from "@/components/ui/table";
import ApiTarefa from "@/api/api-tarefas";
import { Tarefa } from "@/types/tarefa.entity";

const apiTarefa = new ApiTarefa();

export default async function TarefasItens() {
  const response = await apiTarefa.getTarefas();

  return (
    <>
      {response.map((tarefa: Tarefa) => (
        <TableRow key={tarefa.codprojtar}>
          <TableCell>{tarefa.codprojtar}</TableCell>
          <TableCell>{tarefa.nomepi}</TableCell>
          <TableCell>{tarefa.titulotarefas}</TableCell>
        </TableRow>
      ))}
    </>
  );
}
