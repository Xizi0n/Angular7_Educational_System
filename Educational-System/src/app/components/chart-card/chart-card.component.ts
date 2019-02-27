import { Component, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-chart-card',
  templateUrl: './chart-card.component.html',
  styleUrls: ['./chart-card.component.css']
})
export class ChartCardComponent implements OnInit {
  @ViewChild('myChart') private chartRef;
  chart: any;

  constructor() {
  }

  ngOnInit() {
    const mockData = {
      datasets: [{
        data: [20, 5],
        backgroundColor: [
          '#FF6384',
          '#00A1E7'
        ]
      }],
      labels: [
        'Megoldatlan',
        'Megoldott'
      ],
    };

    this.chart = new Chart(this.chartRef.nativeElement, {
      type: 'doughnut',
      data: mockData
    });
  }

}
