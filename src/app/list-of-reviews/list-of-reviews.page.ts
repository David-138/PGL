import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MangaService } from '../services/manga.service';
import { ReviewService } from '../services/review.service';
import { Router } from '@angular/router';
import { Manga, Review } from '../home/home.page';

@Component({
  selector: 'app-list-of-reviews',
  templateUrl: './list-of-reviews.page.html',
  styleUrls: ['./list-of-reviews.page.scss'],
})
export class ListOfReviewsPage implements OnInit {
  manga: Manga | null = null;
  errorMessage: string = '';
  newReview: Partial<Review> = {};
  constructor(
    private mangaService: MangaService,
    private reviewService: ReviewService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const mangaId = Number(this.route.snapshot.paramMap.get('id'));

    if (!isNaN(mangaId)) {
      this.mangaService.getMangaById(mangaId).subscribe(
        (data) => {
          this.manga = data;
          console.log('Manga recibido:', this.manga);
        },
        (error) => {
          console.error('Error al obtener el manga:', error);
        }
      );
    } else {
      console.error('ID inválido en la URL');
    }
  }
  gotoListOfMangas() {
    this.router.navigateByUrl('/list-of-mangas');
  }
  loadReview(): void {
    this.mangaService.getMangaById(this.manga!.id_Manga).subscribe({
      next: (data) => {
        this.manga = data;
      },
      error: (error) => {
        console.error('Error al cargar el manga:', error);
      },
    });
  }
  addReview(): void {
    this.errorMessage = '';
    if (!this.newReview.nota || !this.newReview.contenido) {
      this.errorMessage = 'Debes rellenar ambos campos.';
      return;
    }
    if (this.newReview.nota < 0 || this.newReview.nota > 10) {
      this.errorMessage = 'La nota debe de estar entre 0 y 10.';
      return;
    }
    if (this.manga) {
      const review: Review = {
        ...this.newReview,
        id_Manga: this.manga.id_Manga,
      } as Review;
      this.reviewService.postReview(review).subscribe({
        next: () => {
          this.loadReview();
          this.newReview = {};
        },
        error: (error) => {
          console.error('Error al añadir la reseña:', error);
          this.errorMessage = 'Error al añadir la reseña. Inténtalo de nuevo.';
        },
      });
    }
  }

  updateReview(id: number): void {
    this.errorMessage = '';

    if (!this.newReview.nota || !this.newReview.contenido) {
      this.errorMessage = 'Debes rellenar ambos campos.';
      return;
    }
    if (this.newReview.nota < 0 || this.newReview.nota > 10) {
      this.errorMessage = 'La nota debe de estar entre 0 y 10.';
      return;
    }
    if (this.manga) {
      const review: Review = {
        ...this.newReview,
        id_Manga: this.manga.id_Manga,
      } as Review;

      this.reviewService.putReview(id, review).subscribe({
        next: () => {
          this.loadReview();
          this.newReview = {};
        },
        error: (error) => {
          console.error('Error al actualizar la reseña:', error);
          this.errorMessage =
            'Error al actualizar la reseña. Inténtalo de nuevo.';
        },
      });
    }
  }

  deleteReview(id: number): void {
    this.reviewService.deleteReview(id).subscribe({
      next: () => {
        this.manga!.reviews = this.manga!.reviews.filter(
          (r) => r.id_Review !== id
        );
      },
      error: (error) => {
        console.error('Error al eliminar la reseña:', error);
      },
    });
  }
}
