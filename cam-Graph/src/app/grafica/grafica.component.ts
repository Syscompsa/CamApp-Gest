import { Component, OnInit, NgZone, Input, Host, SimpleChanges } from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import { environment } from 'src/environments/environment';
import { SP_GRAFICAWEB } from '../Models/SP_GRAFICAMWEB';
import { DatagraphService } from '../Services/datagraph.service';
import { DataGraphGenComponent } from '../data-graph-gen/data-graph-gen.component';
import { resolve } from 'url';

am4core.useTheme(am4themes_animated);

@Component({
  selector: 'app-grafica',
  templateUrl: './grafica.component.html',
  styleUrls: ['./grafica.component.css']
})

export class GraficaComponent implements OnInit {


  // tslint:disable-next-line: variable-name
  public InterSP_GRAFICAWEB: SP_GRAFICAWEB[] = [];
  public env = environment;
  public sHeight = screen.height;
  public aplyHeight: any = this.sHeight - 350;
  public finalHeight: string = this.aplyHeight + 'px';
  public fechaMod;
  public pesoProy;
  public pesoReal;
  public alimRal;
  public alimProy;
  public alReal: string = 'Alim. Real';
  public chart: any;
  public EnvsData = [];
  // tslint:disable-next-line: variable-name
  public _valueSeries: string;

  constructor(public datagraph: DatagraphService) { }

  // tslint:disable-next-line: variable-name
  private _RecValorA: number;
  // tslint:disable-next-line: variable-name
  private _RecValorB: number;
  // tslint:disable-next-line: variable-name
  private _ColorA: string;
  // tslint:disable-next-line: variable-name
  private _ColorB: string;
  // tslint:disable-next-line: variable-name
  private _ColorC: string;
  // tslint:disable-next-line: variable-name
  private _ColorD: string;


  @Input()
  set RecValorA(value: number) {
    this._RecValorA = value;
  }
  get RecValorA(): number {
    return this._RecValorA;
  }

  @Input() set RecValorB(value: number) {
    this._RecValorB = value;
  }
  get RecValorB(): number {
    return this._RecValorB;
  }

  @Input() set ColorA(value: string) {
    this._ColorA = value;
  }
  get ColorA(): string {
    return this._ColorA;
  }

  @Input() set ColorB(value: string ) {
    this._ColorB = value;
    console.log(this._ColorB);
  }
  get ColorB(): string {
    return this._ColorB;
  }

  @Input() set ColorC(value: string) {
    this._ColorC = value;
  }
  get ColorC(): string {
    return this._ColorC;
  }

  @Input() set ColorD(value: string) {
    this._ColorD = value;
  }
  get ColorD(): string {
    return this._ColorD;
  }


  ngOnInit() {
    // tslint:disable-next-line: no-unused-expression
  }

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnChanges(changes: SimpleChanges): void {
    // tslint:disable-next-line: no-unused-expression
    // console.log('GA: ' + this._RecValorA);
    // console.log('GB: ' + this._RecValorB);
    this.grafica(this._RecValorA, this._RecValorB, this.ColorA, this.ColorB, this.ColorC, this.ColorD);
  }

  changeValue(valor){
    this._valueSeries = valor;
  }

