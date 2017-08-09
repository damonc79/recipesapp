import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from "app/recipe-book/recipe.model";
import { ShoppingListService } from "app/shopping-list/shopping-list.service";
import { Ingredient } from "app/shared/ingredient.model";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})

export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor(private listService: ShoppingListService) { }

  ngOnInit() {
  }

  addAllToList(){
    this.recipe.ingredients.forEach(element => {
      this.listService.addIngredients(element);
    });
  }

  addOneToList(ingredient: Ingredient){
    this.listService.addIngredients(ingredient);
  }

}
