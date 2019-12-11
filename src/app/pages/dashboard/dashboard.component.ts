import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/_services/dashboard.service';
import { getLocaleDateFormat } from '@angular/common';
import { LocationScanCount } from 'src/app/_models/location-scan-count';
import { AnalyticsService } from 'src/app/_services/analytics.service';

// tslint:disable: no-string-literal
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  numberOfUsers: any;
  numberOfLocations: any;
  scannedToday: any;
  locationScansCount: LocationScanCount[];

  constructor(private dashboardService: DashboardService, private analyticsService: AnalyticsService) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.dashboardService.getNumberOfUsers().subscribe(response => {
      if (response) {
        this.numberOfUsers = response['value'];
      }
    });

    this.dashboardService.getNumberOfLocations().subscribe(response => {
      if(response) {
        this.numberOfLocations = response['value'];
      }
    });

    this.dashboardService.getTodayDiscoveredLocations().subscribe(response => {
      if(response) {
        this.scannedToday = response['value'];
      }
    });

    this.analyticsService.getLocationsWithTimesScanned().subscribe(response => {
      this.locationScansCount = response.sort(function(obj1, obj2) {
        return obj2.scanCount - obj1.scanCount;
      }).slice(0, 3);
    });
  }

}
