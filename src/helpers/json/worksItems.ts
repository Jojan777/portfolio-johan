import store3JImage from '../../assets/3J Store.png';

interface Props {
  id: number;
  name: string;
  description: {
    [key: string]: string;
  };
  img: {
    src: string;
    alt: string;
  };
  tags: string[];
  anchor_live: {
    href: string;
    title: string;
  };
  anchor_github: {
    href: string;
    title: string;
  };
}

export const worksItems: Props[] = [
  {
    id: 1,
    name: '3J Store',
    description: {
      es: 'Ecommerce enfocado en la venta de ropa, para damas y caballeros',
      en: 'Ecommerce focused on the sale of clothes, for women and men',
    },
    img: {
      src: store3JImage,
      alt: '3J Store image',
    },
    tags: ['JS', 'CSS', 'HTML'],
    anchor_live: {
      href: 'https://johan-web-developer.github.io/3J-Store/',
      title: 'Link to Website',
    },
    anchor_github: {
      href: 'https://github.com/Johan-web-developer/3J-Store',
      title: 'Link to Github repository',
    },
  },
  {
    id: 2,
    name: 'MERN Calendar',
    description: {
      es: '📅 Aplicación React para crear un calendario de eventos [MERN]',
      en: '📅 React application to create an event calendar [MERN].',
    },
    img: {
      src: 'https://i.imgur.com/oMrZDLF.png',
      alt: 'MERN app image',
    },
    tags: ['MERN', 'JS', 'AXIOS', 'ROUTERDOM'],
    anchor_live: {
      href: 'https://oscarfdiaz.github.io/mern-calendar/',
      title: 'Link to online page',
    },
    anchor_github: {
      href: 'https://github.com/OscarFDiaz/mern-calendar',
      title: 'Link to Github repository',
    },
  },
  {
    id: 3,
    name: 'Diario Personal',
    description: {
      es: '📰 Aplicación React para crear un diario personal',
      en: '📰 React application to create a personal diary',
    },
    img: {
      src: 'https://i.imgur.com/qhlxj2f.png',
      alt: 'Diario app image',
    },
    tags: ['FIREBASE', 'REDUX', 'MUI', 'REACT'],
    anchor_live: {
      href: 'https://oscarfdiaz.github.io/react-journal-app/',
      title: 'Link to online page',
    },
    anchor_github: {
      href: 'https://github.com/OscarFDiaz/react-journal-app',
      title: 'Link to Github repository',
    },
  },
  {
    id: 4,
    name: 'Tlak!',
    description: {
      es: '🌐 Aprende una palabra en inglés diariamente, con sonido y ejemplos',
      en: '🌐 Learn an English word daily, with sound and examples',
    },
    img: {
      src: 'https://i.imgur.com/dPMVa8b.jpg',
      alt: 'Tlak app image',
    },
    tags: ['TAILWIND', 'ZUSTAND', 'REACT'],
    anchor_live: {
      href: 'https://oscarfdiaz.github.io/TlakApp/',
      title: 'Link to online page',
    },
    anchor_github: {
      href: 'https://github.com/OscarFDiaz/TlakApp',
      title: 'Link to Github repository',
    },
  },
  {
    id: 5,
    name: 'AddWatermark',
    description: {
      es: '📷 Permite añadir una marca de agua a una o más imágenes, para descargarlas',
      en: '📷 Allows you to add a watermark to one or more images for downloading.',
    },
    img: {
      src: 'https://i.imgur.com/ibCGp5H.png',
      alt: 'Addwatermark app image',
    },
    tags: ['JSZIP', 'JQUERY', 'HTML', 'CSS'],
    anchor_live: {
      href: 'https://oscarfdiaz.github.io/AddWaterMarkToImage/',
      title: 'Link to online page',
    },
    anchor_github: {
      href: 'https://github.com/OscarFDiaz/AddWaterMarkToImage',
      title: 'Link to Github repository',
    },
  },
];
