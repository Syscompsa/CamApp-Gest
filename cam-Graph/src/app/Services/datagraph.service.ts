import { Injectable, Inject } from '@angular/core';
import { ISsp_031e } from '../Models/ISsp_0314e';
import { SP_GRAFICAWEB } from '../Models/SP_GRAFICAMWEB';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DatagraphService {
  private apiURL = 'https://webapplicationsyscompsa20200728022748.azurewebsites.net';
  // private apiURL = 'http://syscompsa.somee.com/api';
  // http://www.syscompsa.somee.com/api/AR_1-GraficasCamApp/GetGenView
  // https://ecuapirest.firebaseio.com/0.json
  // this.apiURL + "/AR_1-GraficasCamApp/sp_0314e"
  constructor(private http: HttpClient) { }

  getsp_0314e(Siembra: string): Observable<ISsp_031e[]> {
    return this.http.get<ISsp_031e[]>(this.apiURL + '/AR_1-GraficasCamApp/sp_0314e/' + Siembra);
  }

  getSP_GRAFICAWEB(Siembra: string): Observable<SP_GRAFICAWEB[]> {
    return this.http.get<SP_GRAFICAWEB[]>(this.apiURL + '/AR_1-GraficasCamApp/SP_GRAFICAWEB/' + Siembra);
  }
}
