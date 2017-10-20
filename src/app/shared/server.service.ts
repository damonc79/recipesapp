import { Injectable } from '@angular/core';
import { Http, Headers, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/Rx";
import { RecipeService } from 'app/recipe-book/recipe.service';
import { Recipe } from "app/recipe-book/recipe.model";

@Injectable()
export class ServerService {

  constructor(private http: Http, private recipeService: RecipeService) { }

  getRecipes(){
    //get
    this.http.get("https://udemy-recipes-26c8a.firebaseio.com/recipes.json")
    .map(
      (response: Response) => {
        const recipes: Recipe[] = response.json();
        recipes.forEach(recipe => {
          if(!recipe["ingredients"]){
            recipe["ingredients"] = [];
          }
        });
        return recipes;
      }
    )
    .subscribe(
      (recipes: Recipe[]) => {
        this.recipeService.setRecipes(recipes);
      }
    );
  }

  createRecipe(){
    //post
    
  }

  updateRecipes(){
    //put
    return this.http.put("https://udemy-recipes-26c8a.firebaseio.com/recipes.json", this.recipeService.getRecipes());
  }

  deleteRecipe(){

  }

}
