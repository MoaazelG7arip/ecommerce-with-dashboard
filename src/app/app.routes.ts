import { Routes } from '@angular/router';
import { EcommerceComponent } from './ecommerce/ecommerce.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './ecommerce/home/home.component';
import { AboutComponent } from './ecommerce/about/about.component';
import { ContactUsComponent } from './ecommerce/contact-us/contact-us.component';
import { ProductsComponent } from './ecommerce/products/products.component';
import { SignInComponent } from './ecommerce/sign-in/sign-in.component';
import { RegisterComponent } from './ecommerce/register/register.component';

export const routes: Routes = [
    {path: '', redirectTo: 'ecommerce/home', pathMatch:"full"},
    {path: 'ecommerce', component: EcommerceComponent, children:[
        {path: '', redirectTo: 'home', pathMatch:"full"},
        {path: 'home', component: HomeComponent},
        {path: 'about', component:AboutComponent},
        {path: 'contact-us', component:ContactUsComponent},
        {path: 'products', component:ProductsComponent},
        {path: 'sign-in', component: SignInComponent},
        {path: 'register', component:RegisterComponent},
    ]},
    {path: 'dashboard', component: DashboardComponent, children:[

    ]},
    // {path: '**', redirectTo: 'ecommerce/home', pathMatch: 'full'}

];
