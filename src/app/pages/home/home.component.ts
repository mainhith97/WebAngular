import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
// tslint:disable-next-line: max-line-length
  styleUrls: ['./home.component.scss', '../../components/utils/dashboard/dashboard.component.scss', '../../components/utils/sidebar/sidebar.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
