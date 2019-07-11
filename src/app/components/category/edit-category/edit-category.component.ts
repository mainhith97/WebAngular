import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { DataService } from 'src/app/services/data.service';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { IEditCategory } from 'src/app/shared/interface';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.scss']
})
export class EditCategoryComponent implements OnInit {
  editCategoryForm: FormGroup;
  res: any;
  errorMessage: string;
  nations: any;
  data: any;
  id: string;

  constructor(
      private toastr: ToastrService,
      private formBuilder: FormBuilder,
      private categoryService: DataService,
      private router: Router,
      private route: ActivatedRoute
  ) {}
  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = params.id;
      this.getDetailCategory(this.id);
    });
    this.buildForm();

  }

  buildForm() {
      this.editCategoryForm = this.formBuilder.group({
          name: [''],
          ballotNumber: [''],
          startDate: [''],
          endDate: [''],
          id: [this.id]
      })
  }

  getDetailCategory(id) {
      this.categoryService.getDetailCategory(id).subscribe(res => {
          this.res = res;

          if(this.res.success) {
              this.data = this.res.result;
              this.editCategoryForm.controls.name.setValue(this.data.name);
              this.editCategoryForm.controls.ballotNumber.setValue(this.data.ballotNumber);
              this.editCategoryForm.controls.startDate.setValue(this.data.startDate);
              this.editCategoryForm.controls.endDate.setValue(this.data.endDate);
              this.editCategoryForm.controls.id.setValue(this.id);
          }
      });
  }

  submit({ value }: { value: IEditCategory }) {
      this.categoryService.postEditCategory(value).subscribe(res => {
          this.res = res;
          if(this.res.success) {
              this.toastr.success('Edit Category successfully!');
              this.router.navigate(['category']);
          } else {
              this.toastr.error(this.res.error.code || this.res.error);
          }
      });
  }
}
