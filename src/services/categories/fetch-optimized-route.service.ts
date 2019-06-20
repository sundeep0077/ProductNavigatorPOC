import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {API_URL} from '../../models/apiURLs';
import { Category } from 'src/models/category';
import { Observable } from 'rxjs';
import { OptimizedRouteProductDTO } from 'src/models/OptimizedRouteProductDTO';
import { RouteSavings } from 'src/models/routeSavings';

@Injectable({
  providedIn: 'root'
})
export class FetchOptimizedRouteService {

  constructor(private http: HttpClient) { }

  fetchOptimizedPath(productIds: Array<number>): Observable<RouteSavings> {
    return this.http.post<RouteSavings>(API_URL.BaseURL + API_URL.FetchOptimizedRoute, productIds);
  }
}
