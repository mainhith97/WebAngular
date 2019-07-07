import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit {

  loginForm: FormGroup;
  res: any;
  data: any;
  errorMessage: string;

  page = 1;
  limit = 10;
  config: any;

  constructor(
      private toastr: ToastrService,
      private userService: DataService,
      private router: Router
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


