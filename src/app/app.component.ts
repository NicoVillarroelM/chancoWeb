import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { NgClass } from '@angular/common';

// Components
import { NavbarComponent } from "./views/components/navbar/navbar.component";
import { HomeComponent } from './views/components/home/home.component';
import { NewsComponent } from './views/components/news/news.component';
import { FooterComponent } from "./views/components/footer/footer.component";
import { HistoryComponent } from './views/components/history/history.component';
import { PladecoComponent } from './views/components/pladeco/pladeco.component';
import { AlcaldeComponent } from './views/components/alcalde/alcalde.component';
import { ConcejoComponent } from './views/components/concejo/concejo.component';
import { OrganigramaComponent } from './views/components/organigrama/organigrama.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, NavbarComponent, NewsComponent,HistoryComponent, HomeComponent, PladecoComponent, ConcejoComponent, OrganigramaComponent,AlcaldeComponent, NgClass, FooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'chancoWeb';

}