  grafica(valA, valB, colorA, colorB, colorC, colorD) {
    // tslint:disable-next-line: deprecation
    this.datagraph.getSP_GRAFICAWEB(this.env.codSiembra).subscribe(
      x => {
        am4core.useTheme(am4themes_animated);
        // Themes end
        let chart = am4core.create('chartdiv', am4charts.XYChart);
        this.InterSP_GRAFICAWEB = x;
        let data = [];
        for (let i = 0; i <= this.InterSP_GRAFICAWEB.length - 1; i++) {

          this.pesoProy = this.InterSP_GRAFICAWEB[i].creci_proy * valA;
          this.pesoReal = this.InterSP_GRAFICAWEB[i].peso_real * valA;
          this.alimRal = this.InterSP_GRAFICAWEB[i].alim_real / valB ;
          this.alimProy = this.InterSP_GRAFICAWEB[i].alim_proy / valB;

          data.push({
            date: this.InterSP_GRAFICAWEB[i].fechaMod,
            value: this.pesoProy,
            value2: this.pesoReal,
            value3: this.alimRal,
            value4: this.alimProy,
            previousDate: this.InterSP_GRAFICAWEB[i].fechaMod
          });
          // console.log(data);
        }

        chart.data = data;
        // Create axes
        let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
        dateAxis.renderer.minGridDistance = 60;

        let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

        // Create series creci_proy
        const series = chart.series.push(new am4charts.LineSeries());
        series.dataFields.valueY = 'value';
        series.name = 'Peso Proy.';
        series.dataFields.dateX = 'date';
        series.strokeWidth = 2;
        series.stroke = am4core.color(colorA);
        series.minBulletDistance = 10;
        series.strokeDasharray = '3,4';
        // series.fillOpacity = 0.5;
        // series.propertyFields.stroke = this.ColorA;
        // series.propertyFields.fill = this.ColorA;

        // // Create series peso_real
        const series2 = chart.series.push(new am4charts.LineSeries());
        series2.dataFields.valueY = 'value2';
        series2.dataFields.dateX = 'date';
        series2.name = 'Peso Real';
        series2.strokeWidth = 2;
        series2.stroke = am4core.color(colorB);
        series2.tensionX = 0.8;
        series2.stroke = series2.stroke;
        // series.fillOpacity = 0.5;
        // series.propertyFields.stroke = this.ColorA;
        // series.propertyFields.fill = this.ColorA;

        // // Create series alim_real
        const series3 = chart.series.push(new am4charts.LineSeries());
        series3.dataFields.valueY = 'value3';
        series3.dataFields.dateX = 'date';
        series3.name = 'Alim. Real';
        series3.strokeWidth = 2;
        series3.stroke = am4core.color(colorC);
        series3.tensionX = 0.8;
        series3.stroke = series3.stroke;

        // // Create series alim_proy
        const series4 = chart.series.push(new am4charts.LineSeries());
        series4.dataFields.valueY = 'value4';
        series4.name = 'Alim. Proyectada';
        series4.dataFields.dateX = 'date';
        series4.strokeWidth = 2;
        series4.stroke = am4core.color(colorD);
        series4.tensionX = 0.8;
        series4.strokeDasharray = '3,4';
        series4.stroke = series4.stroke;

        series.tooltipText = '[bold]{date.formatDate()}:[/] {value}' +
          '\n[bold]{date.formatDate()}: [/] {value2}' +
          '\n[bold]{date.formatDate()}:[/] {value3}' +
          '\n[bold]{date.formatDate()}:[/] {value4}';
        series.tooltip.pointerOrientation = 'vertical';

        // let bullet = series.bullets.push(new am4charts.CircleBullet());
        // bullet.circle.radius = 6;
        // bullet.circle.fill = am4core.color("#fff");
        // bullet.circle.strokeWidth = 3;

        // let bullet2 = series2.bullets.push(new am4charts.CircleBullet());
        // bullet2.circle.radius = 6;
        // bullet2.circle.fill = am4core.color("#fff");
        // bullet2.circle.strokeWidth = 3;

        // let bullet3 = series3.bullets.push(new am4charts.CircleBullet());
        // bullet3.circle.radius = 6;
        // bullet3.circle.fill = am4core.color("#fff");
        // bullet3.circle.strokeWidth = 3;

        // let bullet4 = series4.bullets.push(new am4charts.CircleBullet());
        // bullet4.circle.radius = 6;
        // bullet4.circle.fill = am4core.color("#fff");
        // bullet4.circle.strokeWidth = 3;


        chart.cursor = new am4charts.XYCursor();
        chart.cursor.snapToSeries = series;
        chart.cursor.xAxis = dateAxis;
        chart.scrollbarY = new am4core.Scrollbar();
        chart.scrollbarX = new am4core.Scrollbar();
        chart.legend = new am4charts.Legend();
  });

  }
}
