import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { DataService } from 'src/app/services/data.service';
import { error } from 'util';

@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.scss']
})
export class ListCategoryComponent implements OnInit {
    res: any;
    data: any;
// tslint:disable-next-line: ban-types
    errorMessage: string;
    page = 1;
    limit = 10;
    totalItems = 10;

    constructor(
        private toastr: ToastrService,
        private categoryService: DataService,
    ) {}

    ngOnInit() {
      this.getListCategory();
    }

    getListCategory() {
      this.categoryService.getListCategory(this.page, this.limit).subscribe(res => {
          this.res = res;
          if (this.res.success) {
              this.data = this.res.result.data;
              this.totalItems = this.res.result.totalDoc;
          }
      });
  }
    removeCategory(id: any) {
      if (confirm('Are you sure you want to delete this?')) {
          this.categoryService.removeCategory(id).subscribe(res => {
              this.res = res;
              if (this.res.success) {
                  this.toastr.success('Delete Category successfully!');
                  this.getListCategory();
              } else {
                  this.toastr.error('Delete category Fail');
                  console.log(error);
              }
          });
      }
  }
}
