import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ListOfReviewsPageRoutingModule } from './list-of-reviews-routing.module';
import { ListOfReviewsPage } from './list-of-reviews.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListOfReviewsPageRoutingModule
  ],
  declarations: [ListOfReviewsPage]
})
export class ListOfReviewsPageModule {}
