import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/src/sweetalert2.scss';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  passwordType: string = 'password';
  passwordShow: boolean = false;
  password: string = '*****';
  usuario: string = '';

  env = environment;

  constructor(    public router: Router ) { }
  ngOnInit() { }


  login() {
      // tslint:disable-next-line: triple-equals
      if (this.usuario == 'admin' || this.usuario == 'demo') {
        // tslint:disable-next-line: triple-equals
        if (this.password == '123' || this.password == 'ABC') {

        this.env.nameUser = this.usuario;

        Swal.fire({
            icon: 'success',
            title: 'Bien...',
            text: 'Has ingresado con exito!',
            footer: ''
          });
          // tslint:disable-next-line: no-unused-expression
        this.router.navigate(['\HomeView']);
        }

      } else {
        Swal.fire({
          icon:  'error',
          title: 'Oops...',
          text:  'Verifica tus credenciales!',
          footer: ''
        });
      }
    }



  passwordHidShow() {
    console.log('activado');
    if (!this.passwordShow) {
      this.passwordShow = true;
      this.passwordType = 'text';
    } else {
      this.passwordShow = false;
      this.passwordType = 'password';
    }
  }

}
