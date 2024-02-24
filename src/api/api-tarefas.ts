import { Tarefa } from "@/types/tarefa.entity";


export default class ApiTarefa {
  public async getTarefas(): Promise<Tarefa[]> {

    console.log(`${ApiTarefa.name}: executou - ${this.getTarefas.name}`);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    const request = await fetch("http://localhost:3001/tarefas", {
      next: {
        tarefas: ['get-tarefas']
      }
    });
    const response = await request.json();
    return response;
  }

  public async postTarefa(tarefa: Tarefa): Promise<Tarefa> {
    console.log(`${ApiTarefa.name}: executou - ${this.postTarefa.name}`);

    const request = await fetch("http://localhost:3001/tarefas", {
      method: "POST",
      body: JSON.stringify(tarefa),
    });

    const response = await request.json();
    return response;
  }

  public async putTarefa(tarefa: Tarefa): Promise<Tarefa> {
    console.log(`${ApiTarefa.name}: executou - ${this.putTarefa.name}`);

    const request = await fetch(`http://localhost:3001/tarefas/${tarefa.codprojtar}`, {
      method: "PUT",
      body: JSON.stringify(tarefa),
    });

    const response = await request.json();
    return response;
  }
}


