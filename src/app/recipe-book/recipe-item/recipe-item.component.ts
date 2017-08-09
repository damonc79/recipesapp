import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from "../recipe.model";
import { RecipeService } from "app/recipe-book/recipe.service";

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss']
})

export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor(private recipeService: RecipeService) {

  }

  ngOnInit() {

  }

  openRecipe(){
    this.recipeService.recipeSelected.emit(this.recipe);
  }

}
