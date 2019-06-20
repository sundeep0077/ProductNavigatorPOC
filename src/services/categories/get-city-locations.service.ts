import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import {API_URL} from '../../models/apiURLs';
import { Category } from 'src/models/category';
import { Observable } from 'rxjs';
import { WalmartLocations } from 'src/models/walmartLocations';

@Injectable({
  providedIn: 'root'
})
export class GetCityLocationsService {

  constructor(private http: HttpClient) { }

  getCityLocs(city: string): Observable<WalmartLocations[]> {
    const parameters = new HttpParams().set('city', city);
    return this.http.get<WalmartLocations[]>(API_URL.BaseURL + API_URL.GetCityLocations, {params: parameters});
  }
}
