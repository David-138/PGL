import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Manga, PagedResponse } from '../home/home.page';

@Injectable({
  providedIn: 'root'
})
export class MangaService {
  endpoint='http://localhost:8080/Manga'
  constructor(private httpClient: HttpClient) { }
  getMangas(page: number, size: number): Observable<PagedResponse> {
    return this.httpClient.get<PagedResponse>(`${this.endpoint}?page=${page}&size=${size}`);
  }
  getMangaById(id: number): Observable<Manga> {
    return this.httpClient.get<Manga>(`${this.endpoint}/${id}`);
  }  
}

