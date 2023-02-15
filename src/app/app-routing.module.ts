import { FooterComponent } from './shared/components/footer/footer.component';
import { GalleryComponent } from './shared/components/gallery/gallery.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'not-found' , pathMatch: 'full' },
  { path: 'header', component: HeaderComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'footer', component: FooterComponent },
  //{ path: '**', redirecto: 'home' }, // para si se pone alguna ruta que no existe
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
