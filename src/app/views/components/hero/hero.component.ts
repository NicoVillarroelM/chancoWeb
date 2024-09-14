import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  heroImage = [
    { 
      titulo: 'Bienvenido a ChancoWeb',
      descripcion: 'Chanco es una joya costera que combina la belleza natural con una vibrante vida cultural. Con su ambiente acogedor y su riqueza en tradiciones, es un destino perfecto para aquellos que buscan una experiencia auténtica en el sur de Chile.',
      imagen: 'assets/images/trigo1.png',
    }
  ]
}
