import { Tarefa } from "@/types/tarefa.entity";
import { Badge } from "./ui/badge";
import CardTarefa from "./card-tarefa";

export default function Column(props: any) {

  const tarefas: Tarefa[] = props.cards.filter(
    (tarefa: Tarefa) => tarefa.progresso === props.column
  );

  return (
    <div id={props.column} className="w-56 shrink-0 border py-2 rounded">
      <div className="mb-3 flex items-center justify-between ml-2 mr-2">
        <p className={`${props.color}`}>{props.title}</p>

        <Badge>{tarefas.length}</Badge>
      </div>
      <div className={`h-full w-full rounded p-2 transition-colors`}>
        
        {tarefas.map((tarefa: Tarefa) => (
          <CardTarefa key={tarefa.codsprinttar} tarefa={tarefa}/>
        ))}
        
      </div>
    </div>
  );
}
