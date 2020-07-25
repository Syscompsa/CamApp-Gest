import { Component, OnInit, NgZone, Input, Host } from '@angular/core';
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
  public fechaMod: any = [];
  public pesoProy: any = [];
  public visits: number = 10;
  public pesoReal: any = [];
  public chart: any;
  public EnvsData = [];



  constructor(public datagraph: DatagraphService) { }

  @Input() RecValorA: number;
  @Input() RecValorB: number = 50;

  public ValorFinA: number;
  public ValorFinB: number;

  ngOnInit() {
    this.grafica();
    // tslint:disable-next-line: no-unused-expression
    console.log(this.env.escB);
    console.log( "InputB " + this.RecValorB);
  }

  grafica() {
    // tslint:disable-next-line: deprecation
    this.datagraph.getSP_GRAFICAWEB(this.env.codSiembra).subscribe(
      x => {
        am4core.useTheme(am4themes_animated);
        // Themes end
        let chart = am4core.create('chartdiv', am4charts.XYChart);
        this.InterSP_GRAFICAWEB = x;
        let data = [];
        for (let i = 0; i <= this.InterSP_GRAFICAWEB.length - 1; i++) {


          console.log(this.InterSP_GRAFICAWEB[i].alim_proy / this.env.escB);
          data.push({
            date: this.InterSP_GRAFICAWEB[i].fechaMod,
            value: this.InterSP_GRAFICAWEB[i].creci_proy,
            value2: this.InterSP_GRAFICAWEB[i].peso_real,
            value3: this.InterSP_GRAFICAWEB[i].alim_real ,
            value4: this.InterSP_GRAFICAWEB[i].alim_proy/ this.env.escB,
            previousDate: this.InterSP_GRAFICAWEB[i].fechaMod

          });

        }

        // console.log(data);
        chart.data = data;

        // Create axes
        let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
        dateAxis.renderer.minGridDistance = 30;

        let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

        // Create series creci_proy
        let series = chart.series.push(new am4charts.LineSeries());
        series.dataFields.valueY = 'value';
        series.dataFields.dateX = 'date';
        series.strokeWidth = 2;
        series.stroke = am4core.color(this.env.Color_creci_proy);
        series.minBulletDistance = 10;
        series.strokeDasharray = '3,4';

        // // Create series peso_real
        let series2 = chart.series.push(new am4charts.LineSeries());
        series2.dataFields.valueY = 'value2';
        series2.dataFields.dateX = 'date';
        series2.strokeWidth = 2;
        series2.fill = am4core.color('yellow');
        series2.stroke = am4core.color(this.env.Color_peso_real);
        series2.tensionX = 0.8;
        series2.stroke = series2.stroke;

        // // Create series alim_real
        let series3 = chart.series.push(new am4charts.LineSeries());
        series3.dataFields.valueY = 'value3';
        series3.dataFields.dateX = 'date';
        series3.strokeWidth = 1;
        series3.fill = am4core.color('yellow');
        series3.stroke = am4core.color(this.env.Color_alim_real);
        series3.tensionX = 0.8;
        series3.stroke = series3.stroke;

        // // Create series alim_proy
        let series4 = chart.series.push(new am4charts.LineSeries());
        series4.dataFields.valueY = 'value4';
        series4.dataFields.dateX = 'date';
        series4.strokeWidth = 1;
        series4.fill = am4core.color('yellow');
        series4.stroke = am4core.color(this.env.Color_alm_proy);
        series4.tensionX = 0.8;
        series4.strokeDasharray = '3,4';
        series4.stroke = series4.stroke;

        series.tooltipText = '[bold]{date.formatDate()}:[/] {value}' +
          '\n[bold]{date.formatDate()}: [/] {value2}' +
          '\n[bold]{date.formatDate()}:[/] {value3}' +
          '\n[bold]{date.formatDate()}:[/] {value4}';
        series.tooltip.pointerOrientation = 'vertical';

        chart.cursor = new am4charts.XYCursor();
        chart.cursor.snapToSeries = series;
        chart.cursor.xAxis = dateAxis;
        chart.scrollbarY = new am4core.Scrollbar();
        chart.scrollbarX = new am4core.Scrollbar();

  });

  }
}
