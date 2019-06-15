import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {API_URL} from '../../models/apiURLs';
import { Category } from 'src/models/category';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocatorService {

  constructor(private http: HttpClient) { }

  getAllCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(API_URL.BaseURL + API_URL.GetAllCategories);
  }
}
