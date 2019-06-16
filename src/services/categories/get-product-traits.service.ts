import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {API_URL} from '../../models/apiURLs';
import { Category } from 'src/models/category';
import { Observable } from 'rxjs';
import { ProductHeaderTraits } from 'src/models/ProductHeaderTraits';

@Injectable({
  providedIn: 'root'
})
export class GetProductTraitsService {

  constructor(private http: HttpClient) { }

  getProductTraits(categoryIds: Array<number>): Observable<ProductHeaderTraits[]> {
    return this.http.post<ProductHeaderTraits[]>(API_URL.BaseURL + API_URL.GetProductTraits, categoryIds);
  }
}
