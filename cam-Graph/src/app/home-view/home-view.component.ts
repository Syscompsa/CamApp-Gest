import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Idp03a188 } from '../Models/Dp03a188';
import { Dp03a188Service } from '../Services/dp03a188.service';

@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.css']
})
export class HomeViewComponent implements OnInit {

  public dbGenGestion: Idp03a188[] = [];
  public codigoSiembra;
  public env = environment;
  constructor(public gestGeneral: Dp03a188Service,
    public router: Router) { }
    ngOnInit() {
      this.GestionesGen();
    }
  
    GestionesGen() {
      this.gestGeneral.GetGestion().subscribe(
        x => {          
          //console.log(x);
          this.dbGenGestion = x;
          console.log(this.dbGenGestion);        
        })
      
    }
    GetCodSiembra(dato) {
      this.env.codSiembra = dato;
      console.log(this.codigoSiembra);
      this.router.navigate(['/DataGraph']); 
      
    }

    changeColorTabla(property){
      let viewWeb = document.getElementById('viewWeb');
      let viewMobil = document.getElementById('viewMobil');
      viewWeb.setAttribute("class", property);
    }
  

}
