// import services
import * as React from "react"
import { Link } from "gatsby"

// CSS Module import
import * as styles from "./ghostbar.module.css"

// import assets
import logo from "../../images/long-logo.png"

const links = [
  {
    text: "Home",
    url: "/",
  },
  {
    text: "Blog",
    url: "/blog",
  },
  {
    text: "About",
    url: "/about",
  }
]

const Ghostbar = () => (
  <div className={styles.ghostbar}>
    <img 
      style={{ height: `80%` }}
      src={logo}
      alt="Logo"
    />    
    {links.map(link => (
      <Link 
        to={link.url}
        key={link.url}
        style={{ paddingRight: `5%`, fontSize: `large` }}
      >
        {link.text}
      </Link>
    ))}
  </div>
)

export default Ghostbar
