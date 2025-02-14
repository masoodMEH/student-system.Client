import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AddCategoryRequest } from '../models/add-category-request.models';
import { category } from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  constructor(private http: HttpClient) { }

  addCategory(model: AddCategoryRequest): Observable<void> {
    return this.http.post<void>('http://localhost:5120/api/Categories', model);
  }

  getAllCategories(): Observable<category[]> {
    return this.http.get<category[]>('http://localhost:5120/api/Categories');
  }
}
