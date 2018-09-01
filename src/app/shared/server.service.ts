import { Injectable } from '@angular/core';
import { Http, Headers, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/Rx";
import { RecipeService } from 'app/recipe-book/recipe.service';
import { Recipe } from "app/recipe-book/recipe.model";
import { AuthService } from '../auth/auth.service';

@Injectable()
export class ServerService {

  constructor(private http: Http, private recipeService: RecipeService, private authService: AuthService) { }

  getRecipes(){
    //get
    const token = this.authService.getToken();

    this.http.get("https://udemy-recipes-26c8a.firebaseio.com/recipes.json?auth=" + token)
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
    const token = this.authService.getToken();
    return this.http.put("https://udemy-recipes-26c8a.firebaseio.com/recipes.json?auth=" + token, this.recipeService.getRecipes());
  }

  deleteRecipe(){

  }

}
