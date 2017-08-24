import { Component, OnInit } from '@angular/core';
import { Recipe } from "app/recipe-book/recipe.model";
import { ShoppingListService } from "app/shopping-list/shopping-list.service";
import { Ingredient } from "app/shared/ingredient.model";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { RecipeService } from "app/recipe-book/recipe.service";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})

export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id: number;

  constructor(private listService: ShoppingListService, private route: ActivatedRoute, private recipeService: RecipeService, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params["id"];
        this.recipe = this.recipeService.getRecipe(this.id);
      }
    )
  }

  addAllToList(){
    this.recipe.ingredients.forEach(element => {
      this.listService.addIngredients(element);
    });
  }

  addOneToList(ingredient: Ingredient){
    this.listService.addIngredients(ingredient);
  }

  editRecipe(){
    this.router.navigate(["edit"], {relativeTo: this.route});
  }

  deleteRecipe(){
    this.recipeService.removeRecipe(this.id);
    this.router.navigate(["/"]);
  }

}
