// import React services
import * as React from "react"

// import components
import Toolbar from "../../components/Toolbar/toolbar"
import SideMenu from "../../components/SideMenu/sideMenu"
import Post from "../../components/Post/post"

// CSS Module import
import * as styles from "./entries.module.css"

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
          <Post 
            title={ "First Blog Post" }
            date={ "05/12/2021" }
          >
            <p>Addition</p>
            <ul>
              <li>You can</li>
              <li>have as much</li>
              <li>MARKUP</li>
              <li>as you would like!</li>
            </ul>
          </Post>
        </main>
      </div>
    </div>
  )
}
