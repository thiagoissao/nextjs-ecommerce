import React from 'react';
import Grid from '@material-ui/core/Grid';
import ProductCard from './ProductCard';
import { TShirtListItemInterface } from '../../interfaces/productsInterface';

export interface ProductListProps {
  onClickAddToCart: (product: TShirtListItemInterface) => void;
  onClickFavorite: (product: TShirtListItemInterface) => void;
  products: Array<TShirtListItemInterface>,
}

const ProductList = ({
  products,
  onClickAddToCart,
  onClickFavorite,
}: ProductListProps) => {
  return (
    <Grid container spacing={3}>
      {products?.map(product => (
        <Grid key={product.title} item xs={12} sm={6} md={4} lg={3}>
          <ProductCard
            whatsappHref={`/camisetas/${product.idUrl}`}
            href={`/camisetas/${product.idUrl}`}
            withWhatsappButton
            onClickFavorite={() => onClickFavorite(product)}
            onClickAddToCart={() => onClickAddToCart(product)}
            isFavorite
            product={product}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductList;
