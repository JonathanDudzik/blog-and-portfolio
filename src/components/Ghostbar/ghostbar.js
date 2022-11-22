// import services
import * as React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"

// CSS Module import
import * as styles from "./ghostbar.module.css"

// import assets
import logo from "../../images/long-logo.png"

const Ghostbar = () => {  
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
  return (
    <div className={styles.ghostbar}>
       <a
        href="/"
        className={styles.ghostbarImg}
      >
        <img 
          className={styles.ghostbarImg}
          src={logo}
          alt="Logo"
        />    
      </a>
      <div className={styles.ghostbarLinks}>
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

export default Ghostbar
