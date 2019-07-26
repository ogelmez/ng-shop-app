import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http'
import { Observable,throwError } from 'rxjs';
import { Product } from '../product/product';
import { tap, catchError } from 'rxjs/operators';
@Injectable()
export class CategoryService {

  constructor(private http:HttpClient) { }
  path="http://localhost:3000/categories"

  getCategories():Observable<Product[]>{
    return this.http.get<Product[]>(this.path)
    .pipe(tap(data=>console.log(JSON.stringify(data))),catchError(this.handleError))
      
  }
  handleError(err: HttpErrorResponse){
    let errorMessage=""
    if(err.error instanceof ErrorEvent){
      errorMessage="Bir hata ile karşılaşıldı" + err.error.message
    }
    else{
      errorMessage="Sistemsel bir hata ile karşılaşıldı"
    }
    return throwError(errorMessage)
  }
}
