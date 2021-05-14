// import React services
import React from "react"

// CSS Module import
import * as styles from "./layout.module.css"

// markup
export default function Layout(props) {
  return (
    <div className={styles.layoutGrid}>
      <div className={styles.layoutToolbar}>
        {props.toolbar}
      </div>
      <div className={styles.layoutMain}>
        {props.main}
      </div>
    </div>
  )
}