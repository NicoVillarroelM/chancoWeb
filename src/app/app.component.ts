import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgClass } from '@angular/common';

// Components
import { NavbarComponent } from "./views/components/navbar/navbar.component";
import { HeroComponent } from "./views/components/hero/hero.component";
import { NewsComponent } from './views/components/news/news.component';
import { FooterComponent } from "./views/components/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, NewsComponent, NgClass, HeroComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'chancoWeb';
}
