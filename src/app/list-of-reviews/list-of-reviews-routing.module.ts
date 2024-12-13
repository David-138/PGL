import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListOfReviewsPage } from './list-of-reviews.page';

const routes: Routes = [
  {
    path: '',
    component: ListOfReviewsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListOfReviewsPageRoutingModule {}
