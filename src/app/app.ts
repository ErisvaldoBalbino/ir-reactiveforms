import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CadastroUsuarioComponent } from './components/cadastro-usuario-component/cadastro-usuario-component';
import { ExperienciaComponent } from './components/experiencia-component/experiencia-component';

@Component({
  selector: 'app-root',
  imports: [CadastroUsuarioComponent, ExperienciaComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('reactive-forms');
}
