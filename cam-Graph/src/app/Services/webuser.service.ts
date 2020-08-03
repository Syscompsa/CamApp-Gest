import { Injectable } from '@angular/core';
import { Iwebuser } from '../Models/webuser';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebuserService {
  private apiURL = 'https://webapplicationsyscompsa20200728022748.azurewebsites.net/api';

  constructor(private http: HttpClient) { }
    
  login(user: Iwebuser): Observable<Iwebuser> {
    return this.http.post<Iwebuser>(this.apiURL + "/UserLogin/login", user);
  }

  logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("tokenExpiration");
  }

  estaLogueado(): boolean {

    var exp = this.obtenerExistenciaToken();

    if (!exp) {
      // el token no existe
      return false;
    }
     else {
      return true;
    }
  }

  obtenerExistenciaToken(): string {
    return localStorage.getItem("token");
  }


}
