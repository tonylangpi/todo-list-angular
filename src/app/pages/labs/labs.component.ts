import { Component, signal, inject, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { ApiService } from '../../servicios/api.service';
@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css'
})
export class LabsComponent implements OnInit{
  title = 'SOY EL MAS PERRO';
  lista = signal(['uno', 'dos', 'tres','cuatro']) 
  img = "https://w3schools.com/howto/img_avatar.png"
  persona = signal({
    nombre: 'Juan',
    apellido: 'Perez',
    edad: 15
  })
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

  changeAge = (event:Event) => {
     const edadNueva  = (event.target as HTMLInputElement).value;
     this.persona.update(estadoPrevio =>{
        return {
          ...estadoPrevio,
          edad: parseInt(edadNueva) 
        }
     })
  }
  colorCtrl = new FormControl(); 
  size = new FormControl(50,{
    nonNullable:true
  });
  url = "https://github.com/tiangolo.png"
  productos : any[] = []; 
  
   private _apiservice = inject(ApiService)
   ngOnInit(): void {
      this._apiservice.getProducts().subscribe(data => {
        console.log(data);
        this.productos = data;
      })
   }
}
