import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from 'src/app/_services/analytics.service';
import { Label } from 'ng2-charts';
import { ChartType, ChartOptions, ChartDataSets } from 'chart.js';
import { LocationScanCount } from 'src/app/_models/location-scan-count';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.css']
})
export class AnalyticsComponent implements OnInit {
  genderCountData: any = [0, 0, 0];
  genderCountLabels: Label[] = ['Male', 'Female', 'Other'];
  genderCountChartType: ChartType = 'doughnut';

  ageCountData: any = [0, 0, 0, 0];
  ageCountLabels: Label[] = ['0-18', '19-30', '31-40', '40+'];
  ageCountChartType: ChartType = 'doughnut';

  countryCountData: any = [0, 0, 0, 0];
  countryCountLabels: Label[] = ['Croatia', 'United Kingdom', 'Germany', 'Russia'];
  countryCountChartType: ChartType = 'doughnut';

  scanByMonthsDataArray: any = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  scanByMonthsData: ChartDataSets[] = [
    {data: this.scanByMonthsDataArray, label: ''}
  ];
  scanByMonthsLabels: Label[] = ['January', 'February', 'March', 'April', 'May',
                                 'June', 'July', 'August', 'September', 'October',
                                 'November', 'December'];
  scanByMonthLegend = true;
  scanByMonthChartType: ChartType = 'bar';
  scanByMonthPlugins = [];
  scanByMonthOptions: ChartOptions = {
    responsive: true
  };

  locationScansCount: LocationScanCount[];

  constructor(private analyticsService: AnalyticsService) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.analyticsService.getUsersGenderCount().subscribe(response => {
      this.genderCountData = response;
    });

    this.analyticsService.getUsersAgeCount().subscribe(response => {
      this.ageCountData = response;
    });

    this.analyticsService.getUsersCountryCount().subscribe(response => {
      this.countryCountData = response;
    });

    this.analyticsService.getScansByMonth().subscribe(response => {
      this.scanByMonthsDataArray = response;

      this.scanByMonthsData = [
        {data: this.scanByMonthsDataArray, label: 'Number of scans'}
      ];
    });

    this.analyticsService.getLocationsWithTimesScanned().subscribe(response => {
      this.locationScansCount = response.sort(function(obj1, obj2) {
        return obj2.scanCount - obj1.scanCount;
      });
    });
  }

}
