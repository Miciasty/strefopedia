import { Component, Input, OnInit } from '@angular/core';
import { Category, GroupElement, Item } from 'src/app/category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  @Input() category!: Category

  public show:Boolean = false
  public folder_status:string = "closed"

  ngOnInit() {
    console.log(`Initialized category ${this.category.name}`)
  }
  isItem(element: GroupElement): element is Item
  {

    /*console.log(((element as Category).color === undefined) ? true : false)*/
    return(element as Category).color === undefined
  }

  getCategory(element:GroupElement): Category
  {
    return element as Category
  }

  thisToogle() {
      this.show = !this.show;

      if(this.show) {
          this.folder_status = "open"
      } else {
          this.folder_status = "closed"
      }
  }
}