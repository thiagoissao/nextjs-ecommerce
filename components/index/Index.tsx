import React from 'react';
import Grid from '@material-ui/core/Grid';
import ProductBanner from './ProductBanner';
import ContactBanner from './ContactBanner';
import ProductList from './ProductList';
import { TShirtListItemInterface } from '../../interfaces/productsInterface';
import Section from './Section';
import Banner from './Banner';
import SustainabilityBanner from '../generic/SustainabilityBanner';

export type IndexProps = {
  products: Array<TShirtListItemInterface>,
  productRelease: TShirtListItemInterface;
};

const Index = ({
  products,
  productRelease,
}: IndexProps) => {

  return (
    <Grid container>
      <Grid item xs={12}>
        <Banner />
      </Grid>
      <Grid item xs={12}>
        <Section title='Lançamento!'>
          <ProductBanner product={productRelease} />
        </Section>
      </Grid>
      <Grid item xs={12}>
        <SustainabilityBanner />
      </Grid>
      <Grid item xs={12}>
        <Section title='Nossos destaques'>
          <ProductList
            onClickAddToCart={() => { }}
            onClickFavorite={() => { }}
            products={products}
          />
        </Section>
      </Grid>
      <Grid item xs={12}>
        <Section title='Fale com a Gente'>
          <ContactBanner />
        </Section>
      </Grid>
    </Grid>
  );
};

export default Index;
