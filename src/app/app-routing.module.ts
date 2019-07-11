import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './components/utils/dashboard/dashboard.component';
import { UserComponent } from './pages/user/user.component';
import { CategoryComponent } from './pages/category/category.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CreateCategoryComponent } from './components/category/create-category/create-category.component';
import { EditCategoryComponent } from './components/category/edit-category/edit-category.component';

const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'login', component: LoginComponent},
  { path: 'home',   component: HomeComponent },
  // { path: 'dashboard',   component: DashboardComponent },
  { path: 'user',   component: UserComponent },
  { path: 'category',   component: CategoryComponent },
  { path: 'create-category',   component: CreateCategoryComponent },
  { path: 'contact',   component: ContactComponent },
  { path: 'edit-category/:id', component: EditCategoryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
