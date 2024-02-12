import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { AdminHomeComponent } from './component/admin-home/admin-home.component';
import { AdvertisementAddComponent } from './component/advertisement-add/advertisement-add.component';
import { AdvertisementListComponent } from './component/advertisement-list/advertisement-list.component';
import { adminGuard } from './guard/admin.guard';
import { authGuard } from './guard/auth.guard';
import { UserManageComponent } from './component/user-manage/user-manage.component';
import { AdvertisementManageComponent } from './component/advertisement-manage/advertisement-manage.component';
import { userGuard } from './guard/user.guard';

const routes: Routes = [
  {path : '', component : HomeComponent},
  {path : 'inscription', component : RegisterComponent},
  {path : 'connexion', component : LoginComponent},
  {path : 'annonces', component : AdvertisementListComponent},
  {path : 'nouvelle-annonce', component : AdvertisementAddComponent, canActivate : [authGuard]},
  {path : 'administration', component : AdminHomeComponent, canActivate : [adminGuard]},
  {path : 'administration/annonces', component : AdvertisementManageComponent, canActivate : [adminGuard]},
  {path : 'administration/utilisateurs', component : UserManageComponent, canActivate : [adminGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
