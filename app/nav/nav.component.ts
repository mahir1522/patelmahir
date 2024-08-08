import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {NgClass, NgIf, NgStyle} from "@angular/common";

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [
    RouterLink,
    NgClass,
    NgIf,
    NgStyle
  ],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {

  isNavbarCollapsed = true;

  constructor() {
  }
  toggleNavbar() {
    this.isNavbarCollapsed = !this.isNavbarCollapsed;
  }

  closeNavbar(){
    this.isNavbarCollapsed = true;
  }
}
