import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Dp03a188Service } from './Services/dp03a188.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'cam-Graph';
constructor(

  public route: Router, public http: HttpClient, public DataDp03a188: Dp03a188Service

){}
  ngOnInit() {


  }



}
