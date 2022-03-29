import { Routes } from "@angular/router";
import { HomeComponent } from './home/home.component';
import { EmployeeComponent } from './employee/employee.component';
import { ProductComponent } from './product/product.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { LoginComponent } from "./login/login.component"; 
import { AuthGuard } from "./auth.guard";
export const routes:Routes=[
    {path:'login',component:LoginComponent},
    {path:'home',component:HomeComponent},
    {path:'Employee',component:EmployeeComponent},
    {path:'Product',component:ProductComponent},
    {path:'ReactiveForm',component:ReactiveFormComponent,canActivate:[AuthGuard]},
    {path:'TemplateForm',component:TemplateFormComponent},
    
];
