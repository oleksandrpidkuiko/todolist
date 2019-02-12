import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-chart-results',
  templateUrl: './chart-results.component.html',
  styleUrls: ['./chart-results.component.scss']
})
export class ChartResultsComponent implements OnInit {
  public chartType = 'doughnut';
  public countInProgress = this.dataService.countInProgress();
  public countDoneTask = this.dataService.countDoneTask();

  public chartDatasets: Array<any> = [
    { data: [this.countInProgress, this.countDoneTask], label: 'Result chart' }
  ];

  public chartLabels: Array<any> = ['In progress', 'Done'];

  public chartColors: Array<any> = [
    {
      backgroundColor: ['#F7464A', '#006400'],
      hoverBackgroundColor: ['#F7464A', '#006400'],
      borderWidth: 2,
    }
  ];

  public chartOptions: any = {
    responsive: true
  };
  public chartClicked(e: any): void { }
  public chartHovered(e: any): void { }

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

}
