import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeModule } from "./home.module";
const routes: Routes = [
  { path: '/', pathMatch: 'full', redirectTo: 'HomeModule' },

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
