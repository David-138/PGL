import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'list-of-mangas',
    loadChildren: () => import('./list-of-mangas/list-of-mangas.module').then( m => m.ListOfMangasPageModule)
  },
  {
    path: 'list-of-reviews/:id',
    loadChildren: () => import('./list-of-reviews/list-of-reviews.module').then( m => m.ListOfReviewsPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
