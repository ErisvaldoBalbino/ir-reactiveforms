import { AbstractControl, ValidationErrors } from "@angular/forms";

export function cpf(control: AbstractControl): ValidationErrors | null {
    const valor = control.value as string;
    if (!valor) return null;

    const ehCpf = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(valor) || /^\d{11}$/.test(valor);

    const valido = ehCpf;

    return valido ? null : { cpfInvalido: true };
}