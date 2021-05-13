import * as React from "react"
import Layout from "../components/Layout/layout"
import Toolbar from "../components/Toolbar/toolbar"

const TestParagraph = props => (
  <div style={{ display: `inline-block`, marginRight: `1rem`, height: `100%` }}>
    <p>Hello Home Page</p>
    <p>Hello Home Page</p>
    <p>Hello Home Page</p>
    <p>Hello Home Page</p>
  </div>
)

// markup
const IndexPage = () => {
  return (
      <Layout
        toolbar={<Toolbar />}
        main={<TestParagraph />}
      />
  )
}

export default IndexPage
