import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { MarkdownModule } from 'ngx-markdown'; 
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule,
    MarkdownModule.forRoot({
      loader: HttpClient
    }),
    //ForChild nie potrzebne dla markdown module jeśli jest w głównym module!
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
