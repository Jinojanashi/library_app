import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookDataComponent } from './book-data/book-data.component';
import { NewBookComponent } from './new-book/new-book.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { BookGuestComponent } from './book-guest/book-guest.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'book', component: BookDataComponent },
  { path: 'book/guest', component: BookGuestComponent },
  { path: 'book/create-edit', component: NewBookComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
