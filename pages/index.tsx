import React from 'react';
import { GetStaticProps } from 'next';
import Layout from '../components/Layout';
import Index from '../components/index/Index';
import {
  productRelease as release,
  products as productList,
} from '../mocks/tshirts';

const Home = ({ products, productRelease }) => {

  return (
    <Layout disableContainer>
      <Index
        products={products}
        productRelease={productRelease}
      />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {

  return {
    props: {
      products: productList,
      productRelease: release,
    },
  };
};

export default Home;

