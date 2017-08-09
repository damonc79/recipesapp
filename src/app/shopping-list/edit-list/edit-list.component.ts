import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from "app/shared/ingredient.model";
import { ShoppingListService } from "app/shopping-list/shopping-list.service";

@Component({
  selector: 'app-edit-list',
  templateUrl: './edit-list.component.html',
  styleUrls: ['./edit-list.component.scss']
})

export class EditListComponent implements OnInit {
  @ViewChild("nameInput") ingNameRef: ElementRef;
  @ViewChild("amountInput") ingAmountRef: ElementRef;
  
  constructor(private listService: ShoppingListService) { }

  ngOnInit() {

  }

  addItem(){
    const ingName = this.ingNameRef.nativeElement.value;
    const ingAmount = this.ingAmountRef.nativeElement.value;
    const newIng = new Ingredient(ingName, ingAmount);

    this.listService.addIngredients(newIng);
  }

}
