import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule,FormsModule} from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import uklocale from '@angular/common/locales/uk';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MainComponent } from './components/main/main.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { PostComponent } from './components/post/post.component';
import { PostsComponent } from './components/posts/posts.component';
import { AddpostComponent } from './components/addpost/addpost.component';
import { FooterComponent } from './components/footer/footer.component';
import { AutInterseptorService } from './components/shared/auth.interseptor.service';
import { AlarmComponent } from './components/shared/alarm/alarm.component';
import { registerLocaleData } from '@angular/common';

registerLocaleData(uklocale,"ua")

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainComponent,
    MainLayoutComponent,
    PostComponent,
    PostsComponent,
    AddpostComponent,
    FooterComponent,
    AlarmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [{provide:HTTP_INTERCEPTORS,multi:true,useClass:AutInterseptorService}],
  bootstrap: [AppComponent]
})
export class AppModule { }
