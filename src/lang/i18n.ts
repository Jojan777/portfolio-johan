/* eslint-disable @typescript-eslint/no-floating-promises */
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: {
      translation: {
        Home: 'Home',
        About: 'About',
        Works: 'Works',
        Contact: 'Contact',
        graduated: '\n Graduated in CampusLands, Software Engineering Student \n',
        career: 'Web Development , Software Engineer',
        from: 'from the CampusLands and Universidad Minuto de Dios',
        focus1: 'Current focus as ',
        focus: 'Agent of Support',
        exp: ', {{spacer}} I have experience in support and development\nin the company ConexusIT, in the city of Bucaramanga, Colombia.',
        HomeButton: 'Download CV',
        IAM: 'I am Johan Florez',
        SocialLinks: 'Social links',
        toLinkedin: 'Link to my LinkedIn',
        toGithub: 'Link to my Github',
        toTwitter: 'Link to my Twitter',
        about_p1:
          'I am a software engineer with a passion for creating innovative solutions. I am a quick learner and I am always looking for new challenges.',
        about_p2: '',
        about_contact: 'Contact me to create something amazing together!',
        see_all: 'See all',
        stack_title: 'Stack and other',
        frontend_title: 'Back-end, developer',
        design_title: 'Agent of Support',
        View_More: 'View More',
        Github: 'Github',
        Live: 'Live',
        loveTo: 'Love to hear from you',
        sendMessage: 'Send Message',
        madeWith: 'Made with 💖(code) by me, for me and for everyone.',
        konami: 'Pss... try the Konami code 😜, use your keyboard',
        anyKey: 'Press any key to leave',
      },
    },
    es: {
      translation: {
        Home: 'Inicio',
        About: 'Acerca de',
        Works: 'Trabajos',
        Contact: 'Contacto',
        graduated: 'Egresado de CampusLands, Estudiante de Ingeniería de Software  ',
        career: 'Desarrollador Web, Ingeniero de Software',
        from: 'por  CampusLands, Universidad Minuto de Dios',
        focus1: 'Enfoque actual como ',
        focus: 'Agente de Soporte',
        exp: ', tengo experiencia en soporte y atención al cliente en la empresa ConexusIT, en la ciudad de Bucaramanga, Colombia.',
        HomeButton: 'Descargar CV',
        IAM: 'Soy Johan Florez',
        SocialLinks: 'Redes sociales',
        toLinkedin: 'Enlace a mi LinkedIn',
        toGithub: 'Enlace a mi Github',
        toTwitter: 'Enlace a mi Twitter',
        about_p1:
          'Como desarrollador backend, me especializo en la creación y mejora de la lógica de las aplicaciones web y móviles. Mi enfoque principal es asegurarme de que las aplicaciones que construyo sean eficientes, seguras y escalables.Mi trabajo implica la implementación de la lógica de negocio, la integración con bases de datos y la seguridad de la aplicación. Colaboro estrechamente con diseñadores y desarrolladores frontend para integrar la lógica del servidor con la interfaz de usuario, asegurando una experiencia de usuario fluida y coherente.Además de garantizar la compatibilidad entre navegadores y dispositivos, me dedico a optimizar el rendimiento de las aplicaciones. Mejoro la velocidad de carga y la experiencia general del usuario, y me aseguro de que la interfaz sea receptiva y se adapte eficazmente a diferentes tamaños de pantalla.Mis habilidades incluyen el uso de frameworks backend populares como Node.js, Python o Java, lo que me permite contribuir de manera significativa a la creación de aplicaciones modernas y centradas en el usuario.  ',
        about_p2:
          'Como ingeniero de software, me especializo en la creacion de software eficiente, seguro y escalable. Mi trabajo implica la implementacion de la logica de negocio, la integracion con bases de datos y la seguridad de la aplicacion. Colaboro estrechamente con diseñadores y desarrolladores frontend para integrar la logica del servidor con la interfaz de usuario, asegurando una experiencia de usuario fluida y coherente. Ademas de garantizar la compatibilidad entre navegadores y dispositivos, me dedico a optimizar el rendimiento de las aplicaciones. Mejoro la velocidad de carga y la experiencia general del usuario, y me aseguro de que la interfaz sea receptiva y se adapte eficazmente a diferentes tamaños de pantalla. Mis habilidades incluyen el uso de frameworks backend populares como Node.js, Python o Java, lo que me permite contribuir de manera significativa a la creacion de aplicaciones modernas y centradas en el usuario.',
        about_contact: '¡Contáctame para crear algo increíble juntos!',
        see_all: 'Ver todo',
        stack_title: 'Tecnologías y otros',
        frontend_title: 'Back-end, desarrollador',
        design_title: 'Ingeniero de Software',
        View_More: 'Ver Más',
        Github: 'Github',
        Live: 'En línea',
        loveTo: 'Me encantaría tener noticias suyas',
        sendMessage: 'Enviar Mensaje',
        madeWith: 'Hecho con 💖(código) por mi, para mi y todos.',
        konami: 'Pss... intenta usar el código Konami 😜, usa tu teclado',
        anyKey: 'Pulse cualquier tecla para salir',
      },
    },
  },
});

export default i18n;
