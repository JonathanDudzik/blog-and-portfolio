// import services
import * as React from "react"
import { Link } from "gatsby"

const links = [
  {
    text: "Addition",
    url: "/entries/addition",
  },
  {
    text: "Subtraction",
    url: "/entries/subtraction",
  },
  {
    text: "Multiplication",
    url: "/entries/multiplication",
  },
  {
    text: "Division",
    url: "/entries/division",
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
