import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Gallery from './Gallery';
import ProductCardDetails from './ProductCardDetails';
import ProductDetails from './ProductDetails';
import { Size, TShirtItemInterface } from '../../interfaces/productsInterface';
import strings from '../../utils/strings';
import format from '../../utils/formatters';
import useWidth from '../../hooks/useWidth';
import SecondaryBanner from '../index/SecondaryBanner';

export type DetailsProps = {
  tshirt: TShirtItemInterface;
};

const Details = ({ tshirt }: DetailsProps) => {
  const width = useWidth();

  const [selectedSize, setSelectedSize] = useState<Size>({ label: 'M', value: 'm' });

  const buildWhatsAppMessage = (shirt: TShirtItemInterface) => {
    const url = `https://www.rakoon.com.br/camisetas/${tshirt.idUrl}`;

    const intro = 'Olá, tenho interesse nesse produto:';
    const title = `*${shirt.title}*`;
    const typeColor = `${format.formatTshirtType(shirt.type)} - ${format.formatTshirtColor(shirt.color)}`;
    const size = `*Tamanho:* ${selectedSize.label}`;
    const price = `*Preço*: ${shirt.priceWithDiscount ?
      format.formatNumberToMoneyWithSymbol(shirt.priceWithDiscount) : format.formatNumberToMoneyWithSymbol(shirt.price)}`;
    const quantity = '*Quantidade:* ';

    const address = '*Endereço*: ';

    const message = `${intro}%0a%0a${title}%0a${typeColor}%0a${size}%0a${price}%0a${quantity}%0a${address}%0a${url}`;
    return `${strings.whatsappLinkSkeleton}${message}`;
  };

  return (
    <Grid container>
      <Grid item xs={12}>
        <Container maxWidth='lg' disableGutters={width === 'xs'}>
          <Grid container>
            <Grid item xs={12} lg={8}>
              <Gallery
                title={tshirt.title}
                images={tshirt.images}
              />
            </Grid>
            <Grid item xs lg>
              <Box paddingX={3}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Box my={7}>
                      <ProductCardDetails
                        title={tshirt.title}
                        color={tshirt.color}
                        type={tshirt.type}
                        price={tshirt.price}
                        priceWithDiscount={tshirt.priceWithDiscount}
                        whatsappHref={buildWhatsAppMessage(tshirt)}
                        sizes={tshirt.sizes}
                        selectedSize={selectedSize}
                        onChangeSize={setSelectedSize}
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={12}>
                    <ProductDetails
                      description={tshirt.description}
                      material={tshirt.material}
                    />
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Grid>
      <Grid item xs={12}>
        <Box paddingTop={4}>
          <SecondaryBanner />
        </Box>
      </Grid>
    </Grid>
  );
};

export default Details;
