export type TshirtColors = 'PRETO' | 'BRANCO' | 'CINZA';

export type TshirtTypes = 'CASUAL';

export interface Size {
  value: string | number,
  label: string,
  disabled?: boolean,
}

export interface TShirtListItemInterface {
  id: number,
  idUrl: string,
  title: string,
  description: string,
  price: number,
  priceWithDiscount?: number,
  images: Array<string>;
}

export interface TShirtItemInterface extends TShirtListItemInterface {
  color: TshirtColors,
  type: TshirtTypes,
  sizes: Array<Size>;
  description: string,
  material: Array<string>;
}
