import { NgModule } from "@angular/core";
import { RecipeBookComponent } from "./recipe-book.component";
import { RecipeStartComponent } from "./recipe-start/recipe-start.component";
import { RecipeEditComponent } from "./recipe-edit/recipe-edit.component";
import { RecipeListComponent } from "./recipe-list/recipe-list.component";
import { RecipeItemComponent } from "./recipe-item/recipe-item.component";
import { RecipeDetailComponent } from "./recipe-detail/recipe-detail.component";
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { RecipesRoutingModule } from "./recipe-routing.module";
import { SharedModule } from "../shared/shared.module";

@NgModule({
    declarations: [
        RecipeBookComponent,
        RecipeListComponent,
        RecipeItemComponent,
        RecipeDetailComponent,
        RecipeStartComponent,
        RecipeEditComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RecipesRoutingModule,
        SharedModule
    ]
})
export class RecipesModule{}