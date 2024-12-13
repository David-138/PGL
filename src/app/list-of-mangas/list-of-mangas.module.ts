import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListOfMangasPageRoutingModule } from './list-of-mangas-routing.module';

import { ListOfMangasPage } from './list-of-mangas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListOfMangasPageRoutingModule
  ],
  declarations: [ListOfMangasPage]
})
export class ListOfMangasPageModule {}
