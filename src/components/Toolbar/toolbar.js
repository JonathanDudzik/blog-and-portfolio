// import services
import * as React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"

// CSS Module import
import * as styles from "./toolbar.module.css"

// import assets
import logo from "../../images/long-logo.png"

const Toolbar = () => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            links {
              text
              url
            }
          }
        }
      }
    `
  )
  return(
    <div className={styles.toolbar}>
      <a
        href="/"
        className={styles.toolbarImg}
      >
        <img 
          className={styles.toolbarImg}
          src={logo}
          alt="Logo"
        />    
      </a>
      <div className={styles.toolbarLinks}>
        {data.site.siteMetadata.links.map(link => (
          <Link 
            to={link.url}
            key={link.url}
            style={{ paddingRight: `20px`, fontSize: `large`, color: `#fff` }}
          >
            {link.text}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Toolbar
