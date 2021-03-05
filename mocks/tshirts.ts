import { TShirtItemInterface, TShirtListItemInterface } from "../interfaces/productsInterface";
import strings from '../utils/strings';

export const products: Array<TShirtListItemInterface> = [
  {
    id: 1,
    idUrl: 'mask-black-basico',
    title: `Máscara Black ${strings.appName}`,
    price: 10.0,
    description: 'Masc',
    images: [
      '/images/clothes/mascara.png',
    ],
  },
  {
    id: 2,
    idUrl: 'calca-grey-feminino-basico',
    title: `Calça Moletom Feminino Básico ${strings.appName}`,
    price: 140.0,
    description: 'Sweatshirt',
    images: [
      '/images/clothes/calca.png',
    ],
  },
  {
    id: 3,
    idUrl: 'camiseta-branca-basica',
    title: `Camiseta Branca Básico ${strings.appName}`,
    price: 100,
    priceWithDiscount: 80,
    description: 'Sweatshirt',
    images: [
      '/images/clothes/camiseta4.png',
    ],
  },
  {
    id: 4,
    idUrl: 'toca-preta',
    title: `Toca Preta ${strings.appName}`,
    price: 250,
    description: 'Toca',
    images: [
      '/images/clothes/toca.png',
    ],
  },
];

export const productRelease = {
  id: 5,
  idUrl: `Camiseta-basica-preta-rakoon`,
  title: `Camiseta básica preta ${strings.appName}`,
  price: 140.0,
  description: 'Sweatshirt',
  images: [
    '/images/clothes/camiseta1.png',
    '/images/clothes/camiseta2.png',
    '/images/clothes/camiseta3.png',
  ],
};

export const getOnlyIdUrlFromProducts = () => {
  const ids = products.map(product => product.idUrl);
  return [...ids, productRelease.idUrl];
};

export const getProductById = (id: string | string[]) => {
  const images = [
    '/images/clothes/camiseta1.png',
    '/images/clothes/camiseta2.png',
    '/images/clothes/camiseta3.png',
    '/images/clothes/camiseta4.png',
    '/images/clothes/camiseta5.png',
    '/images/clothes/camiseta6.png',
  ];

  const tshirt: TShirtItemInterface = {
    id: 1,
    idUrl: 'sweatshirt-black-masculino-basico',
    title: `Camiseta Básica Preta ${strings.appName}`,
    price: 140.0,
    description: `There are many variations
     of passages of Lorem Ipsum available, but the majority have suffered alteration in some
      form, by injected humour, or randomised words which don't look even slightly believable. 
      If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything
       embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat
        predefined chunks as necessary, making this the first true generator on the Internet.
         It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures
         , to non-characteristic words etc.`,
    images,
    color: 'PRETO',
    material: [
      'Gola Redonda',
      '100% algodão',
      `Material resistente para 300 lavagens`,
    ],
    sizes: [
      { value: 'p', label: 'P' },
      { value: 'm', label: 'M' },
      { value: 'g', label: 'G' },
      { value: 'gg', label: 'GG' },
    ],
    type: 'CASUAL',
    priceWithDiscount: 120,
  };

  return tshirt;
};
