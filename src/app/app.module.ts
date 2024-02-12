import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MaterialModule} from "./material.module";
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { UserReducerFn } from './store/user/user.reducer';
import { UserEffect } from './store/user/user.effects';
import { AppEffects } from './store/common/app.effects';
import { HomeComponent } from './component/home/home.component';
import { RegisterComponent } from './component/register/register.component';
import { LoginComponent } from './component/login/login.component';
import { AdminHomeComponent } from './component/admin-home/admin-home.component';
import { AdvertisementAddComponent } from './component/advertisement-add/advertisement-add.component';
import { AdvertisementListComponent } from './component/advertisement-list/advertisement-list.component';
import { MenuComponent } from './component/menu/menu.component';
import { UserListComponent } from './component/user-list/user-list.component';
import { UserManageComponent } from './component/user-manage/user-manage.component';
import { AdvertisementManageComponent } from './component/advertisement-manage/advertisement-manage.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    AdminHomeComponent,
    AdvertisementAddComponent,
    AdvertisementListComponent,
    AdvertisementManageComponent,
    UserManageComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({userReduce : UserReducerFn}),
    EffectsModule.forRoot([UserEffect, AppEffects]),
    //StoreRouterConnectingModule.forRoot(),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
