import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRestoComponent } from './add-resto/add-resto.component';
import { UpdateRestoComponent } from './update-resto/update-resto.component';
import { LoginComponent } from './login/login.component';
import { ListRestoComponent } from './list-resto/list-resto.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { component:AddRestoComponent,path:'add'},
  { component:UpdateRestoComponent,path:'update/:id'},
  { component:LoginComponent,path:'login'},
  { component:ListRestoComponent,path:'list'},
  { component:RegisterComponent,path:'register'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }