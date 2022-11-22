// import React services
import React from "react"
import { graphql } from "gatsby"

// import components
import Toolbar from "../Toolbar/toolbar"
import SideMenu from "../SideMenu/sideMenu"

// CSS Module import
import * as styles from "./post.module.css"

// markup
export default function BlogPost({ data }) {
  const post = data.markdownRemark
  return (
    <div className={styles.blogGrid}>
      <div className={styles.blogToolbar}>
        <Toolbar />
      </div>
      <div className={styles.blogSideMenu}>
        <SideMenu data={data} />
      </div>
      <div className={styles.blogMain}>
        <main className={styles.markdown}>
          <h1>{post.frontmatter.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </main>
      </div>
    </div>
  )
}

export const query = graphql`
  query($slug: String!) {
    allMarkdownRemark(
      sort: { 
        fields: [frontmatter___title], 
        order: ASC 
      }
    ) {
      edges {
        node {
          frontmatter {
            title
          }
          fields {
            slug
          }
        }
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`