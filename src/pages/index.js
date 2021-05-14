import * as React from "react"
import Layout from "../components/Layout/layout"
import Ghostbar from "../components/Ghostbar/ghostbar"

// CSS Module import
import * as styles from "./index.module.css"

const TestParagraph = props => (
  <>
  <div className={styles.hero}></div>
  <div>This is a test</div>
  </>
)

// markup
const IndexPage = () => {
  return (
      <Layout
        toolbar={<Ghostbar />}
        main={<TestParagraph />}
      />
  )
}

export default IndexPage
