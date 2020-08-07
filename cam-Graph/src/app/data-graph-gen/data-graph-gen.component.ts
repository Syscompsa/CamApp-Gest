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
   public _id_color;

  // variables para input color [INICIO]
  // tslint:disable-next-line: variable-name
  public _colorsA;
  // tslint:disable-next-line: variable-name
  public _colorsB;
  // tslint:disable-next-line: variable-name
  public _colorsC;
  // tslint:disable-next-line: variable-name
  public _colorsD;
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
  public iColorsGET: any [] = [];
  public iColorsGETById: any [] = [];
  public _activeA:string;
  public _activeB:string;
  public _activeC:string;
  public _activeD:string;
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

  getInpColor(colorA, colorB, colorC, colorD){
    this.colores.Color_A = colorA;
    this.colores.Color_B = colorB;
    this.colores.Color_C = colorC; 
    this.colores.Color_D = colorD;
    //console.log(this.colores);
  }
  
  getFunA(obj){
    this.env.optA = !this.env.optA;
    switch(this.env.optA){
      case true:
        this.active(obj, 'orange');
        this.env._display = '';
        // console.log(this.env.optA);
      break;
      case false:        
      this.active(obj, 'steelblue');
      this.env._display = 'none';
        // console.log(this.env.optA);
      break;
    }
  }

  getFunB(obj){
    this.env.optB = !this.env.optB;
    switch(this.env.optB){
      case true:
        this.active(obj, 'orange');
        this.env._displayB = '';
        // console.log(this.env.optA);
      break;
      case false:        
      this.active(obj, 'steelblue');
      this.env._displayB = 'none';
        // console.log(this.env.optA);
      break;
    }
  }

  active(obj, color){
    let activeElement = document.getElementById(obj);
    activeElement.style.backgroundColor = color;
    
  }

  getTag(){
    const setts = document.getElementById('selectordiv');
    //console.log(setts);
  }

  // tslint:disable-next-line: only-arrow-functions
  timeEvent(time, obj, obj2, param) { setTimeout(function() {
    obj.style.display = param;
    obj2.style.display = param;
  }, time); }

  navLink() {
    this.route.navigate(['/', 'HomeView']);
  }

  selectPaleta(id){
    console.log(id);
    this.canvas.GetPaletaById(id).subscribe(x=>{ console.log(x);
        this.iColorsGETById = x;
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Asignando paleta de colores.',
          foote: 'Un momento.',
          showConfirmButton: false,
          timer: 2000
        });
        this._colorsA = this.iColorsGETById[0].color_A; 
        this._colorsB = this.iColorsGETById[0].color_B; 
        this._colorsC = this.iColorsGETById[0].color_C; 
        this._colorsD = this.iColorsGETById[0].color_D;
    });
  }

help(){
  //console.log('help')
  Swal.mixin({

    confirmButtonText: 'Next &rarr;',
    showCancelButton: true,
    progressSteps: ['1', '2', '3']
  }).queue([
    {
      title: 'Paso 1',
      html: '<p class="test">Toca el gráfico en la fecha inicial y desliza con el dedo, hacia la fecha a consultar</p><br>'
      +'<img src="../../assets/Guia-Usuario/Dibujar-dedo.png">'
    },
    {
      title: 'Paso 2',
      html: '<p class="test">Toca el gráfico para visualizar los datos</p><br>'
      +'<img src="../../assets/Guia-Usuario/Clickear-dedo.png">'
    },
    {
      title: 'Paso 3',  
      html: '<p class="test">Presiona el botón minimizar</p><br>'
      +'<img src="../../assets/Guia-Usuario/Minimizar-dedo.png">'
    }
  ]).then((result) => {
      Swal.fire({
        icon: 'success',
        title: '¿Comprendido?',
        confirmButtonText: '¡Genial!'
      })    
  })
}


  getColorPalets() {
    if(screen.width <= 800 ){
    this.canvas.GetPaleta().subscribe( x => {
      this.iColors = x;
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Cargando las animaciones y colores.',
        foote: 'Un momento.',
        showConfirmButton: false,
        timer: 3000
      });
      let coloresPaleta = this.iColors.length -1;
      this._colorsA = this.iColors[coloresPaleta].color_A; 
      this._colorsB = this.iColors[coloresPaleta].color_B; 
      this._colorsC = this.iColors[coloresPaleta].color_C; 
      this._colorsD = this.iColors[coloresPaleta].color_D;
      console.log(this.iColors);
    });
  
  }
else {
  document.getElementById('documentacion').style.display = 'none';
}
}

  delPaleta(obj){
    this.canvas.DelPaleta(obj).subscribe(
      x=>{
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Eliminando, un momento porfavor.',
          showConfirmButton: false,
          timer: 1100
        });
        this.getColorPalets();
      }
    );

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
          this.getColorPalets();
          //console.log(x);
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
    //console.log(valB);
    this.env.escB = valB;
    //console.log('escB ' + this.env.escB);
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
