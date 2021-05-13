// import services
import * as React from "react"
import { Link } from "gatsby"

const links = [
  {
    text: "Home",
    url: "/",
  },
  {
    text: "Blog",
    url: "/blog/latest",
  },
  {
    text: "About",
    url: "/about",
  }
]

const Toolbar = props => (
  <div>
    <span style={{ marginRight: `20%` }}>Jonathan Dudzik</span>
    {links.map(link => (
        <span key={link.url} style={{ marginRight: `5%` }}>
          <Link to={link.url}>
            {link.text}
          </Link>
        </span>
    ))}
  </div>
)

export default Toolbar
