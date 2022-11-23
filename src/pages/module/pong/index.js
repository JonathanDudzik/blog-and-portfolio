// React and extern libraries imports
import React from "react"

// import components
import Toolbar from "../../../components/Toolbar/toolbar"

// CSS Module import
import * as styles from "./module.module.css"


const Module = () => {
  return (
  <div className={styles.moduleGrid}>
    <div className={styles.moduleToolbar}>
      <Toolbar />
    </div>
    <div className={styles.moduleMain}>  
      <iframe src="http://localhost:8001/module/pong" title="pong learning module" width="98%" height="98%" style={{border: "none"}}></iframe>
    </div>
  </div>
  )
}

export default Module
