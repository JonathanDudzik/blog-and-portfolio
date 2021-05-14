// import React services
import React from "react"

// CSS Module import
import * as styles from "./post.module.css"

// markup
export default function Post(props) {
  return (
    <div>
      <h1 className={styles.title}>
        {props.title}
      </h1>
      <h2 className={styles.date}>
        {props.date}
      </h2>
      <div>
        {props.children}
      </div>
    </div>
  )
}