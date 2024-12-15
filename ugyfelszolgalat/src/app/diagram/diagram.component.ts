import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import Chart from 'chart.js/auto';
import { registerables } from 'chart.js/auto';
import { Service } from '../service.service';



Chart.register(...registerables);
@Component({
  selector: 'app-diagram',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './diagram.component.html',
  styleUrl: './diagram.component.css'
})
export class DiagramComponent implements OnInit {

  data: any;
  varosokdb: any[] = [];
  varos: any[] = [];
  varosok: any[] = []
  db: any = {};

  constructor(private dataService:Service, private http: HttpClient) { }

  ngOnInit(): void {
    this.getUgyfelszolgalatData();
    this.fillChartData()
    this.renderChart(this.varosok, this.db)
    
  }
  
  fillChartData()
  {

    this.varosokdb = Object.values(this.data || {});
    for(let item of this.varosokdb)
    {
      this.varos.push(item.varos)
    }

    this.varosok = Array.from(new Set(this.varos));
    console.log(this.varosok)
    this.varos.forEach(element => {
      if(this.db[element])
      {
        this.db[element] += 1;
      }
      else{
        this.db[element] = 1;
      }
    });
  }

  getUgyfelszolgalatData() {
    this.dataService.getData().subscribe(res =>{
      this.data = res;
    });
  }


  renderChart(varosok: any[], db: any[]) {

    const chart = new Chart("chart", {
      type: 'bar',
      data: {
        labels: varosok,
        datasets: [{
          label: 'Városok',
          data: db,
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
}
