import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule),
  },
  {
    path: 'demo',
    loadChildren: () => import('./pages/demo/demo.module').then(m => m.DemoModule),
  },
  {
    path: 'documentation',
    loadChildren: () => import('./pages/documentation/documentation.module').then(m => m.DocumentationModule),
  },
  {
    path: 'examples',
    loadChildren: () => import('./pages/examples/examples.module').then(m => m.ExamplesModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
