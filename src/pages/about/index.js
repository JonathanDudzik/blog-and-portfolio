// React and component imports
import React from "react"

// import components
import Layout from "../../components/Layout/layout"
import Toolbar from "../../components/Toolbar/toolbar"

// CSS Module import
import * as styles from "./about.module.css"

// inline component
/* Tip: Generally, if you use a component in multiple places on a site, 
it should be in its own module file in the components directory. 
But, if it’s used only in one file, create it inline. */
const Skills = props => (
  <div>
    <p className={styles.skills}>
      My Skillz
    </p>
    <img src={props.avatar} className={styles.profilePicture} alt="" />
  </div>
)

const About = () => {
  return (
    <Layout
      toolbar={<Toolbar />}
      main={<Skills avatar="https://picsum.photos/200/300" />}
    />
  )
}

export default About
