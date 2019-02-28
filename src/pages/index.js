import React from 'react';
import { graphql, Link } from 'gatsby';
import Image from 'gatsby-image';
import Layout from '../components/layout';

const IndexPage = ({ data: { products } }) => (
  <Layout>
    <h1>Dope App</h1>
    {products.edges.map(({ node: { id, title, image: { fixed } } }) => (
      <div key={id}>
        <h2>
          <Link to={`/products/${id}`}>{title}</Link>
        </h2>
        <Image fixed={fixed} />
      </div>
    ))}
  </Layout>
);

export default IndexPage;

export const query = graphql`
  {
    products: allContentfulProduct {
      edges {
        node {
          id
          title
          price
          description {
            description
          }
          image {
            fixed(width: 300) {
              ...GatsbyContentfulFixed_tracedSVG
            }
          }
        }
      }
    }
  }
`;
