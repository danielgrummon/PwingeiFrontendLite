import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ThelistComponent} from './thelist/thelist.component';

const routes: Routes = [
//  { path: '', component: ThelistComponent },
  { path: 'TheList', component: ThelistComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})

export class AppRoutingModule { }
