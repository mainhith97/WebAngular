import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  dashboardForm: FormGroup;
  res: any;
  data: any;
  errorMessage: string;
  constructor(

      private dashboardService: DataService,

  ) {}
  ngOnInit() {
    this.getAmountStatistics();
  }
  getAmountStatistics() {

    this.dashboardService.getAmount().subscribe(res => {
      this.res = res;
      if (this.res.success) {
        this.data = this.res.result;
      }
    });
  }
}
