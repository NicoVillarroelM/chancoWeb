import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TopNavComponent } from "../top-nav/top-nav.component";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgClass, RouterLink, TopNavComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  menuVisible: boolean = false; // Estado del menú

  toggleMenu() {
    this.menuVisible = !this.menuVisible;
  }

  closeMenu() {
    this.menuVisible = false; // Cierra el menú
  }
}
