import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Category } from '../_models/category';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  apiUrl = environment.baseUrl + 'categories/';

  constructor(private http: HttpClient) { }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.apiUrl);
  }

  getCategory(id: number) {
    return this.http.get<Category>(this.apiUrl + id);
  }

  createCategory(category: Category) {
    return this.http.post(this.apiUrl, category);
  }

  updateCategory(id: number, category: Category) {
    return this.http.put(this.apiUrl + id, category);
  }

  deleteCategory(id: number) {
    return this.http.delete(this.apiUrl + id);
  }
}
