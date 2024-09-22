import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-news-detail',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './news-detail.component.html',
  styleUrl: './news-detail.component.css'
})
export class NewsDetailComponent {
  newsList = [
    {
      id: 1,
      title: 'El SkatePark municipal de Chanco abre sus puertas con su taller para escolares',
      date: '02 Septiembre, 2024',
      image: 'assets/images/news1.png',
      description: [
        'Con gran entusiasmo, el Municipio de Chanco ha dado inicio al taller de Skate para niños y niñas de los establecimientos educacionales de la comuna. Este taller se llevará a cabo en el recién inaugurado SkatePark municipal, donde los pequeños podrán disfrutar de esta disciplina que ha ganado popularidad en todo el mundo y que hoy en día es un deporte olímpico.',
        
        'Para garantizar una experiencia segura y de alta calidad, el Municipio de Chanco ha adquirido equipos completos, incluyendo cascos y skates, para que los participantes puedan practicar de manera segura. El alcalde Marcelo Waddington, comprometido con la promoción del deporte en la comuna, ha destacado la importancia de fomentar hábitos saludables entre los jóvenes a través de diversas disciplinas. “Este taller de Skate es una clara muestra de nuestro compromiso por ofrecer actividades que enriquezcan la vida de nuestros niños y jóvenes”, comentó el alcalde Waddington.',
        
        'La iniciativa ha sido bien recibida por la comunidad. María Fuentes, madre de uno de los niños participantes, expresó su alegría: “Estamos muy contentos de que Chanco cuente con un espacio tan moderno como el SkatePark. Mi hijo estaba emocionado por empezar, y ahora cada día sale con una sonrisa de oreja a oreja”.',
        
        'Por su parte, los niños también han mostrado su entusiasmo. “Siempre quise aprender a hacer trucos en la tabla, y ahora con mis amigos y los profesores lo estamos consiguiendo.”, comentó Tomás, un estudiante de Pahuil.',
        
        'Los talleres son gestionados por la Unidad de Deporte y el área extraescolar del municipio, quienes trabajan incansablemente para ofrecer actividades que no solo promuevan la salud física, sino que también desarrollen habilidades sociales y personales entre los jóvenes de Chanco. “Los esperamos en el SkatePark para rodar juntos hacia un futuro lleno de energía y diversión”, concluyó el alcalde.'
      ]
    },
    {
      id: 2,
      title: 'Chanco se posiciona entre los mejores municipios con una gestión del país',
      date: '02 de Septiembre, 2024',
      image: 'assets/images/news2.png',
      description: [
        "El municipio de Chanco ha alcanzado un hito histórico al ser reconocido entre los municipios con mejor gestión a nivel nacional, obteniendo por primera vez el prestigioso Fondo de Incentivo a la Gestión Municipal (FIGEM) este logro es un reflejo del trabajo incansable de los funcionarios municipales y del liderazgo del alcalde Marcelo Waddington Guajardo.",
        
        "El FIGEM, otorgado por la Subsecretaría de Desarrollo Regional y Administrativo (SUBDERE), es un fondo que premia la eficiencia en la gestión administrativa y financiera de los municipios. Chanco ha demostrado una notable mejora en su administración en tan solo tres años, lo que ha resultado en la obtención de $90.702.386 millones de pesos que serán destinados a seguir avanzando en iniciativas clave para la comuna.",
        
        "“Estamos felices y orgullosos de cada uno de nuestros funcionarios y su trabajo. Este reconocimiento es el fruto de nuestro esfuerzo continuo por mejorar la calidad de vida en nuestra comuna”, declaró el alcalde Waddington Guajardo.“Gracias al compromiso de nuestro equipo y a este importante logro, podremos seguir potenciando las ayudas sociales y las inversiones en tiempos difíciles”.",
        
        "Este importante financiamiento permitirá a Chanco continuar con su misión de construir un municipio más transparente, honesto y alegre, siempre en beneficio de todos sus habitantes.“Sigamos trabajando juntos por ese Chanco que todos queremos”, concluyó el alcalde.",
      ]
    },
    {
      id: 3,
      title: 'Familias Chanquinas Tendrán Contenedores de Basura Domiciliaria',
      date: '02 de Septiembre, 2024',
      image: 'assets/images/img3.jpg',
      description: [
        "El 3 de enero de este año, nuestros equipos se volcaron a las calles para recopilar información para un importante proyecto, que hoy ya se materializa.",
        "¿Qué pasó?",
        "Hoy, el Gobierno Regional entregó la resolución para enviar a licitación el proyecto “Adquisición Contenedores de Residuos Sólidos de la comuna de Chanco”, por un monto superior a los $177 millones de pesos. Esta resolución marca un hito significativo en los esfuerzos de la comuna por mejorar la gestión de residuos y fomentar un ambiente más limpio y saludable para todos sus habitantes.",
        "¿De qué se trata el proyecto?",
        "El proyecto, gestionado por el alcalde Marcelo Waddington Guajardo, tiene como objetivo principal dotar a los hogares y sectores rurales de la comuna de Chanco con contenedores de basura adecuados. En su primera etapa, el proyecto otorgará:",
        "Contenedores de 120 litros: Serán entregados a los hogares de Chanco Urbano, Pahuil y La Vega. Estos contenedores están diseñados para facilitar la recolección diaria de residuos domiciliarios, contribuyendo a mantener las calles y barrios más limpios y ordenados.",
        "Contenedores de 1.100 litros: Se instalarán 100 contenedores en diversos sectores rurales de la comuna. Estos contenedores de gran capacidad están destinados a áreas con mayores necesidades de almacenamiento de residuos, optimizando así la gestión de basura en zonas menos urbanizadas.",
        "Beneficios del Proyecto",
        "La implementación de estos contenedores traerá múltiples beneficios para la comunidad de Chanco: Mejora en la Gestión de Residuos: La distribución de contenedores permitirá una recolección de basura más eficiente y organizada, evitando la acumulación de desechos en lugares inapropiados.",
        "Promoción de la Salud Pública: Al contar con contenedores adecuados, se reducirá la proliferación de plagas y enfermedades, promoviendo un entorno más saludable para todos los residentes.",
        "Fomento del Cuidado del Medio Ambiente: Este proyecto se alinea con los esfuerzos globales por reducir el impacto ambiental de los residuos sólidos, fomentando prácticas más sostenibles y responsables en la comunidad.",
        "El alcalde Marcelo Waddington Guajardo expresó su satisfacción con la aprobación del proyecto, destacando su importancia para el bienestar de la comuna: “Este es un gran paso hacia el desarrollo sostenible de Chanco. Estamos comprometidos en mejorar la calidad de vida de nuestros ciudadanos y este proyecto es una prueba más de nuestro esfuerzo por construir una comuna más limpia y saludable”.",
        "Queremos agradecer a todas las personas y entidades que hicieron posible esta gestión, en especial al Gobierno Regional por su apoyo y compromiso con el desarrollo de nuestra comuna. También extendemos nuestro agradecimiento a los vecinos de Chanco, Pahuil y La Vega, así como a los residentes de los sectores rurales, por su paciencia y colaboración durante el proceso de recopilación de información.",
        "Este proyecto es un claro ejemplo de lo que se puede lograr cuando trabajamos juntos por el bienestar común.",
        "Esperamos que la implementación de estos contenedores marque el comienzo de una nueva era de gestión de residuos en Chanco, beneficiando a todas las familias y contribuyendo a un entorno más limpio y ordenado."
      ]
    },
    {
      id: 4,
      title: 'Chanco celebra su 152 aniversario con un emotivo acto conmemorativo',
      date: '19 de Julio, 2024',
      image: 'assets/images/125_aniversario.png',
      description: [
        "Con la presencia de diversas autoridades, dirigentes sociales y la comunidad general, se realizó el anco conmemorativo del 152° aniversario de nuestra querida Comuna de Chanco",
        "La ceremonia estuvo marcada por la emoción y el reconocimiento a aquellos chanquinos y chanquinas que han demostrado liderazgo y dedicación en beneficio de nuestra comunidad.",
        "Por tercer año consecutivo, el Municipio destacó a ciudadanos ejemplares en diversas categorías:",
        "Comerciante destacado: Héctor Campos",
        "Donaciones de terreno: Juan Luis Constenla",
        "Dirigente Social Destacado: Juan Esquivel Leal",
        "Comerciante Gastronómico de la comuna por su receta tradicional de las famosas longanizas ROSALES: Sergio Rosales",
        "Funcionario destacado de Emergencias: Hugo González",
        "Joven Profesional Destacado de la comuna: Jimmy Gutierrez",
        "Bombero destacado por su trayectoria y entrega a la comuna: José Palermo Arellano",
        "Medio de Comunicación Emergente: Harry TV, Eliécer Jara Salgado",
        "Dirigente Deportivo Destacado de la Liga Rural: Juan Carlos Sepúlveda",
        "Carabinero Destacado: Elías Jara",
        "Artesano de la comuna: Pedro Vasquez",
        "Personas de mar: Mireya Muñoz Lepe",
        "Artista destacado honorífico : Ivana Pino Arellano",
        "El acto también contó con la participación artística de las escuelas Los Héroes y San Ambrosio, así como del Liceo Federico Albert Faupp, quienes deleitaron a los presentes con su talento.",
        "El alcalde Marcelo Waddington Guajardo destacó la importancia de esta celebración, diciendo: “Este aniversario no solo es un momento para recordar nuestra historia, sino también para honrar a aquellos que, con su trabajo y dedicación, hacen de Chanco un lugar mejor cada día. Agradezco a todos los presentes y felicito a los destacados por su invaluable contribución a nuestra comunidad.”",
        "¡Felices 152 años, Chanco!"

      ]
    },
    {
      id: 5,
      title: '323 Jóvenes Chanquinos reciben beca de educación superior',
      date: '19 de Julio, 2024',
      image: 'assets/images/news4.png'
    },
    {
      id: 6,
      title: 'Organizaciones Sociales son destacadas por el Municipio de Chanco',
      date: '19 de Julio, 2024',
      image: 'assets/images/news5.png'
    },
    {
      id: 7,
      title: 'Compromiso Cumplido: Autoridades de salud visitan el terreno para la Nueva Posta de Salud en Pahuil',
      date: '01 de Julio, 2024',
      image: 'assets/images/img7.jpg'
    }
  ];

  shareOnFacebook() {
    console.log('Compartiendo en Facebook');
  }

  shareOnTwitter() {
    console.log('Compartiendo en Twitter');
  }

  likeNews() {
    console.log('¡Me gusta esta noticia!');
  }

  submitComment(event: Event) {
    event.preventDefault();
    console.log('Comentario enviado');
  }

  news: any = {}; // Define la propiedad news
  newsId: number | null = null;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.newsId = +params.get('id')!;
      if (this.newsId) {
        this.news = this.newsList.find(news => news.id === this.newsId);
      }
    });
  }
}
