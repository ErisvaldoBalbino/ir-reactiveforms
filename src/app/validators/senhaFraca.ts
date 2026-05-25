import { AbstractControl, ValidationErrors } from "@angular/forms";

export function senhaFraca(control: AbstractControl): ValidationErrors | null {
    const valor = control.value as string;
    if (!valor) return null;

    const temNumero = /\d/.test(valor);
    const temMaiuscula = /[A-Z]/.test(valor);

    const valido = temNumero && temMaiuscula;

    return valido ? null : { senhaFraca: true };
}