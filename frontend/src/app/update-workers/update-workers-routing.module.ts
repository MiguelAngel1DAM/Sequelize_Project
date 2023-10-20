import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateWorkersPage } from './update-workers.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateWorkersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateWorkersPageRoutingModule {}
