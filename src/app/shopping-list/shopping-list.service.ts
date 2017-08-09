import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from "app/shared/ingredient.model";

@Injectable()
export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();

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
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

}
