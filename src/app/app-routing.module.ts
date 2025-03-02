import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoleGuard } from '../service/guards/role.guard';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  { 
    path: 'user', 
    loadChildren: () => import('./modules/user/user.module').then(m => m.UserModule), 
    canActivate: [RoleGuard], 
    data: { roles: ['user'] } 
  },
  { 
    path: 'admin', 
    loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule), 
    canActivate: [RoleGuard], 
    data: { roles: ['admin'] } 
  },
  { 
    path: 'guest', 
    loadChildren: () => import('./modules/guest/guest.module').then(m => m.GuestModule), 
    canActivate: [RoleGuard], 
    data: { roles: ['guest'] } 
  },
  {path:'logout',component:LoginComponent},
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
