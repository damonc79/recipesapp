import { Injectable } from '@angular/core';
import { Recipe } from "app/recipe-book/recipe.model";
import { Ingredient } from "app/shared/ingredient.model";
import { Subject } from "rxjs/Subject";

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();
  
  private recipes: Recipe[] = [
    new Recipe(
      "Mac & Cheese", 
      "Best Mac & Cheese ever", 
      "http://i2.wp.com/www.foodrepublic.com/wp-content/uploads/2011/12/Ruhlmans_Twenty_Mac_Cheese.jpg?fit=1600%2C1143",
      [
        new Ingredient("Large elbow macaroni", 1),
        new Ingredient("Sharp cheddar", 16),
      ]),
    new Recipe(
      "Chilli Cheese Pastrami fries", 
      "An LA burger stand classic", 
      "http://3.bp.blogspot.com/-Qp_OuYNpPgE/UeBLaatBmtI/AAAAAAAAAp8/2YGuJbujp2w/s1600/3721413011_cd736448fe_z.jpg",
      [
        new Ingredient("French Fries", 200),
        new Ingredient("Chilli", 29)
      ]),
  ];

  constructor() { }

  getRecipes(){
    //.slice to only get a copy of the array
    return this.recipes.slice();
  }

  getRecipe(id: number){
    return this.recipes[id];
  }

  createRecipe(recipe: Recipe){
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, recipe: Recipe){
    this.recipes[index] = recipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  removeRecipe(index: number){
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }

}
