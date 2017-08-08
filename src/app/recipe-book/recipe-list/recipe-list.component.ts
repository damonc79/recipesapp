import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})

export class RecipeListComponent implements OnInit {
  @Output() chosenRecipe = new EventEmitter<Recipe>();
  
  recipes: Recipe[] = [
    new Recipe("Mac & Cheese", "Best Mac & Cheese ever", "http://i2.wp.com/www.foodrepublic.com/wp-content/uploads/2011/12/Ruhlmans_Twenty_Mac_Cheese.jpg?fit=1600%2C1143"),
    new Recipe("Chilli Cheese Pastrami fries", "An LA burger stand classic", "http://3.bp.blogspot.com/-Qp_OuYNpPgE/UeBLaatBmtI/AAAAAAAAAp8/2YGuJbujp2w/s1600/3721413011_cd736448fe_z.jpg"),
  ];

  constructor() { }

  ngOnInit() {

  }

  recipeChosen(theRecipe: Recipe){
    this.chosenRecipe.emit(theRecipe);
  }

}
