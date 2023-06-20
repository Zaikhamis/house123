import { NgModule } from '@angular/core';
import { BrowserModule, createApplication } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './componet/dashboard/dashboard.component';
import { LoginComponent } from './componet/login/login.component';
import { RegisterComponent } from './componet/register/register.component';
import { HomeComponent } from './componet/home/home.component';
import { CustomerListComponent } from './componet/customer-list/customer-list.component';
import { CreateCostomerComponent } from './componet/create-costomer/create-costomer.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';





@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    CustomerListComponent,
    CreateCostomerComponent,
    ForgetPasswordComponent,
  
   
  
   

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
