import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WikiComponent } from './wiki.component';
import { MainComponent } from './main/main.component';
import { CategoryComponent } from './nav/category/category.component';
import { ItemComponent } from './nav/item/item.component';
import { NavComponent } from './nav/nav.component';
import { MarkdownModule } from 'ngx-markdown';
import { WikiRoutingModule } from './wiki-routing.module';



@NgModule({
  declarations: [
    WikiComponent,
    NavComponent,
    ItemComponent,
    CategoryComponent,
    MainComponent
  ],
  imports: [
    MarkdownModule.forChild(),
    WikiRoutingModule,
    CommonModule
  ]
})
export class WikiModule { }
