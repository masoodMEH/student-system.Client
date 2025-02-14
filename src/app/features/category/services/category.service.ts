import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../../../environments/environment.development';
import { AddCategoryRequest } from '../models/add-category-request.models';
import { category } from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  constructor(private http: HttpClient) { }

  addCategory(model: AddCategoryRequest): Observable<void> {
    return this.http.post<void>(`${environment.apiBaseUrl}/api/Categories`, model);
  }

  getAllCategories(): Observable<category[]> {
    return this.http.get<category[]>(`${environment.apiBaseUrl}/api/Categories`);
  }
}
