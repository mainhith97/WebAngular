import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';
import { ICategory } from 'src/app/shared/interface';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.scss']
})
export class CreateCategoryComponent implements OnInit {

  categoryForm: FormGroup;
  res: any;
  data: any;
  errorMessage: string;
  nations: any;
// tslint:disable-next-line: ban-types
  disableBtn: Boolean;

  constructor(
      private toastr: ToastrService,
      private formBuilder: FormBuilder,
      private categoryService: DataService,
      private router: Router
  ) {}
  ngOnInit() {
    this.buildForm();
    // this.nations = this.data.nations;
    // this.checkEnable();
  }

  buildForm() {
      this.categoryForm = this.formBuilder.group({
          name: [''],
          ballotNumber: [''],
          startDate: [''],
          endDate: ['']
      });
  }

  submit({ value }: { value: ICategory }) {
      this.categoryService.postCreateCategory(value).subscribe(res => {
          this.res = res;
          if (this.res.success) {
              this.toastr.success('Create category successfully!');
              this.router.navigate(['category']);
          } else {
              this.toastr.error(this.res.error.code || this.res.error);
          }
      });
  }

  // checkEnable() {
  //     this.disableBtn = false;
  //     this.categoryForm.valueChanges.subscribe(() => {
  //         this.disableBtn = this.categoryForm.valid;
  //     });
  // }
}


