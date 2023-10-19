import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SectorsPagePage } from './sectors-page.page';

const routes: Routes = [
  {
    path: '',
    component: SectorsPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SectorsPagePageRoutingModule {}
