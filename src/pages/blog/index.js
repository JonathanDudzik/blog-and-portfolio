// import React services
import * as React from "react"

// import components
import Toolbar from "../../components/Toolbar/toolbar"
import SideMenu from "../../components/SideMenu/sideMenu"

// CSS Module import
import * as styles from "./blog.module.css"

// markup
export default function Posts() {
  return (
    <div className={styles.blogGrid}>
      <div className={styles.blogToolbar}>
        <Toolbar />
      </div>
      <div className={styles.blogSideMenu}>
        <SideMenu />
      </div>
      <div className={styles.blogMain}>
        <main>
          <p>show latest posts here</p>
        </main>
      </div>
    </div>
  )
}
