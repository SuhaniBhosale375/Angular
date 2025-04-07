import { Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { StudentComponent } from './student/student.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

export const routes: Routes = [
    //{path:'admin',component:AdminComponent},
    {path:'admin',loadComponent:()=>import('./admin/admin.component').then(c=> c.AdminComponent)},
    {path:'student',loadComponent:()=>import('./student/student.component').then(c=> c.StudentComponent)},
    {path:'**',component:PagenotfoundComponent}
    
];
