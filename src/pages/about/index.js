// React and component imports
import React from "react"

// import components
import Toolbar from "../../components/Toolbar/toolbar"

// CSS Module import
import * as styles from "./about.module.css"

const About = () => {
  return (
  <div className={styles.blogGrid}>
    <div className={styles.blogToolbar}>
      <Toolbar />
    </div>
    <div className={styles.blogMain}>
      <p>HELLO WORLD!!</p>
    </div>
  </div>
  )
}

export default About
