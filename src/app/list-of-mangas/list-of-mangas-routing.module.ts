import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListOfMangasPage } from './list-of-mangas.page';

const routes: Routes = [
  {
    path: '',
    component: ListOfMangasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListOfMangasPageRoutingModule {}
