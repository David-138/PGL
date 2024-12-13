import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
    title: string = "Dragon Ball";
    sinopsis: string= "Un niño con cola...";
    serialization: string= "Shonen Jump (semanal)";
  constructor(private router: Router) {}
  gotoListOfMangas(){
    this.router.navigateByUrl("/list-of-mangas");
  }
}
export interface PagedResponse {
  content: any[];
  pageable: any;
  totalElements: number;
  totalPages: number;
}
