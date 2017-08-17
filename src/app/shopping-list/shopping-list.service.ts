import { Injectable } from '@angular/core';
import { Ingredient } from "app/shared/ingredient.model";
import { Subject } from "rxjs/Subject";

@Injectable()
export class ShoppingListService {
  ingredientsChanged = new Subject<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient("Cheese", 2),
    new Ingredient("Pepper", 1),
    new Ingredient("Salt", 1),
    new Ingredient("Macaroni", 16),
  ];

  constructor() { }

  getIngredients(){
    return this.ingredients.slice();
  }

  addIngredients(ingredient){
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

}
