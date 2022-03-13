import { Component, ViewChild  } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import chartJs from 'chart.js';
import { InformacoesService } from '../../services/domain/informacoes.service';
import { informacoesDto } from '../../models/informacoes.dto';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';


@IonicPage()
@Component({
  selector: 'page-informacoes',
  templateUrl: 'informacoes.html',
})
export class InformacoesPage {

  @ViewChild('barCanvas') barCanvas;

  barChart: any;
  
  total: informacoesDto
  total2: informacoesDto
  total3: informacoesDto
  total4: informacoesDto

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public informacoesService: InformacoesService) {   
  }

  getCategorias() {
    this.informacoesService.findAllCategorias().subscribe(data => {
      this.total = data;
      console.log(this.total)
    }, error => {})
  }

  getClientes() {
    this.informacoesService.findAllClientes().subscribe(data => {
      this.total2 = data;
      console.log(this.total2)
    }, error => {})
  }

  getProdutos() {
    this.informacoesService.findAllProdutos().subscribe(data => {
      this.total3 = data;
      console.log(this.total3)
    }, error => {})
  }

  getPedidos() {
    this.informacoesService.findAllPedidos().subscribe(data => {
      this.total4 = data;
      console.log(this.total4)
    }, error => {})
  }

  ngAfterViewInit(){
    setTimeout(() => {
      this.barChart = this.getBarChart();
    }, 150)
  }

  getChart(context, chartType, data, options?) {
    return new chartJs(context, {
      data,
      options,
      type: chartType
    })
  }


  getBarChart(){
    const data = {
      labels: ['Clientes', 'Pedidos', 'Produtos', 'Categorias'],
      datasets: [{
        label: 'Registrado no sistema',
        data: [80,600,25,200],
        backgroundColor: [
          'rgb(255, 0, 0)',
          'rgb(20, 0, 255)',
          'rgb(255, 230, 0)',
          'rgb(0, 255, 10)'
        ],
        borderWidth: 1
      }]
    };

    const options = {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
    console.log(this.total4)
    return this.getChart(this.barCanvas.nativeElement, 'bar', data, options);
  }

}
