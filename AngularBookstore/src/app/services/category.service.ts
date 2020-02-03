import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private _http : HttpClient) { }

  getAllCategories()
  {
    return this._http.get(environment.apiBaseURI + '/category/GetAllCategories');
  }
}
