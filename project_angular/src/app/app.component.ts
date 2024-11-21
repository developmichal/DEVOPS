import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Details } from './Details';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Project';
  newUser:Details=new Details();

  save(){
    alert("good!");
    this.newUser=new Details();
  }
}