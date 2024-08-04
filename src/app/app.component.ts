import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  num1 = '';
  num2 = '';
  operador: string = '';
  resultado: number = 0;

  calcular() {
    switch (this.operador) {
      case '+':
        this.resultado = Number(this.num1) + Number(this.num2);
        break;
      case '-':
        this.resultado = Number(this.num1) - Number(this.num2);
        break;
      case '*':
        this.resultado = Number(this.num1) * Number(this.num2);
        break;
      case '/':
        this.resultado = Number(this.num1) / Number(this.num2);
        break;
    }
  }
}
