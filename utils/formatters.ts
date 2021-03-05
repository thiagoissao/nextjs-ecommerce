import { TshirtColors, TshirtTypes } from "../interfaces/productsInterface";

const formatMoney = (value: number) => {
  if (!value) {
    return '0,00';
  }
  const round = Number(value).toFixed(2);
  return round.toString().replace('.', ',');
};

const formatNumberToMoneyWithSymbol = (value: number, prefix: string = 'R$') =>
  `${prefix} ${formatMoney(value)}`;

const formatTshirtType = (type: TshirtTypes) => {
  switch (type) {
    case 'CASUAL': return 'Casual';
    default: return '';
  }
};

const formatTshirtColor = (color: TshirtColors) => {
  switch (color) {
    case 'BRANCO': return 'Branco';
    case 'CINZA': return 'Cinza';
    case 'PRETO': return 'Preto';
    default: return '';
  }
};

export default {
  formatMoney,
  formatNumberToMoneyWithSymbol,
  formatTshirtColor,
  formatTshirtType
};
