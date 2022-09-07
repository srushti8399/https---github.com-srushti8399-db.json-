import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddcompanyComponent } from './addcompany/addcompany.component';

const routes: Routes = [
  {path:"add",component:AddcompanyComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
