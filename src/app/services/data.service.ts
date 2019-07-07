import { Injectable } from '@angular/core';
import { ILogin, ICategory} from '../shared/interface';
import { Observable, throwError} from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { environment as config } from '../../environments/environment';

const adminToken = localStorage.getItem('adminToken');
console.log(adminToken);
const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      Authorization: `Bearer ${adminToken}`
    })
  };

@Injectable()
export class DataService {

    // apiUrl = "http://localhost:1994";

   constructor(
       private http: HttpClient
   ) {}
// tslint:disable-next-line: member-ordering
    apiUrl = config.apiUrl;

// tslint:disable-next-line: member-ordering
    adminPrefix = 'admin';
    s3Prefix = 's3';

   postLogin(userLogin: ILogin): Observable<boolean> {
       return this.http.post<boolean>(`${this.apiUrl}/${this.adminPrefix}/login`, userLogin)
          .pipe(
              map(response => {
                return response;
              }),
              catchError(this.handleError)
          );
   }
   getListUser(page, limit): Observable<boolean> {
    return this.http.get<boolean>(`${this.apiUrl}/${this.adminPrefix}/get-list-user?page=${page}&limit=${limit}`, httpOptions)
    .pipe(
        map(response => {
            return response;
        }),
        catchError(this.handleError)
    );
}

getAmount(): Observable<boolean> {
  return this.http.get<boolean>(`${this.apiUrl}/${this.adminPrefix}/amount-statistics`, httpOptions)
  .pipe(
      map(response => {
          return response;
      }),
      catchError(this.handleError)
  );
}

postCreateCategory(dataCategory: ICategory): Observable<boolean> {
  return this.http.post<boolean>(`${this.apiUrl}/${this.adminPrefix}/create-category`, dataCategory, httpOptions )
      .pipe(
          map(response => {
              return response;
          }),
          catchError(this.handleError)
      );
  }

getListCategory(page, limit): Observable<boolean> {
  return this.http.get<boolean>(`${this.apiUrl}/get-list-category?page=${page}&limit=${limit}`, httpOptions)
  .pipe(
      map(response => {
          return response;
      }),
      catchError(this.handleError)
  );
}

removeCategory(id): Observable<boolean> {
  return this.http.get<boolean>(`${this.apiUrl}/${this.adminPrefix}/delete-category?id=${id}`, httpOptions)
  .pipe(
      map(response => {
          return response;
      }),
      catchError(this.handleError)
  );
}
   handleError(error: HttpErrorResponse) {
    return throwError(error.error);
 }
}
