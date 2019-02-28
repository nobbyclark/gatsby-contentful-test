import React from 'react';
import Layout from '../components/layout';
import { graphql, Link } from 'gatsby';
import Image from 'gatsby-image';

export default function({ data }) {
  const {
    contentfulProduct: {
      title,
      price,
      image: { fixed },
    },
  } = data;

  return (
    <Layout>
      <h2>{title}</h2>
      <p>{price}</p>
      <Image fixed={fixed} />
      <Link to="/">Home</Link>
    </Layout>
  );
}

export const query = graphql`
  query($id: String!) {
    contentfulProduct(id: { eq: $id }) {
      title
      price
      image {
        fixed(width: 300) {
          ...GatsbyContentfulFixed_tracedSVG
        }
      }
    }
  }
`;
