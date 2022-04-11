// import services
import * as React from "react"
import { Link } from "gatsby"

// CSS Module import
import * as styles from "./sideMenu.module.css"

function reactNav() {
  window.open(('https://codesandbox.io/s/rl74rn6q7q'), "_blank");
}

function astroNav() {
  window.open(('https://astro.new/'), "_blank");
}

const SideMenu = (props) => {
  console.log(props.data);
  return (
    <div className={ styles.flexContainer }>
      <ul>
        {props.data.allMarkdownRemark.edges.map(({node}) => (
            <li key={node.id} className={ styles.listItems }>
              <Link to={node.fields.slug}>
                {node.frontmatter.title}
              </Link>
            </li>
        ))}
      </ul>

      <hr></hr>
      
      <button 
        onClick={ astroNav }
        className={ styles.listButtons }
      >
        Astro Playground
      </button>
    </div>
  )
}

export default SideMenu
