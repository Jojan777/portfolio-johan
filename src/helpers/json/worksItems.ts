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
];
