import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Web_Paleta } from '../Models/Web_Paleta';
import { Cone } from '@amcharts/amcharts4/core';

@Injectable({
  providedIn: 'root'
})
export class ControlPaletaService {

  private apiURL = 'https://webapplicationsyscompsa20200728022748.azurewebsites.net/api';

  constructor(private http: HttpClient) { }

  SavePaleta(contents: Web_Paleta): Observable<Web_Paleta> {
    return this.http.post<Web_Paleta>(this.apiURL + '/AR_2-Canvas/CanvaSave' , contents);
  }

  DelPaleta(Id: Web_Paleta ): Observable<Web_Paleta> {
    return this.http.delete<Web_Paleta>(this.apiURL + '/AR_2-Canvas/DelCanvas/' + Id);
  }

  GetPaleta(): Observable<Web_Paleta[]> {
    return this.http.get<Web_Paleta[]>(this.apiURL + '/AR_2-Canvas/GetCanvas');
  }
  
}
