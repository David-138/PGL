import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Review } from '../home/home.page';

@Injectable({
  providedIn: 'root',
})
export class ReviewService {
  private endpoint = 'http://localhost:8080/Review';
  constructor(private httpClient: HttpClient) {}

  getReviewById(id: number): Observable<Review> {
    return this.httpClient.get<Review>(`${this.endpoint}/${id}`);
  }
  postReview(review: Review): Observable<Review> {
    return this.httpClient.post<Review>(this.endpoint, review);
  }  
  putReview(id: number, review: Partial<Review>): Observable<Review> {
    return this.httpClient.put<Review>(`${this.endpoint}/${id}`, review);
  }
  deleteReview(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.endpoint}/${id}`);
  }
}
