import { Component, OnInit } from '@angular/core';
import { Category } from '../category'; //Dodałem import Group

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  categories: Category[] = []
  
  ngOnInit(): void {
    this.loadNav()
  }
  
  private loadNav()
  {
    this.categories = [
      {id: 1, name: "Minecraft", color: "emerald", items: [
        {id: 5, name: "Krainy i Państwa", color: "gray", items: [
          {id: 6, name: "Itemek2"},
          {id: 5, name: "Zarządzanie krainą", color: "gray", items: [
            {id: 6, name: "Itemek2"},
            {id: 6, name: "Itemek2"}
          ]},
          {id: 5, name: "Zarządzanie państwem", color: "gray", items: [
            {id: 6, name: "Itemek2"},
            {id: 6, name: "Itemek2"}
          ]}
        ]},
        {id: 5, name: "Przedmioty", color: "gray", items: [
          {id: 6, name: "Itemek2"},
          {id: 6, name: "Itemek2"}
        ]},
        {id: 5, name: "Księga potworów", color: "gray", items: [
          {id: 6, name: "Zombie"},
          {id: 6, name: "Ghul"}
        ]}
      ]},
      {id: 1, name: "Team Fortress 2", color: "orange", items: [
        {id: 5, name: "Mapy", color: "gray", items: [
          {id: 6, name: "Itemek2"},
          {id: 6, name: "Itemek2"}
        ]}
      ]},
      {id: 1, name: "Counter Strike 2", color: "amber", items: [
        {id: 5, name: "Mapy", color: "gray", items: [
          {id: 6, name: "Itemek2"},
          {id: 6, name: "Itemek2"}
        ]}
      ]},
      {id: 1, name: "Garry's Mod", color: "blue", items: [
        {id: 5, name: "Mapy", color: "gray", items: [
          {id: 6, name: "Itemek2"},
          {id: 6, name: "Itemek2"}
        ]}
      ]}
    ]
  }

}
