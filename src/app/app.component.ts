import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { LabsComponent } from './pages/labs/labs.component'; // Add the missing import for LabsComponent
import { HomeComponent } from './pages/home/home.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,LabsComponent,HomeComponent, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  menuOption: string = '';
  onOption(option: string){
      this.menuOption = option;
  }
}
