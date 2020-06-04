import React from "react"
import {Link, graphql} from 'gatsby';
import Img from 'gatsby-image';
import Layout from "../components/Layout";

export default (props) =>{ 
  console.log(props);
  return (
      <Layout>
        <h1>Home</h1>
        <Link to="/about">Acerca de</Link>
 
         <Img fluid = {props.data.file.childImageSharp.fluid}/>
      </Layout>
  )

}

//consulta a graphql
export const query = graphql `
  query MyQuery {
    file(relativePath: {eq: "meme.jpg"}){
      childImageSharp{
      fluid(maxWidth: 1920){
        ...GatsbyImageSharpFluid
      }
     }
    }
  }
`;



/**FIXED */
//   fixed(width: 500, height: 340){
//     ...GatsbyImageSharpFixed
//   }
