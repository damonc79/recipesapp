import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { EditListComponent } from './shopping-list/edit-list/edit-list.component';
import { ShoppingListService } from "app/shopping-list/shopping-list.service";
import { AppRoutingModule } from "app/app-routing.module";
import { FormsModule } from "@angular/forms";
import { RecipeService } from "./recipe-book/recipe.service";
import { HttpModule } from '@angular/http';
import { ServerService } from './shared/server.service';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth-guard.service';
import { RecipesModule } from './recipe-book/recipe.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    EditListComponent,
    SignupComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    RecipesModule,
    SharedModule
  ],
  providers: [ShoppingListService, RecipeService, ServerService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
