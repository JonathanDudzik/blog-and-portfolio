// import services
import * as React from "react"
import { Link } from "gatsby"

const links = [
  {
    text: "Addition",
    url: "/blog/latest",
  },
  {
    text: "Subtraction",
    url: "/blog/subtraction",
  },
  {
    text: "Multiplication",
    url: "/blog/multiplication",
  }
]

const SideMenu = props => (
  <ul>
    {links.map(link => (
        <li key={link.url} style={{ marginRight: `5%` }}>
          <Link to={link.url}>
            {link.text}
          </Link>
        </li>
    ))}
  </ul>
)

export default SideMenu
