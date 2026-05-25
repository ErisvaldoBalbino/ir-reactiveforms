import { Component, inject } from '@angular/core';
import { FormArray, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-experiencia-component',
  imports: [ReactiveFormsModule],
  templateUrl: './experiencia-component.html',
  styleUrl: './experiencia-component.css',
})
export class ExperienciaComponent {
  private fb = inject(FormBuilder);
  form = this.fb.group({
    experiencias: this.fb.array([]),
  });

  get experiencias() {
    return this.form.get('experiencias') as FormArray;
  }

  get totalExperiencias() {
    return this.experiencias.length;
  }

  private criarExperiencia() {
    return this.fb.group({
      empresa: ['', Validators.required],
      cargo: ['', Validators.required],
      anoInicio: [null, [Validators.required, Validators.min(1990)]],
      anoFim: [null],
    });
  }

  adicionarExperiencia() {
    this.experiencias.push(this.criarExperiencia());
  }

  removerExperiencia(experienciaIndex: number) {
    this.experiencias.removeAt(experienciaIndex);
  }

  onSubmit() {
    if (this.form.valid) {
      console.log(this.form.value);
      alert('Formulário enviado com sucesso!')
      this.experiencias.clear();
      this.form.reset();
    } else {
      alert('Formulário inválido.');
    }
  }
}
