import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './news.component.html',
  styleUrl: './news.component.css'
})
export class NewsComponent {
  articles = [
    {
      id: 1,
      title: 'El SkatePark municipal de Chanco abre sus puertas con su taller para escolares',
      date: '02 Septiembre, 2024',
      image: 'assets/images/img1.jpg'
    },
    {
      id: 2,
      title: 'Chanco se posiciona entre los mejores municipios con una gestión del país',
      date: '02 de Septiembre, 2024',
      image: 'assets/images/img2.jpg'
    },
    {
      id: 3,
      title: 'Familias Chanquinas Tendrán Contenedores de Basura Domiciliaria',
      date: '02 de Septiembre, 2024',
      image: 'assets/images/img3.jpg'
    },
    {
      id: 4,
      title: 'Chanco celebra su 152 aniversario con un emotivo acto conmemorativo',
      date: '19 de Julio, 2024',
      image: 'assets/images/img4.jpg',
      description: 'Organizaciones Sociales son destacadas por el Municipio de Chanco'
    },
    {
      id: 5,
      title: '323 Jóvenes Chanquinos reciben beca de educación superior',
      date: '19 de Julio, 2024',
      image: 'assets/images/img5.jpg'
    },
    {
      id: 6,
      title: 'Organizaciones Sociales son destacadas por el Municipio de Chanco',
      date: '19 de Julio, 2024',
      image: 'assets/images/img6.jpg'
    },
    {
      id: 7,
      title: 'Compromiso Cumplido: Autoridades de salud visitan el terreno para la Nueva Posta de Salud en Pahuil',
      date: '01 de Julio, 2024',
      image: 'assets/images/img7.jpg'
    }
  ];
  
  constructor(private router: Router) { }

  goToNewsDetail(id: number): void {
    this.router.navigate(['/news', id]);
  }
}
