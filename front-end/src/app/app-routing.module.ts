import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeCompletoComponent } from './home/home-completo/home-completo.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: '**',
    redirectTo: 'home'
  },
  {
    path: 'home',
    component: HomeCompletoComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
