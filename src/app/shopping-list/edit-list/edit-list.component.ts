import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredient } from "app/shared/ingredient.model";

@Component({
  selector: 'app-edit-list',
  templateUrl: './edit-list.component.html',
  styleUrls: ['./edit-list.component.scss']
})
export class EditListComponent implements OnInit {
  @ViewChild("nameInput") ingNameRef: ElementRef;
  @ViewChild("amountInput") ingAmountRef: ElementRef;
  @Output() ingOut = new EventEmitter<Ingredient>();
  
  constructor() { }

  ngOnInit() {

  }

  addItem(){
    const ingName = this.ingNameRef.nativeElement.value;
    const ingAmount = this.ingAmountRef.nativeElement.value;

    const newIng = new Ingredient(ingName, ingAmount);

    this.ingOut.emit(newIng);
  }

}
