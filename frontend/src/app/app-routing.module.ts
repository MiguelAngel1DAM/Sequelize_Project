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
    path: 'sectors-page',
    loadChildren: () => import('./sectors-page/sectors-page.module').then( m => m.SectorsPagePageModule)
  },
  {
    path: 'workers-page',
    loadChildren: () => import('./workers-page/workers-page.module').then( m => m.WorkersPagePageModule)
  },
  {
    path: 'add-workers',
    loadChildren: () => import('./add-workers/add-workers.module').then( m => m.AddWorkersPageModule)
  },
  {
    path: 'update-workers/:id',
    loadChildren: () => import('./update-workers/update-workers.module').then( m => m.UpdateWorkersPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
