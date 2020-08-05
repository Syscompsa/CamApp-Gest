import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetTagHTMLService {

  constructor() { }

  getTAG(TAGobgect, collects){
    var pers = collects;
    switch (pers) {
      case 'class':
        let TAG_class = document.getElementsByClassName(TAGobgect);
      break;
      case 'id':
        let TAG_id = document.getElementById(TAGobgect);
       break;
      case 'tag':
        let TAG_tag = document.getElementsByTagName(TAGobgect);
      break;
      default:
        let TAG = document.getElementById(TAGobgect);
      break;
    }
  }

}
