import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewBookComponent } from './new-book/new-book.component';
import { BookDataComponent } from './book-data/book-data.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { BookGuestComponent } from './book-guest/book-guest.component';

@NgModule({
  declarations: [
    AppComponent,
    NewBookComponent,
    BookDataComponent,
    SidenavComponent,
    LoginComponent,
    RegisterComponent,
    BookGuestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
