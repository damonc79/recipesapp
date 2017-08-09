import { Component, OnInit } from '@angular/core';
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "app/shopping-list/shopping-list.service";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})

export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [];

  constructor(private listService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.listService.getIngredients();
    this.listService.ingredientsChanged.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients
      }
    );
  }

  newIngAdded(ingredient: Ingredient){
    this.listService.addIngredients(ingredient);
  }

}
