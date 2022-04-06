import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {

  constructor() { }

  items = [
    { routerLink: "/planner", text: "Planner" },
    { routerLink: "/recipes", text: "Recipes" },
  ];

  isOpen = false;

  toggleMenu() {
    this.isOpen = !this.isOpen
  }

  ngOnInit(): void {
  }

}
