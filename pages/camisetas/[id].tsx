import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import Layout from '../../components/Layout';
import Details from '../../components/details/Details';
import { getOnlyIdUrlFromProducts, getProductById } from '../../mocks/tshirts';

const ProductDetails = ({ tshirt }) => {
  return (
    <Layout disableContainer>
      <Details tshirt={tshirt} />
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: getOnlyIdUrlFromProducts().map(id => ({ params: { id } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {

  const { id } = params;
  const tshirt = getProductById(id);

  return {
    props: {
      tshirt,
    },
  };
};

export default ProductDetails;
