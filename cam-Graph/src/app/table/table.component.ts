import { Component, OnInit } from '@angular/core';
import { SP_GRAFICAWEB } from '../Models/SP_GRAFICAMWEB';
import { environment } from 'src/environments/environment';
import { DatagraphService } from '../Services/datagraph.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  // tslint:disable-next-line: variable-name
  public InterSP_GRAFICAWEB: SP_GRAFICAWEB[] = [];
  public env = environment;
  public sHeight = screen.height;
  public aplyHeight: any = this.sHeight - 350;
  public finalHeight: string = this.aplyHeight + 'px';
  public diaActual: any;
  public SumaId: number;
  public dateStringConv: string;

  constructor(public datagraph: DatagraphService) { }

  ngOnInit() {
    this.getDatagraphService();
    //console.log('Este es el codigo de la caronera ' + this.env.codCam);
    const f = new Date();
    const MesActual = (Number(f.getMonth()) + 1);
    const Year = f.getFullYear();
    const Day = f.getDate();
    let dataDate = Year + '-' + MesActual + '-' + Day;
    if (MesActual <= 9) { dataDate = Year + '-' + '0' + MesActual + '-' + Day; }
    this.dateStringConv = dataDate.toString();
  }

  getDatagraphService() {
     this.datagraph.getSP_GRAFICAWEB(this.env.codSiembra).subscribe(
    x => {
      this.InterSP_GRAFICAWEB = x;
      //console.log(this.InterSP_GRAFICAWEB);
      }
    );
  }
}
