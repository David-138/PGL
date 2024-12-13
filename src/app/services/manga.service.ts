import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PagedResponse } from '../home/home.page';

@Injectable({
  providedIn: 'root'
})
export class MangaService {
  endpoint='http://localhost:8080/Manga'
  constructor(private httpClient: HttpClient) { }
  getMangas(page: number, size: number): Observable<PagedResponse> {
    return this.httpClient.get<PagedResponse>(`${this.endpoint}?page=${page}&size=${size}`);
  }
}

