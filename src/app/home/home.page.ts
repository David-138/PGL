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
export interface Review {
  id_Review: number;
  nota: number;
  contenido: string;
  id_Manga?: number;
}

export interface Genre {
  id_Genero: number;
  nombre: string;
}

export interface Manga {
  id_Manga: number;
  titulo: string;
  sinopsis: string;
  serializacion: string;
  reviews: Review[];
  genre: Genre[];
}
