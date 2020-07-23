// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  header: false,
  nameUser: "",
  codCam: "",
  nameCam: "",
  numPis: "",
  tipoTrMu: "MU",

/*variables de mensajeria INICIO*/
  titleMesg: "",
  bodyMesg: "",
  notaMesg: "",
  icoTrue: 'icon-ok-2',
  icoFalse: '',
  _border: '',
/*variables de mensajeria FIN*/

  //estos son variables para el grafico
  codSiembra: '',

  //colores de los parametros
  Color_alm_proy: 'magenta',
  Color_alim_real: 'green',
  Color_peso_real: 'yellow',
  Color_creci_proy: 'aqua'


};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
