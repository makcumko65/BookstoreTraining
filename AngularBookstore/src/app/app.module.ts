import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { SectionBookComponent } from './sections/section-book/section-book.component';
import { HttpClientModule } from '@angular/common/http';
import { BookFormComponent } from './sections/crud/book-form/book-form.component';
import { BookCreateComponent } from './sections/crud/book-create/book-create.component';
import { BookEditComponent } from './sections/crud/book-edit/book-edit.component';
import { BookItemComponent } from './sections/crud/book-item/book-item.component';
import { UserComponent } from './sections/user/user.component';
import { LoginComponent } from './sections/user/login/login.component';
import { RegistrationComponent } from './sections/user/registration/registration.component';
import { AuthGuard } from './auth/auth.guard';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ForbittenComponent } from './forbitten/forbitten.component';

const appRoutes: Routes = [
  { path: '', component: SectionBookComponent  },
  { path: 'create', component: BookCreateComponent,canActivate:[AuthGuard],data :{permittedRoles:['Admin'] }},
  { path: 'edit/:id', component: BookEditComponent,canActivate:[AuthGuard],data :{permittedRoles:['Admin'] } },
  { path: 'bookItem/:id', component: BookItemComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'forbitten', component: ForbittenComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    SectionBookComponent,
    BookFormComponent,
    BookCreateComponent,
    BookEditComponent,
    BookItemComponent,
    UserComponent,
    LoginComponent,
    RegistrationComponent,
    NavBarComponent,
    ForbittenComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
