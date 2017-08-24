import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Ingredient } from "app/shared/ingredient.model";
import { ShoppingListService } from "app/shopping-list/shopping-list.service";
import { NgForm } from "@angular/forms";
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: 'app-edit-list',
  templateUrl: './edit-list.component.html',
  styleUrls: ['./edit-list.component.scss']
})

export class EditListComponent implements OnInit, OnDestroy {
  @ViewChild("f") slForm: NgForm;
  subscripton: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Ingredient;
  
  constructor(private listService: ShoppingListService) { }

  ngOnInit() {
    this.subscripton = this.listService.startedEditing.subscribe(
      (index: number) => {
        this.editMode = true;
        this.editedItemIndex = index;
        this.editedItem = this.listService.getIngredient(index);

        this.slForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount
        })
      }
    );
  }

  addItem(form: NgForm){
    const value = form.value;
    const newIng = new Ingredient(value.name, value.amount);

    if(this.editMode){
      this.listService.updateIngredient(this.editedItemIndex, newIng);
    } else {
      this.listService.addIngredients(newIng);
    }

    this.reset();
    
  }

  deleteItem(){
    this.listService.deleteIngredient(this.editedItemIndex);
    this.reset();
  }

  reset(){
    this.slForm.reset();
    this.editMode = false;
    this.editedItem = null;
    this.editedItemIndex = null;
  }

  ngOnDestroy(){
    this.subscripton.unsubscribe();
  }

}
