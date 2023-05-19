import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NavComponent } from './nav/nav.component';
import { ItemComponent } from './nav/item/item.component';
import { CategoryComponent } from './nav/category/category.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ItemComponent,
    CategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
