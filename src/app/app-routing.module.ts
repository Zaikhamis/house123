import { DashboardComponent } from './componet/dashboard/dashboard.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms'
import { LoginComponent } from './componet/login/login.component';
import { HomeComponent } from './componet/home/home.component';
import { RegisterComponent } from './componet/register/register.component';
import { CreateCostomerComponent } from './componet/create-costomer/create-costomer.component';
import { CustomerListComponent } from './componet/customer-list/customer-list.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';



const routes: Routes = [
  {
    path: '', component: HomeComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'reg', component: RegisterComponent },
      {path: 'forget', component:ForgetPasswordComponent},
    
    ]
  },
  {
    path: 'dashboard', component: DashboardComponent,
    children: [
      { path: 'ff', component: CreateCostomerComponent },
      { path: '', component: CustomerListComponent }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
