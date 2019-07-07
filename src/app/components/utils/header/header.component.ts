import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private route: Router,
              private toastr: ToastrService
    ) { }

  ngOnInit() {
  }
  logout() {
    localStorage.removeItem('adminToken');
    this.route.navigate(['login']);
    this.toastr.success('Logout successfully!');
  }
}
