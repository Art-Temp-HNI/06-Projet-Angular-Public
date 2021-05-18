import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransrouteComponent } from './transroute/transroute.component';
import { TranslistComponent } from './translist/translist.component';

const routes: Routes = [
  { path: '', component: TranslistComponent },
  { path: 'trans/:id', component: TransrouteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
