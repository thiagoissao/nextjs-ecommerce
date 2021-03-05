import { formatMoney, formatNumberToMoneyWithSymbol } from './formatters';

describe('Formatação de moeda', () => {
  it('Deve retornar 11,00', () => {
    expect(formatMoney(11.00)).toBe('11,00');
  });
  it('Deve retornar 0,00', () => {
    expect(formatMoney(0.0)).toBe('0,00');
  });
  it('Deve retornar 1050,00', () => {
    expect(formatMoney(1050)).toBe('1050,00');
  });
  it('Deve retornar 150,00', () => {
    expect(formatMoney(150.00)).toBe('150,00');
  });
  it('Deve retornar 150,50', () => {
    expect(formatMoney(150.50)).toBe('150,50');
  });
  it('Deve retornar 150,50', () => {
    expect(formatMoney(150.5)).toBe('150,50');
  });
});

describe('Formatação de moeda como um number', () => {
  it('Deve retornar 1600,00', () => {
    expect(formatNumberToMoneyWithSymbol(1600)).toBe('R$ 1600,00');
  });
  it('Deve retornar 9,00', () => {
    expect(formatNumberToMoneyWithSymbol(9)).toBe('R$ 9,00');
  });
  it('Deve retornar 13,90', () => {
    expect(formatNumberToMoneyWithSymbol(13.9)).toBe('R$ 13,90');
  });
  it('Deve retornar 7,90', () => {
    expect(formatNumberToMoneyWithSymbol(7.9)).toBe('R$ 7,90');
  });
  it('Deve retornar 7,90', () => {
    expect(formatNumberToMoneyWithSymbol(7.90)).toBe('R$ 7,90');
  });
  it('Deve retornar 7,95', () => {
    expect(formatNumberToMoneyWithSymbol(7.95)).toBe('R$ 7,95');
  });
});
