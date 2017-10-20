import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ServerService } from 'app/shared/server.service';
import { Response } from "@angular/http";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class HeaderComponent implements OnInit {

  constructor(private serverService: ServerService) { }

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

}
