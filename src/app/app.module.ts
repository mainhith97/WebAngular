import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { OwlDateTimeModule, OwlNativeDateTimeModule} from 'ng-pick-datetime';

import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { HomeComponent } from './pages/home/home.component';
import { ToastrModule } from 'ngx-toastr';
import { DataService } from './services/data.service';
import { HeaderComponent } from './components/utils/header/header.component';
import { SidebarComponent } from './components/utils/sidebar/sidebar.component';
import { DashboardComponent } from './components/utils/dashboard/dashboard.component';
import { ListUserComponent } from './components/user/list-user/list-user.component';
import { UserComponent } from './pages/user/user.component';
import { CategoryComponent } from './pages/category/category.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ListCategoryComponent } from './components/category/list-category/list-category.component';
import { ListContactComponent } from './components/contact/list-contact/list-contact.component';
import { CreateCategoryComponent } from './components/category/create-category/create-category.component';
import { EditCategoryComponent } from './components/category/edit-category/edit-category.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminLoginComponent,

    HomeComponent,
    HeaderComponent,
    SidebarComponent,
    DashboardComponent,
    ListUserComponent,
    UserComponent,
    CategoryComponent,
    ContactComponent,
    ListCategoryComponent,
    ListContactComponent,
    CreateCategoryComponent,
    EditCategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    OwlDateTimeModule,
    OwlNativeDateTimeModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
