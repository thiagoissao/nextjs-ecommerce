import { TShirtItemInterface, TShirtListItemInterface } from "../interfaces/productsInterface";
import strings from '../utils/strings';

export const products: Array<TShirtListItemInterface> = [
  {
    id: 1,
    idUrl: 'moletom-preto-masculino-basico',
    title: `Moletom Preto Masculino Básico ${strings.appName}`,
    price: 140.0,
    description: 'Moletom',
    images: [
      '/images/clothes/camisa1.png',
    ],
  },
  {
    id: 2,
    idUrl: 'moletom-preto-feminino-basico',
    title: `Moletom Preto Feminino Básico ${strings.appName}`,
    price: 140.0,
    description: 'Moletom',
    images: [
      '/images/clothes/camisa2.png',
    ],
  },
  {
    id: 3,
    idUrl: 'camiseta-branca-basica',
    title: `Camiseta Branca Básico ${strings.appName}`,
    price: 100,
    priceWithDiscount: 80,
    description: 'Moletom',
    images: [
      '/images/clothes/camiseta4.png',
    ],
  },
  {
    id: 4,
    idUrl: 'blusa-preta',
    title: `Blusa Preta ${strings.appName}`,
    price: 250,
    description: 'Moletom',
    images: [
      '/images/clothes/blusa.png',
    ],
  },
];

export const productRelease = {
  id: 5,
  idUrl: `Camiseta-basica-preta-rakoon`,
  title: `Camiseta básica preta ${strings.appName}`,
  price: 140.0,
  description: 'Moletom',
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
    idUrl: 'moletom-preto-masculino-basico',
    title: `Camiseta Básica Preta ${strings.appName}`,
    price: 140.0,
    description: `Bem, finalmente conseguimos. 
                Vestimos o Nike Drop-Type Premium em jeans 
                premium com linhas inacabadas e acentuamos com
                 costura dupla nas sobreposições e costura reciclada na
                  lateral. Um logotipo costurado
                   na língua é apenas um dos detalhes detectáveis que
                    torna o mais novo membro da família N354 algo especial.`,
    images,
    color: 'PRETO',
    material: [
      'Gola Redonda',
      '100% algodão',
      `Fio 30 penteado, possui ótima qualidade e durabilidade 
                pois passa por uma penteadeira removendo impurezas do algodão`,
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
