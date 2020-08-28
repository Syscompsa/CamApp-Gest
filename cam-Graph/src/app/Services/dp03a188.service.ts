import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Idp03a188 } from '../Models/Dp03a188';

@Injectable({
  providedIn: 'root'
})
export class Dp03a188Service {

  private apiURL = 'https://camar.azurewebsites.net/api';
  // http://www.syscompsa.somee.com/api/AR_1-GraficasCamApp/GetGenView
  // https://ecuapirest.firebaseio.com/0.json
  // this.apiURL + "/AR_1-GraficasCamApp/GetGenView"
  constructor(private http: HttpClient) { }

  GetGestion(): Observable<Idp03a188[]> {
    return this.http.get<Idp03a188[]>(this.apiURL + '/AR_1-GraficasCamApp/GetGenView');
  }
}
