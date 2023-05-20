import { Component, Input, OnInit } from '@angular/core';
import { Item } from 'src/app/category';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
 @Input() item!: Item

 ngOnInit() {
  console.log(`Initialized item ${this.item.name}`)
}
}
