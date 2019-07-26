import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http'
import { Product } from '../product/product';
import { Observable, throwError } from 'rxjs';
import {tap,catchError} from 'rxjs/operators/'

@Injectable()
export class ProductService {
  path = " http://localhost:3000/products";
  constructor(private http:HttpClient) { }
  
  getProduct(categoryId):Observable<Product[]>{
    let newPath=this.path;
    if(categoryId){
      newPath +="?categoryId="+ categoryId // eğer kategori id gelirse new pathe ekle demek istedik.
    }
   return this.http.get<Product[]>(newPath)
   .pipe(tap(data=>console.log(JSON.stringify(data))),
   catchError(this.handleError));
  
  } 
  handleError(err: HttpErrorResponse) { // HttpErrorResponse tipinde döndrür hatayı
    let errorMessage=""
  if(err.error instanceof ErrorEvent){ // intance of ile hatanın Bir ErrorEvent mi olduğunu gösteriyoruz
    errorMessage="Bir hata oluştu" + err.error.message
  }
  else{
    errorMessage="Sistemsel bir hata oluştu."
  }
  return throwError( errorMessage)
  }
}
