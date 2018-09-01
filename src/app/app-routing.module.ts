import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RecipeBookComponent } from "app/recipe-book/recipe-book.component";
import { ShoppingListComponent } from "app/shopping-list/shopping-list.component";
import { RecipeItemComponent } from "app/recipe-book/recipe-item/recipe-item.component";
import { RecipeStartComponent } from "app/recipe-book/recipe-start/recipe-start.component";
import { RecipeDetailComponent } from "app/recipe-book/recipe-detail/recipe-detail.component";
import { RecipeEditComponent } from "app/recipe-book/recipe-edit/recipe-edit.component";
import { SignupComponent } from "app/auth/signup/signup.component";
import { SigninComponent } from "./auth/signin/signin.component";
import { AuthGuard } from "./auth/auth-guard.service";

const appRoutes: Routes = [
    { path: "", redirectTo: "/recipes", pathMatch: "full"},
    { path: "shopping", component: ShoppingListComponent },
    { path: "signup", component: SignupComponent },
    { path: "signin", component: SigninComponent },
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})

export class AppRoutingModule{

}