import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ServerService } from 'app/shared/server.service';
import { Response } from "@angular/http";
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class HeaderComponent implements OnInit {

  constructor(private serverService: ServerService, private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  saveRecipes(){
    this.serverService.updateRecipes().subscribe(
      (response: Response) => {
        console.log(response)
      }
    );
  }

  fetchRecipes(){
    this.serverService.getRecipes();
  }

  onLogout(){
    this.authService.signoutUser();
    this.router.navigate(["/"]);
  }

}
