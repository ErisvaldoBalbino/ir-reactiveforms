import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators, FormArray } from '@angular/forms';
import { senhaFraca } from '../../validators/senhaFraca';
import { senhasDiferentes } from '../../validators/senhasDiferentes';
import { cpf } from '../../validators/cpf';

@Component({
  selector: 'app-cadastro-usuario-component',
  imports: [ReactiveFormsModule],
  templateUrl: './cadastro-usuario-component.html',
  styleUrl: './cadastro-usuario-component.css',
})
export class CadastroUsuarioComponent {
  private fb = inject(FormBuilder);
  form = this.fb.group({
    nome: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(100)]],
    cpf: ['', [Validators.required, cpf]],
    email: ['', [Validators.required, Validators.email]],
    dataNascimento: [null, [Validators.required]],
    senha: ['', [Validators.required, Validators.minLength(8), senhaFraca]],
    confirmarSenha: ['', [Validators.required]],
    perfil: ['', [Validators.required]],
  }, {
    validators: senhasDiferentes,
  })

  onSubmit() {
    if (this.form.valid) {
      console.log(this.form.value);
      alert('Formulário enviado com sucesso!')
      this.form.reset();
    } else {
      alert('Formulário inválido.');
    }
  }
}
