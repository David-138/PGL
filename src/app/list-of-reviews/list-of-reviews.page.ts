import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MangaService } from '../services/manga.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-of-reviews',
  templateUrl: './list-of-reviews.page.html',
  styleUrls: ['./list-of-reviews.page.scss'],
})
export class ListOfReviewsPage implements OnInit {
  mangas: any[] = [];
  constructor(private mangaService: MangaService, private route: ActivatedRoute, private router: Router) {}
  
  ngOnInit() {
  }
  gotoListOfMangas(){
    this.router.navigateByUrl("/list-of-mangas");
  }
  
}