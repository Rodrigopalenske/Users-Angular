import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators, ValidationErrors, ValidatorFn, AbstractControl } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

import { NgxMaskDirective } from 'ngx-mask';
import { AppService } from '../../services/app.service';
import { ApiService } from '../../services/api.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, ReactiveFormsModule, NgxMaskDirective, HttpClientModule, RouterModule],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css'
})

export class UserFormComponent {
 userForm: FormGroup;

  validado: string = "VALID";
  telMask: string = "(00) 90000-0000";
  cpfMask: string = "000.000.000-00";
  mensagem: string = "";
  constructor(private apiService: ApiService, private appService: AppService) {
    this.userForm = new FormGroup({
      nome: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      cpf: new FormControl('', [Validators.required, Validators.minLength(11), Validators.maxLength(11)]),
      telefone: new FormControl('', [Validators.required, Validators.minLength(10)]),
      password: new FormControl('', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/)]),
      passwordConfirmar: new FormControl('', [Validators.required])
    }, { validators: this.validarSenha });
  }

  validarSenha: ValidatorFn = (form: AbstractControl): ValidationErrors | null => {
    return form.get('password')?.value === form.get('passwordConfirmar')?.value ? null : { passwordDiferente: true };
  }

  request() {
    if (this.userForm.valid) {
      
      let jsonData = {
        id: null,
        nome: this.userForm.get('nome')?.value,
        email: this.userForm.get('email')?.value,
        cpf: this.userForm.get('cpf')?.value,
        telefone: this.userForm.get('telefone')?.value,
        password: this.userForm.get('password')?.value
      }
      this.apiService.postData('usuario', jsonData).subscribe({
        next: (response) => {
          console.log("Sucesso");
          this.appService.navegar('/');
        },
        error: (error) => {
          console.log("Erro na requisição: " + error);
          this.mensagem = "Não foi possível cadastrar o usuário"
        }
      })
    } else {
      this.mensagem = "Dados incorretos, preencha os campos corretamente";
    }
  }
}
