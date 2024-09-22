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
  title = 'Noticias';
  articles = [
    {
      id: 1,
      title: 'El SkatePark municipal de Chanco abre sus puertas con su taller para escolares',
      date: '2024-09-02', // Formato ISO
      displayDate: '02 Septiembre, 2024', // Para mostrar al usuario
      image: 'assets/images/img1.jpg'
    },
    {
      id: 2,
      title: 'Chanco se posiciona entre los mejores municipios con una gestión del país',
      date: '2024-09-02',
      displayDate: '02 de Septiembre, 2024',
      image: 'assets/images/news2.png'
    },
    {
      id: 3,
      title: 'Familias Chanquinas Tendrán Contenedores de Basura Domiciliaria',
      date: '2024-09-02',
      displayDate: '02 de Septiembre, 2024',
      image: 'assets/images/img3.jpg'
    },
    {
      id: 4,
      title: 'Chanco celebra su 152 aniversario con un emotivo acto conmemorativo',
      date: '2024-07-19',
      displayDate: '19 de Julio, 2024',
      image: 'assets/images/125_aniversario.png'
    },
    {
      id: 5,
      title: '323 Jóvenes Chanquinos reciben beca de educación superior',
      date: '2024-07-19',
      displayDate: '19 de Julio, 2024',
      image: 'assets/images/news4.png'
    },
    {
      id: 6,
      title: 'Organizaciones Sociales son destacadas por el Municipio de Chanco',
      date: '2024-07-19',
      displayDate: '19 de Julio, 2024',
      image: 'assets/images/news5.png'
    },
    {
      id: 7,
      title: 'Compromiso Cumplido: Autoridades de salud visitan el terreno para la Nueva Posta de Salud en Pahuil',
      date: '2024-07-01',
      displayDate: '01 de Julio, 2024',
      image: 'assets/images/img7.jpg'
    }
  ];

  ascending = false; // Estado para alternar entre orden ascendente y descendente

  constructor(private router: Router) {
    this.sortArticlesByDate(); // Ordenamos las noticias al cargar el componente
  }

  // Método para ordenar las noticias por fecha
  sortArticlesByDate(): void {
    this.articles.sort((a, b) => {
      return this.ascending
        ? new Date(a.date).getTime() - new Date(b.date).getTime() // Orden ascendente
        : new Date(b.date).getTime() - new Date(a.date).getTime(); // Orden descendente
    });
    this.ascending = !this.ascending; // Alterna el estado para la próxima vez
  }

  // Método para redirigir a la página de detalles de la noticia
  goToNewsDetail(id: number): void {
    this.router.navigate(['/news', id]);
  }
}
