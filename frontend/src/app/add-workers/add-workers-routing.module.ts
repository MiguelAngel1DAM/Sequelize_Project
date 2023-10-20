import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddWorkersPage } from './add-workers.page';

const routes: Routes = [
  {
    path: '',
    component: AddWorkersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddWorkersPageRoutingModule {}
