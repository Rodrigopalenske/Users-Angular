import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

import { NgxMaskDirective } from 'ngx-mask';
import { AppService } from '../../services/app.service';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule, NgxMaskDirective],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css'
})

export class UserFormComponent {
  validado: string = "VALID";
  telMask: string = "(00) 90000-0000";
  appService: AppService = new AppService;

  nomeFormControl: FormControl = new FormControl('', [Validators.required]);
  emailFormControl: FormControl = new FormControl('', [Validators.required, Validators.email]);
  telefoneFormControl: FormControl = new FormControl('', [Validators.required, Validators.minLength(10)]);
  passwordFormControl: FormControl = new FormControl('', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/)]);
  passwordConfirmarFormControl: FormControl = new FormControl('', [Validators.required])

  validarSenha() {
    if (this.getSenha() != this.getSenhaConfirmar()) {
        this.passwordConfirmarFormControl.setErrors({'passwordInvalid':true});
      }

    if (
      this.nomeFormControl.status == this.validado &&
      this.emailFormControl.status == this.validado &&
      this.telefoneFormControl.status == this.validado &&
      this.passwordFormControl.status == this.validado &&
      this.passwordConfirmarFormControl.status == this.validado
    ) {
      console.log("Tudo certo");
      this.appService.navegar('/');
    }

  }

  private getSenha() {
    return this.passwordFormControl.value;
  }
  private getSenhaConfirmar() {
    return this.passwordConfirmarFormControl.value;
  }

}
