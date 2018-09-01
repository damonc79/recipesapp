import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RecipeItemComponent } from "../recipe-book/recipe-item/recipe-item.component";
import { RecipeStartComponent } from "../recipe-book/recipe-start/recipe-start.component";
import { RecipeDetailComponent } from "../recipe-book/recipe-detail/recipe-detail.component";
import { RecipeEditComponent } from "../recipe-book/recipe-edit/recipe-edit.component";
import { RecipeBookComponent } from "../recipe-book/recipe-book.component";
import { AuthGuard } from "../auth/auth-guard.service";


const recipesRoutes: Routes = [
    { path: "recipes", component: RecipeBookComponent, children: [
        {path: "", component: RecipeStartComponent},
        {path: "new", component: RecipeEditComponent, canActivate: [AuthGuard]},
        {path: ":id", component: RecipeDetailComponent},
        {path: ":id/edit", component: RecipeEditComponent, canActivate: [AuthGuard]},
    ] },
]

@NgModule({
    imports: [
        RouterModule.forChild(recipesRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class RecipesRoutingModule{
    
}
