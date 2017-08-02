import { Component, OnInit } from '@angular/core';
import { Ingredient } from "../shared/ingredient.model";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})

export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient("Cheese", 2),
    new Ingredient("Pepper", 1),
    new Ingredient("Salt", 1),
    new Ingredient("Macaroni", 16),
  ];

  constructor() { }

  ngOnInit() {
  }

}
