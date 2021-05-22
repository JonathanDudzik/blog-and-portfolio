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

const labels = [
  "Project Management",
  "Organizational Training",
  "UI and UX Design",
  "Wordpress Development",
  "Linux",
  "HTML, CSS, JavaScript",
  "API integrations",
  "Git and SVN (version control)",
  "WCAG 2.1 and Section 508",
  "Figma (mockups)",
  "Vue.js",
  "React",
  "CSS Frameworks",
  "Screencasts",
  "AWS S3",
  "AWS EC2",
  "AWS Cloud 9 IDE",
  "AWS Dynamo DB",
  "No SQL Databases",
  "Firebase",
  "Agile",
  "Technical Documentation"
]


export default About
