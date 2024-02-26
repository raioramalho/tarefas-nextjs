"use client"
import { Tarefa } from "@/types/tarefa.entity";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "./ui/card";
import { Separator } from "./ui/separator";
import { useState } from "react";

type CarTarefaProps = {
  tarefa: Tarefa;
};

export default function CardTarefa(props: CarTarefaProps) {
  const [active, setActive] = useState(false);
  const [dragStatus, setDragStatus] = useState(false);

  async function handleDrag(id: any, coluna: any) {
    if(!coluna) {
      return
    }
    setDragStatus(false);
    console.log(`Soltei!: ${id} na coluna: ${coluna}`)
    // let form = document.getElementById('form-tarefa') as HTMLFormElement;
    // form.requestSubmit();
    // form.submit()
  }

  return (
    <>
    
      <Separator className={`${dragStatus ? "opacity-100 bg-purple-800" : "opacity-0"} hover:opacity-100`} />
      <div
       className={``}
        id="tarefa-div"
        draggable={true}
        onDragCapture={() => setDragStatus(true)}
        onDragEnd={(event) => {
          event.preventDefault();
          let div = document.elementsFromPoint(event.clientX, event.clientY);
          let concluido = div.find((elemento) => elemento.id === "concluido");
          let parado = div.find((elemento) => elemento.id === "parado");
          let pendente = div.find((elemento) => elemento.id === "pendente");
          let coluna = (concluido && "concluido") || (parado && "parado") || (pendente && "pendente");
          handleDrag(props.tarefa.codprojtar, coluna);
        }
      }
        className={`cursor-grab active:cursor:grabbing hover:opacity-100 ${
          active ? "opacity-100" : "opacity-90"
        }`}
        onClick={() => setActive(active ? false : true)}
      >
        <Card id="tarefa-card" className={`m-1 ${active ? "border-purple-200" : ""} hover:border-purple-400`}>
          <CardHeader>
            <CardTitle>{props.tarefa.nomeproj}</CardTitle>
            <CardDescription>{props.tarefa.nomepi}</CardDescription>
          </CardHeader>
          <CardContent className="text-sm">
            {props.tarefa.titulotarefas}
          </CardContent>
          <CardFooter className="text-sm">
            versão: {props.tarefa.versao}
          </CardFooter>
        </Card>
      </div>
      <Separator className={`${dragStatus ? "opacity-100 bg-purple-800" : "opacity-0"} hover:opacity-100`} />
      
      </>
  );
}
