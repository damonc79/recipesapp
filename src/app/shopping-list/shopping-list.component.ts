import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "app/shopping-list/shopping-list.service";
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})

export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[] = [];
  private subscription: Subscription;

  constructor(private listService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.listService.getIngredients();
    this.subscription = this.listService.ingredientsChanged.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients
      }
    );
  }

  newIngAdded(ingredient: Ingredient){
    this.listService.addIngredients(ingredient);
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
