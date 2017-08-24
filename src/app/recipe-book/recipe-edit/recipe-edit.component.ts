import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from "@angular/router";
import { FormGroup, FormControl, FormArray, Validators } from "@angular/forms";
import { RecipeService } from "app/recipe-book/recipe.service";
import { ShoppingListService } from "app/shopping-list/shopping-list.service";
import { Recipe } from "app/recipe-book/recipe.model";

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.scss']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode: boolean = false;
  recipeForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router, 
    private recipeService: RecipeService, 
    private listService: ShoppingListService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params["id"];
        this.editMode = params["id"] != null;
        
        this.initForm();
      }
    )
  }

  onSubmit(){
    const newRecipe = new Recipe(
      this.recipeForm.value['name'],
      this.recipeForm.value['description'],
      this.recipeForm.value['imagePath'],
      this.recipeForm.value['ingredients']
    )

    if(this.editMode){
      this.recipeService.updateRecipe(this.id, newRecipe)
    } else {
      this.recipeService.createRecipe(this.recipeForm.value); //instead of creating the const to hold all values
    }

    this.closeRecipe();
  }

  addIngredient(){
    (<FormArray>this.recipeForm.get("ingredients")).push(
      new FormGroup({
        "name": new FormControl(null, Validators.required),
        "amount": new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
      })
    )
  }

  deleteIngredient(index){
    (<FormArray>this.recipeForm.get("ingredients")).removeAt(index);
  }

  closeRecipe(){
    this.router.navigate(["../"], {relativeTo: this.route});
  }

  private initForm(){
    let recipeName = "";
    let recipeImagePath = "";
    let recipeDescription = "";
    let recipeIngredients = new FormArray([]);

    if(this.editMode){
      const recipe = this.recipeService.getRecipe(this.id);
      recipeName = recipe.name;
      recipeImagePath = recipe.imagePath;
      recipeDescription = recipe.description;
      if (recipe["ingredients"]){
          recipe["ingredients"].forEach(element => {
            recipeIngredients.push(
              new FormGroup({
                "name": new FormControl(element.name, Validators.required),
                "amount": new FormControl(element.amount, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
              })
            )
        });
      }
    }

    this.recipeForm = new FormGroup({
      "name": new FormControl(recipeName, Validators.required),
      "description": new FormControl(recipeDescription, Validators.required),
      "imagePath": new FormControl(recipeImagePath, Validators.required),
      "ingredients": recipeIngredients
    })
  }

}
