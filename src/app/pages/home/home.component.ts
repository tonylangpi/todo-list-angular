import { Component,signal } from '@angular/core';
import { NgFor, CommonModule } from '@angular/common';
import { Tarea } from '../../models/tareas.model';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  tareas = signal<Tarea[]>([
    {
      id: Date.now(),
      title: 'Aprender Angular',
      completed: false
    },
    {
      id: Date.now() + 1,
      title: 'Aprender Firebase',
      completed: false
    },
    {
      id: Date.now() + 2,
      title: 'Aprender Firestore',
      completed: false
    },
    {
      id: Date.now() + 3,
      title: 'Aprender Cloud Functions',
      completed: false
    }
  ]);
  changeHandler(event: Event) {
    const input =  event.target as HTMLInputElement;
    const value = input.value;
    this.addTarea(value);
  }
  //metodo que se encarga de agregar una tarea
  addTarea(titulo: string) {
    this.tareas.update(tareas => [
      ...tareas,
      {
        id: Date.now(),
        title: titulo,
        completed: false
      }
    ]);
  }
  deleteTarea(index: number) {
    this.tareas.update(tareas => tareas.filter((tarea, pos) => pos !== index));
    //estamos eliminando la tarea que se encuentra en la posicion index
  }
   //metodo que se encarga de recibir el checkbox de la tarea
  //y cambiar el estado de la tarea
  estadoTarea(event: Event, index: number) {
    const input = event.target as HTMLInputElement;
    const checked = input.checked;
    this.toggleTarea(index);
  }
  //metodo que se encarga de cambiar el estado de una tarea
  toggleTarea(index: number) {
    this.tareas.update(tareas =>
      tareas.map((tarea, pos) =>
        pos === index ? { ...tarea, completed: !tarea.completed } : tarea
      )
    );
  }
}
