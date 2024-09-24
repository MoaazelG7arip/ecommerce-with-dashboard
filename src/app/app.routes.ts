import { Routes } from '@angular/router';
import { EcommerceComponent } from './ecommerce/ecommerce.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './ecommerce/home/home.component';
import { AboutComponent } from './ecommerce/about/about.component';
import { ContactUsComponent } from './ecommerce/contact-us/contact-us.component';
import { ProductsComponent } from './ecommerce/products/products.component';
import { SignInComponent } from './ecommerce/sign-in/sign-in.component';
import { RegisterComponent } from './ecommerce/register/register.component';
import { DashHomeComponent } from './dashboard/dash-home/dash-home.component';
import { MessagesComponent } from './dashboard/messages/messages.component';
import { DashProductsComponent } from './dashboard/dash-products/dash-products.component';
import { OrdersComponent } from './dashboard/orders/orders.component';
import { CustomersComponent } from './dashboard/customers/customers.component';

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
        {path: '', redirectTo: 'dash-home', pathMatch: 'full'},
        {path: 'dash-home', component: DashHomeComponent},
        {path: 'messages', component: MessagesComponent},
        {path: 'dash-products', component: DashProductsComponent},
        {path: 'orders', component: OrdersComponent},
        {path: 'customers', component: CustomersComponent}
    ]},
    {path: '**', redirectTo: 'ecommerce/home', pathMatch: 'full'}

];
