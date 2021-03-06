import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from './core/services/authentication.guard';
import { MainAdminComponent } from './work/pages/admin/components/main';
import { MainHomeComponent } from './work/pages/home/components/main';
import { MainLibrarianComponent } from './work/pages/librarian/components/main';
import { LoginComponent } from './work/pages/login/components/login';

const routes: Routes = [
  {
    path: 'home',
    pathMatch: 'full',
    component: MainHomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'librarian',
    canActivate: [AuthenticationGuard],
    component: MainLibrarianComponent
  },
  {
    path: 'admin',
    canActivate: [AuthenticationGuard],
    component: MainAdminComponent
  },
  {
    path: '**', redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
