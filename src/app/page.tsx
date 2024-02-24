import Board from "@/components/board";
// import BoardFallback from "@/components/board-fallback";
// import { Suspense } from "react";

export default function Home() {
  return (
    <main className="flex flex-row items-center justify-center p-2 m-2">
      {/* <Suspense fallback={<BoardFallback/>}> */}
        <Board/>
      {/* </Suspense> */}
    </main>
  );
}
