import { Component, OnInit, Host } from '@angular/core';
import { environment } from 'src/environments/environment';
import { DatagraphService } from '../Services/datagraph.service';
import { ISsp_031e } from '../Models/ISsp_0314e';
import { GraficaComponent } from '../grafica/grafica.component';
import { Router } from '@angular/router';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/src/sweetalert2.scss';

@Component({
  selector: 'app-data-graph-gen',
  templateUrl: './data-graph-gen.component.html',
  styleUrls: ['./data-graph-gen.component.css']
})
export class DataGraphGenComponent implements OnInit {
  public togle = true;
  public env = environment;
  // tslint:disable-next-line: variable-name
   public InterISsp_031e: ISsp_031e[] = [];
   public sHeight = screen.height;
   public aplyHeight = this.sHeight - 350;
   public finalHeight: string = this.aplyHeight + 'px';
   public valorA = 1;
   public valorB = 50;

  // variables para input color [INICIO]
  // tslint:disable-next-line: variable-name
  public _colorsA = '#E8CC1A';
  // tslint:disable-next-line: variable-name
  public _colorsB = '#E8871A';
  // tslint:disable-next-line: variable-name
  public _colorsC = '#1AE87B';
  // tslint:disable-next-line: variable-name
  public _colorsD = '#1AE2E8';

   // variables para input color [FIN]

  constructor(public datagraph: DatagraphService, public route: Router) { }

  ngOnInit() {
    this.getSp_0314e();
    if (screen.width <= 600) {
      Swal.fire({
        // title: '<strong>HTML <u>example</u></strong>',
        icon: 'info',
        html:
          '<strong>Consejo:</strong> ' +
          '<p>Para una mejor Experiencia gira tu Teléfono</p>' +
          '<img src=\'../../assets/cel-rotate.png\'> ',
        showCloseButton: true,
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonText:
          '<i class="fa fa-thumbs-up"></i> Genial!',
        confirmButtonAriaLabel: 'Thumbs up, great!'
      });
    }

  }

  // tslint:disable-next-line: only-arrow-functions
  timeEvent(time, obj, param) { setTimeout(function() { obj.style.display = param; }, time); }

  navLink() {
    this.route.navigate(['/', 'HomeView']);
  }

  changeCalcA(a) {
    // const valA = Number(a);
    // console.log(valA);
    // this.env.escA = valA;
    // console.log('escA ' + this.env.escA);
    // this.env.escArrA.push(this.env.escA);
    // console.log(this.env.escArrA);
  }

  changeCalcB(b) {
    const valB = Number(b);
    console.log(valB);
    this.env.escB = valB;
    console.log('escB ' + this.env.escB);
  }

  minimizar() {
    const buttonMin = document.getElementById('buttonMin');
    const dashA = document.getElementById('dashA');
    const dashB = document.getElementById('dashB');
    switch (this.togle) {
      case true:
        this.togle = false;
        dashA.style.animation = ' ease 1s hidElements';
        this.timeEvent(1000, dashA, 'none');
        dashA.style.animation = 'ease 1s widthOutPerfil';
        dashA.style.width = '25px';
        dashA.style.height = '25px';
        dashB.style.width = '100%';
        // historyPedidos.style.animationName = 'widthHistoryIn';
        // setTimeout(function () {
        //   historyPedidos.style.width = '95%';
        // }, 500);
        break;
      case false:
        this.togle = true;
        // console.log(this.togle);
        dashA.style.animation = 'ease 1s showElementes';
        this.timeEvent(1000, dashA, '');
        dashA.style.animation = 'ease 1s widthInPerfil';
        dashA.style.width = '48%';
        dashA.style.height = '500px';
        dashB.style.width = '48%';
        // setTimeout(function () {
        //   historyPedidos.style.width = '66%';
        // }, 500);
        break;
      default:
        this.togle = true;
    }
  }

  // tslint:disable-next-line: variable-name
  getSp_0314e = () => this.datagraph.getsp_0314e(this.env.codSiembra).subscribe(x => {
    this.InterISsp_031e = x;
    // console.log(this.InterISsp_031e);
    // console.log(this.InterISsp_031e[0].camaron);
   }
  )

}
