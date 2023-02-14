import { Component, OnInit } from '@angular/core';
import { Tarea } from 'src/app/models/tarea';


@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit{

  listaTareas:Tarea[]= [];
  nombreTarea:string= ""

  constructor(){}

  ngOnInit():void{

  }

  agregarTarea(){
    const TAREA: Tarea= {
      nombre: this.nombreTarea,
      estado: false
    }

    this.listaTareas.push(TAREA);

    this.nombreTarea= "";
  }

  eliminar(i:number){
      this.listaTareas.splice(i,1);
  }

  actualizarTarea(tarea:Tarea, i:number){
       this.listaTareas[i].estado= !tarea.estado;
  }
}
