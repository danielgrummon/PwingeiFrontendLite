import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ThelistComponent} from './thelist/thelist.component';
import { HomeComponent } from './home/home.component';
import { MinimalistComponent } from './minimalist/minimalist.component';
import { MainComponent } from './main/main.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: MainComponent },
  { path: 'list', component: ThelistComponent },
  { path: 'minimalist', component: MinimalistComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
