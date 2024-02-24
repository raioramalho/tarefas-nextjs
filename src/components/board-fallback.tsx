import ColumnFallback from "./column-fallback";


export default async function BoardFallback() {
  const cards: any[] = [];

  return (
    <div
      id="board"
      className="flex h-min-screen w-full gap-3 p-12 justify-center"
    >
      <ColumnFallback
        title="Pendente"
        color="text-white-400"
        ColumnFallback="pendente"
        cards={cards}
      />
      <ColumnFallback
        title="Andamento"
        color="text-yellow-400"
        ColumnFallback="parado"
        cards={cards}
      />
      <ColumnFallback
        title="Concluido"
        color="text-green-400"
        ColumnFallback="concluido"
        cards={cards}
      />
    </div>
  );
}
