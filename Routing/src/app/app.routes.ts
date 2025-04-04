import { Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    {path : 'aboutus',component:AboutusComponent},
    {path : 'contactus',component:ContactusComponent},
    {path : 'login',component:LoginComponent},
];
