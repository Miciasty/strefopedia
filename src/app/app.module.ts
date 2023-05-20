import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NavComponent } from './nav/nav.component';
import { ItemComponent } from './nav/item/item.component';
import { CategoryComponent } from './nav/category/category.component';
import { MainComponent } from './main/main.component';

import { SecurityContext } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { MarkdownModule } from 'ngx-markdown'; 

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ItemComponent,
    CategoryComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MarkdownModule.forRoot({
      loader: HttpClient
    }),
    MarkdownModule.forChild()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
