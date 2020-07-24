import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { DatagraphService } from '../Services/datagraph.service';
import { ISsp_031e } from '../Models/ISsp_0314e';

@Component({
  selector: 'app-data-graph-gen',
  templateUrl: './data-graph-gen.component.html',
  styleUrls: ['./data-graph-gen.component.css']
})
export class DataGraphGenComponent implements OnInit {

  public env = environment;
  // tslint:disable-next-line: variable-name
   public InterISsp_031e: ISsp_031e[] = [];
   public sHeight = screen.height;
   public aplyHeight: any = this.sHeight - 350;
   public finalHeight: string = this.aplyHeight + 'px';

  constructor(public datagraph: DatagraphService) { }

  ngOnInit() {
    this.getSp_0314e();
    // console.log(this.env.codSiembra);
    // this.getSp_0314e();
  }


  // tslint:disable-next-line: variable-name
  getSp_0314e = () => this.datagraph.getsp_0314e(this.env.codSiembra).subscribe(x => {
    this.InterISsp_031e = x;
    console.log(this.InterISsp_031e);
    // console.log(this.InterISsp_031e[0].camaron);
   }
  )

}
