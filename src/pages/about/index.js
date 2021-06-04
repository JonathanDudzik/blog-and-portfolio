// React and extern libraries imports
import React from "react"

// import components
import Toolbar from "../../components/Toolbar/toolbar"
import Resume from "../../components/Resume/resume"

// CSS Module import
import * as styles from "./about.module.css"

const About = () => {
  return (
  <div className={styles.aboutGrid}>
    <div className={styles.aboutToolbar}>
      <Toolbar />
    </div>
    <div className={styles.aboutMain}>  
      <Resume />
    </div>
  </div>
  )
}

export default About
