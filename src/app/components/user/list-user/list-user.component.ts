import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit {
  res: any;
  data: any;
  page = 1;
  limit = 10;

  constructor(
      private userService: DataService
  ) {}

  ngOnInit() {
    this.getListUser();
  }

  getListUser() {

    this.userService.getListUser(this.page, this.limit).subscribe(res => {
      this.res = res;
      if (this.res.success) {
                this.data = this.res.result.data;
      }
    });
  }
}


