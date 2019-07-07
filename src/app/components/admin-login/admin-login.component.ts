import { DataService } from './../../services/data.service';
import { Component, OnInit} from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ILogin } from './../../shared/interface';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss', './util.css']
})
export class AdminLoginComponent implements OnInit {

  loginForm: FormGroup;
    res: any;
    errorMessage: string;

    constructor(
        private toastr: ToastrService,
        private formBuilder: FormBuilder,
        private loginService: DataService,
        private router: Router
    ) {}

    ngOnInit() {
      this.buildForm();
    }

    buildForm() {
        this.loginForm = this.formBuilder.group({
            username: [''],
            password: ['']
        });
    }
    submit({ value }: { value: ILogin }) {
        return this.loginService.postLogin(value).subscribe(res => {
            this.res = res;
            if (this.res.success) {
              console.log(res);
              localStorage.setItem('adminToken', this.res.result.token);
              this.toastr.success('Login successfully!');
              this.router.navigate(['home']);
            } else {
              console.log(res);
              this.toastr.error('Username or password incorrect');
            }
        });
    }

  }
