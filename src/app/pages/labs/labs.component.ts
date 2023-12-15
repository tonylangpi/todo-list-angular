import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css'
})
export class LabsComponent {
  title = 'SOY EL MAS PERRO';
  lista = signal(['uno', 'dos', 'tres','cuatro']) 
  img = "https://w3schools.com/howto/img_avatar.png"
  persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    edad: 25
  }
  clickHandler = () => {
    alert('Hola')
  }
  onchangeHandler = (event: Event) => {
     console.log(event)
  }
  kedown(event: KeyboardEvent) {
    const input = event.target as HTMLInputElement
    console.log(input)
  }
}
