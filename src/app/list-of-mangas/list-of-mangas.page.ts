import { Component, OnInit } from '@angular/core';
import { MangaService } from '../services/manga.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-of-mangas',
  templateUrl: './list-of-mangas.page.html',
  styleUrls: ['./list-of-mangas.page.scss'],
})
export class ListOfMangasPage implements OnInit {
  mangas: any[] = [];
  visibility: boolean[] = [];
  page = 0;
  size = 20;
  totalPages = 0;
  constructor(private mangaService: MangaService, private router: Router) { }

  ngOnInit() {
    this.getAllMangas();
  }
  getAllMangas() {
    this.mangaService.getMangas(this.page, this.size).subscribe(response => {
      this.mangas = response.content;
      this.totalPages = response.totalPages;
    });
  }
  
  toggleVisibility(index: number): void {
    this.visibility[index] = !this.visibility[index];
  }
  nextPage() {
    if (this.page < this.totalPages - 1) {
      this.page++;
      this.getAllMangas();
    }
  }

  previousPage() {
    if (this.page > 0) {
      this.page--;
      this.getAllMangas();
    }
  }
  gotoListOfReviews(id: number){
    this.router.navigate(["/list-of-reviews", id]);
  }
}