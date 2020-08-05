import { Component, OnInit, Host } from '@angular/core';
import { environment } from 'src/environments/environment';
import { DatagraphService } from '../Services/datagraph.service';
import { ISsp_031e } from '../Models/ISsp_0314e';
import { GraficaComponent } from '../grafica/grafica.component';
import { Router } from '@angular/router';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/src/sweetalert2.scss';
import { color, string } from '@amcharts/amcharts4/core';
import { WebuserService } from '../Services/webuser.service';
import { ControlPaletaService } from '../Services/control-paleta.service';
import { Web_Paleta } from '../Models/Web_Paleta';
import { GetTagHTMLService } from '../Services/get-tag-html.service';

@Component({
  selector: 'app-data-graph-gen',
  templateUrl: './data-graph-gen.component.html',
  styleUrls: ['./data-graph-gen.component.css']
})
export class DataGraphGenComponent implements OnInit {
  public togle = false;
  public env = environment;
  // tslint:disable-next-line: variable-name
   public InterISsp_031e: ISsp_031e[] = [];
   public sHeight = screen.height;
   public aplyHeight = this.sHeight - 350;
   public finalHeight: string = this.aplyHeight + 'px';
   public valorA = 1;
   public valorB = 50;
   public opt = true;

  // variables para input color [INICIO]
  // tslint:disable-next-line: variable-name
  public _colorsA = '#E8CC1A';
  // tslint:disable-next-line: variable-name
  public _colorsB = '#E8871A';
  // tslint:disable-next-line: variable-name
  public _colorsC = '#1AE87B';
  // tslint:disable-next-line: variable-name
  public _colorsD = '#1AE2E8';
  public nameColor: string;

  public colores: Web_Paleta = {
    Color_Tabla: '',
    Color_A: this._colorsA,
    Color_B: this._colorsB,
    Color_C: this._colorsC,
    Color_D: this._colorsD,
    Nombre: this.nameColor
  };
  public colorId;
  public iColors: any [] = [];
   // variables para input color [FIN]

  constructor(public router: Router, public datagraph: DatagraphService,
              public canvas: ControlPaletaService , public route: Router,
              public userService: WebuserService,
              public HTMLTag: GetTagHTMLService) { }

  ngOnInit() {
    this.getTag();
    this.getColorPalets();
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
  getFun(){
    this.env.optA = !this.env.optA;
    switch(this.env.optA){
      case true:
        this.env._display = '';
      break;
      case false:
        this.env._display = 'none';
      break;
    }
  }

  getTag(){
    const setts = document.getElementById('selectordiv');
    console.log(setts);
  }


  // tslint:disable-next-line: only-arrow-functions
  timeEvent(time, obj, obj2, param) { setTimeout(function() {
    obj.style.display = param;
    obj2.style.display = param;
  }, time); }

  navLink() {
    this.route.navigate(['/', 'HomeView']);
  }

  getColorPalets() {
    this.canvas.GetPaleta().subscribe( x => {
      this.iColors = x;
      console.log(this.iColors);
    });
  }

  delPaleta(obj){
    this.canvas.DelPaleta(obj).subscribe();
  }

  saveColor() {
    Swal.fire({
      title: '¿Deseas guardar estos colores?',
      text: 'Recuerda que puedes eliminar esto más adelante',
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: '¡Sí, Guardar!'
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          '¡Color agregado!',
          'Tus colores han sido guardados',
          'success'
        );
        this.canvas.SavePaleta(this.colores).subscribe( x => {
          console.log(x);
        } );
      }
    });
  // this.canvas.SavePaleta(this.colores).subscribe( x => console.log(x));
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
    const tables = document.getElementById('tables');
    const Minimizar = document.getElementById('Minimizar');
    switch (this.togle) {
      case true:
        this.togle = false;
        dashA.style.animation = ' ease 1s hidElements';
        Minimizar.setAttribute('title', 'Minimizar');
        this.timeEvent(1000, dashA, tables, 'none');
        dashA.style.animation = 'ease 1s widthOutPerfil';
        dashA.style.width  = '0%';
        dashA.style.height = '0%';
        dashB.style.width  = '100%';
        // historyPedidos.style.animationName = 'widthHistoryIn';
        // setTimeout(function () {
        //   historyPedidos.style.width = '95%';
        // }, 500);
        break;
      case false:
        this.togle = true;
        Minimizar.setAttribute('title', 'Maximizar');
        // console.log(this.togle);
        dashA.style.animation = 'ease 1s showElementes';
        this.timeEvent(1000, dashA, tables, '');
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

  // closeSession(){
  //   this.router.navigate(['/Login']);
  // }

  logOut() {
    this.userService.logout();
    this.router.navigate(['\login']);
    this.env.header = false;
  }

}
