import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { NgClass } from '@angular/common';

// Components
import { NavbarComponent } from "./views/components/navbar/navbar.component";
import { HomeComponent } from './views/components/home/home.component';
import { NewsComponent } from './views/components/news/news.component';
import { FooterComponent } from "./views/components/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, NavbarComponent, NewsComponent, HomeComponent, NgClass, FooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'chancoWeb';

}
