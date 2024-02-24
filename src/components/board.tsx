import Column from "./column";
import ApiTarefa from "../api/api-tarefas";
import { Suspense } from "react";
import Spinner from "./ui/spinner";

export default async function Board() {
  const api = new ApiTarefa();
  const cards = await api.getTarefas();

  return (
    <div
      id="board"
      className="flex h-min-screen w-full gap-3 p-12 justify-center"
    >
      <Column
        title="Pendente"
        color="text-white-400"
        column="pendente"
        cards={cards}
      />
      <Column
        title="Andamento"
        color="text-yellow-400"
        column="parado"
        cards={cards}
      />
      <Column
        title="Concluido"
        color="text-green-400"
        column="concluido"
        cards={cards}
      />
    </div>
  );
}
