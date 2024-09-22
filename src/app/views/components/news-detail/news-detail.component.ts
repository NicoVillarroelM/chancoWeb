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
      image: 'assets/images/news4.png',
      description: [
        "En una ceremonia emotiva y significativa, celebrada en el Gimnasio Municipal de Chanco, 134 nuevos postulantes recibieron el primer pago de la Beca Municipal de Educación Superior. Este beneficio, otorgado de manera igualitaria y equitativa al 100%, permite a los estudiantes cubrir sus necesidades educativas y generales sin necesidad de justificar sus gastos personales, destacando el compromiso de la administración local con la educación y el desarrollo juvenil.",
        "Detalles del Programa de Becas 2024:",
        "Total de becas otorgadas: 323",
        "Nuevos beneficiarios: 134",
        "Alumnos renovantes: 189",
        "Este año 2024 ha sido significativo en términos de apoyo a la educación superior, con la entrega de 323 becas, superando en 18 el número del año anterior. Esta cifra incluye a 189 alumnos que han renovado su beca, reflejando el continuo esfuerzo de la administración para ampliar el acceso a la educación superior a más jóvenes que buscan oportunidades en otras ciudades.",
        "La ceremonia de entrega, que tuvo lugar en el Gimnasio Municipal de Chanco, fue un evento lleno de orgullo y esperanza. Los estudiantes, acompañados por sus familias, recibieron el primer pago de la beca en un ambiente de celebración y reconocimiento. La beca municipal no solo es un apoyo económico, sino también un estímulo y reconocimiento al esfuerzo académico de estos jóvenes.",
        "En su discurso, el alcalde Marcelo Waddington expresó: “Felicitamos a todos los jóvenes beneficiados y reconocemos su dedicación y esfuerzo para forjar un futuro académico brillante. Esto nos llena de orgullo y nos motiva a seguir trabajando juntos por la educación y el desarrollo de nuestros jóvenes chanquinos. La educación es la base sobre la cual construimos un futuro mejor para nuestra comunidad.”",
        "El programa de becas municipales ha sido fundamental para muchos jóvenes, permitiéndoles continuar sus estudios superiores sin la carga de preocupaciones financieras. Esta iniciativa refleja el compromiso de la administración con la equidad y el acceso a la educación, asegurando que todos los jóvenes tengan la oportunidad de desarrollar su potencial académico y profesional.",
        "La entrega de becas de este año es un testimonio del éxito y la importancia del programa. Los jóvenes beneficiados compartieron sus historias y aspiraciones, agradeciendo el apoyo recibido. “Esta beca es una gran ayuda para mí y mi familia. Me permite concentrarme en mis estudios y alcanzar mis sueños,” comentó uno de los beneficiarios.",
        "La administración de Chanco reafirma su compromiso con la educación, confiando en que estas becas serán un pilar fundamental para que más jóvenes puedan alcanzar sus metas académicas y profesionales. El enfoque en la educación y el desarrollo juvenil sigue siendo una prioridad, con planes para seguir ampliando y mejorando el programa en los años venideros.",
        "La entrega de estas 323 becas representa un paso significativo hacia un futuro más brillante para los jóvenes de Chanco. Con el apoyo continuo de la comunidad y la administración local, estos estudiantes están bien encaminados para lograr sus objetivos académicos y contribuir al desarrollo de la sociedad."
      ]
    },
    {
      id: 6,
      title: 'Organizaciones Sociales son destacadas por el Municipio de Chanco',
      date: '19 de Julio, 2024',
      image: 'assets/images/news5.png',
      description: [
        "En un esfuerzo por fortalecer el tejido social y apoyar el desarrollo integral de la comunidad, diversas organizaciones de la comuna de Chanco han recibido subvenciones por parte del municipio. Este significativo logro es un testimonio del compromiso del alcalde Marcelo Waddington Guajardo con el crecimiento y la consolidación de las organizaciones sociales locales.",
        "Durante esta semana, múltiples organizaciones sociales han sido beneficiadas con subvenciones destinadas a impulsar su desarrollo y consolidar sus proyectos. Estas subvenciones representan un apoyo crucial para las organizaciones, permitiéndoles llevar a cabo sus actividades y programas con mayor eficacia y alcance.",
        "El alcalde Marcelo Waddington Guajardo ha reiterado su compromiso con el desarrollo integral de las organizaciones sociales de Chanco, destacando la importancia de estas instituciones en la promoción del bienestar comunitario. “Estas subvenciones son una muestra de nuestro apoyo y reconocimiento a la incansable labor de los dirigentes sociales, quienes trabajan arduamente para mejorar la calidad de vida en nuestra comuna,” afirmó el alcalde.",
        "Las subvenciones otorgadas permitirán a las organizaciones sociales implementar proyectos que beneficiarán directamente a la comunidad, desde iniciativas educativas y culturales hasta programas de asistencia social y desarrollo económico. Este apoyo refuerza el papel de las organizaciones como agentes de cambio y desarrollo en Chanco.",
        "El municipio de Chanco extiende sus felicitaciones a los dirigentes sociales por su dedicación y esfuerzo constante. Su labor es fundamental para la cohesión y el progreso de la comunidad, y estas subvenciones son un reconocimiento a su valiosa contribución. “Felicitamos a los dirigentes sociales por su incansable labor y les deseamos mucho éxito en sus proyectos,” añadió el alcalde.",
        "El municipio continuará apoyando y colaborando con las organizaciones sociales para asegurar su crecimiento sostenible y su capacidad de impacto. Este compromiso se enmarca dentro de una visión más amplia de desarrollo comunitario, donde la participación y el fortalecimiento de las instituciones locales son pilares fundamentales.",
        "La entrega de subvenciones a las organizaciones sociales de Chanco es un paso significativo hacia un futuro más inclusivo y próspero. Con el respaldo del municipio y el liderazgo de los dirigentes sociales, estas organizaciones están mejor equipadas para llevar a cabo su misión y contribuir al desarrollo integral de la comuna."
      ]
    },
    {
      id: 7,
      title: 'Compromiso Cumplido: Autoridades de salud visitan el terreno para la Nueva Posta de Salud en Pahuil',
      date: '01 de Julio, 2024',
      image: 'assets/images/img7.jpg',
      description: [
        "Hoy fue un día significativo para la comunidad de Pahuil y el sector de Batuco, con la visita de la directora del Servicio de Salud Maule, Marta Caro Andía, quien trajo noticias alentadoras sobre el avance de la nueva Posta de Salud en la zona.",
        "Acompañada por los profesionales de la Secretaría Comunal de Planificación (Secpla), Marta Caro Andía y su equipo visitaron el terreno donde se construirá la nueva posta. Este proyecto es un compromiso asumido por el alcalde Marcelo Waddington Guajardo, quien hace tres años prometió mejorar la infraestructura de salud en la región al asumir su mandato.",
        "“Estamos muy emocionados de ver este proyecto avanzar. La nueva posta no solo será un centro de atención médica, sino también un pilar fundamental para la salud y el bienestar de los habitantes de Pahuil y Batuco,” declaró la directora Marta Caro Andía durante la visita.",
        "El nuevo centro de salud está diseñado para atender las necesidades de la comunidad de manera más eficiente, proporcionando servicios médicos esenciales que mejorarán la calidad de vida de los residentes locales. Esta instalación moderna estará equipada para ofrecer atención primaria, servicios de urgencia y programas de salud preventiva, cumpliendo así con las expectativas y necesidades de la población.",
        "El alcalde Marcelo Waddington Guajardo expresó su satisfacción al ver que este proyecto se está materializando. “Hoy es un día para celebrar el cumplimiento de una promesa que hicimos a nuestros vecinos. La construcción de esta posta es un testimonio de nuestro compromiso con la mejora de la infraestructura sanitaria en nuestra comunidad,” afirmó.",
        "El proyecto de la nueva posta de salud en Pahuil es un paso crucial hacia el fortalecimiento del sistema de atención médica local y refleja la dedicación de las autoridades para mejorar la accesibilidad y la calidad de los servicios de salud en áreas rurales.",
        "La comunidad de Pahuil y Batuco espera con entusiasmo la finalización de esta obra, que representa una mejora significativa en la atención médica y un futuro más saludable para todos sus habitantes."
      ]
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
