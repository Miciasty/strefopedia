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
            {id: 5, name: "Zombie", color: "gray", items: [
                {id: 6, name: "Słaby Zombie"},
                {id: 6, name: "Szybki Zombie"},
                {id: 6, name: "Twardy Zombie"},
                {id: 6, name: "Strażnik Zombie"},
                {id: 6, name: "Rycerz Zombie"}
            ]},
            {id: 5, name: "Ghule", color: "gray", items: [
                {id: 6, name: "Ghul"},
                {id: 6, name: "Szybki Ghul"},
                {id: 6, name: "Twardy Ghul"},
                {id: 6, name: "Podejrzany Ghyl"}
            ]},
            {id: 5, name: "Nieumarli", color: "gray", items: [
                {id: 6, name: "Słaby Nieumarły"},
                {id: 6, name: "Nieumarły"},
                {id: 6, name: "Nieumarły Piechur"},
                {id: 6, name: "Nieumarły Łowca"},
                {id: 6, name: "Nieumarły Wojownik"},
                {id: 6, name: "Prastary Nieumarły"},
                {id: 6, name: "Prastary Strażnik"}
            ]},
            {id: 5, name: "Demony", color: "gray", items: [
                {id: 6, name: "Demon"},
                {id: 6, name: "Strażnik Pustki"},
                {id: 6, name: "Infernus"},
                {id: 6, name: "Wyższy Demon"},
                {id: 6, name: "Koszmar Otchłani"},
                {id: 6, name: "Arcydemon"}
            ]},
            {id: 5, name: "Duchy", color: "gray", items: [
                {id: 6, name: "Niespokojny Duch"},
                {id: 6, name: "Duch"},
                {id: 6, name: "Grzech"},
                {id: 6, name: "Splugawiony Duch"},
                {id: 6, name: "Pradawny Duch"},
                {id: 6, name: "Bunshee"}
            ]},
            {id: 5, name: "Wilki", color: "gray", items: [
                {id: 6, name: "Młody Wilk"},
                {id: 6, name: "Wilk"},
                {id: 6, name: "Dorosły Wilk"},
                {id: 6, name: "Wilk Strażnik"},
                {id: 6, name: "Alfa"}
            ]},
            {id: 5, name: "Pająki", color: "gray", items: [
                {id: 6, name: "Młody Pajączek"},
                {id: 6, name: "Pajączek"},
                {id: 6, name: "Pająk"},
                {id: 6, name: "Szybki Pająk"},
                {id: 6, name: "Czarny Pająk"},
                {id: 6, name: "Podejrzany Pająk"},
                {id: 6, name: "Nieumarły Pająk"},
                {id: 6, name: "Bies Podziemi"},
                {id: 6, name: "Czarna Wdowa"}
            ]}
        ]}
      ]},
      {id: 1, name: "Zespół Strefa Gier", color: "violet", items: [
          {id: 5, name: "Personel", color: "gray", items: [ 
              {id: 6, name: "AleXX"},  
              {id: 6, name: "Bielski"},
              {id: 6, name: "Bosmak"},  
              {id: 6, name: "ErroPL"}, 
              {id: 6, name: "Miciasty"}, 
              {id: 6, name: "mpmpTV"},
              {id: 6, name: "Pluc"},
              {id: 6, name: "Szaman Trocki"},
              {id: 6, name: "T0rn3x"},
              {id: 6, name: "xSvnu_<3"},
              {id: 6, name: "w0lf."}, 
          ]}
      ]}
    ]
  }

}
