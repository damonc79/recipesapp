import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  @Output() selectedPath = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  navigateTo(section: string) {
    this.selectedPath.emit(section);
  }

}
