import * as React from "react"
import { Link } from "gatsby"

// import components
import Layout from "../components/Layout/layout"
import Ghostbar from "../components/Ghostbar/ghostbar"

// import CSS Module 
import * as styles from "./index.module.css"

// import images
import heroLogo from "../images/binary-sm.png"
import avatar from "../images/avatar.png"
import gatsby from "../images/Gatsby.svg"
import react from "../images/React.png"
import css from "../images/CSS.png"
import vscode from "../images/VSCode.png"
import eslint from "../images/ESLint.png"
import chrome from "../images/Chrome.png"

const Hero = () => (
  <>
    <div className={styles.heroGrid}>
      <div className={styles.heroBackground}></div>
      <div className={styles.heroForeground}>
        <div className={styles.heroText}>
          <h1>
            Explore the world of software development.
          </h1>
        </div>
        <div>
          <img 
            src={heroLogo}
            className={styles.heroImage}
            alt="binary code"
          />
        </div>
      </div>
    </div>
    <div className={styles.avatarContainer}>
      <div className={styles.avatarDiv1}>
        <img 
          src={avatar}
          className={styles.avatarImage}
          alt="cartoon bold guy with glasses"
        />
      </div>
      <div className={styles.avatarDiv2}>
        <h2>
          Hello! My name is Jonathan Wesley Dudzik.
        </h2>
        <p>
          Professionally, I am a software developer, UI/UX aficionado, and agile practitioner.
          This site is where I choose to publish the courses that I create. 
        </p>
        <p>
          <Link to="/module/pong">Course #1: Pong</Link>
        </p>
      </div>
    </div>

    <hr />

    <h2 className={styles.madeWithDescription}>
      I have used the following programs, standards, 
      and libraries to improve the development 
      experience and speed of building this site:
    </h2>

    <div className={styles.madeWithGrid} style={{backgroundColor: 'whitesmoke'}}>
      <div>
          <a href="https://www.gatsbyjs.com/">
            <img 
                  src={gatsby}
                  style={{ height: `10vh` }}
                  alt="Gatsby logo"
            />
          </a>
      </div>

      <div style={{ padding: `0px 20px` }}>
        <h3>Gatsby:</h3>
        <p>
          I chose to use Gatsby because I think, as an open source project, 
          they have a great monetization model by offering their own hosting service, 
          and bringing content into Gatsby is just plain easy with GraphSQL.
        </p>
      </div>

      <div>
          <a href="https://reactjs.org/">
            <img 
                  src={react}
                  style={{ height: `10vh` }}
                  alt="React logo"
            />
          </a>
      </div>

      <div style={{ padding: `0px 20px` }}>
        <h3>React: </h3>
        <p>
          Most of my experience is in Vue.
          However, for this project, I wanted to improve my React knowledge. 
          I have found React's comparatively flat API and the use a JSX a joy to work with!
        </p>
      </div>

      <div>
        <a href="https://www.w3.org/Style/CSS/specs.en.html">
          <img 
                src={css}
                style={{ height: `10vh` }}
                alt="CSS logo"
          />
        </a>
      </div>

      <div style={{ padding: `0px 20px` }}>
        <h3>CSS Grids and Flexbox:</h3>
        <p> 
          Sometime ago I traded in my CSS framework for the CSS Grids 
          and Flexbox standard and I haven't looked back since.
        </p>
      </div>

      <div>
        <a href="https://code.visualstudio.com/">
          <img 
                src={vscode}
                style={{ height: `10vh` }}
                alt="VS Code logo"
          />
        </a>
      </div>

      <div style={{ padding: `0px 20px` }}>
        <h3>VS Code:</h3>
        <p>
          I have worked with a few different IDEs. 
          VS Code just stuck. What more can I say? 
        </p>
      </div>

      <div>
        <a href="https://eslint.org/">
          <img 
                src={eslint}
                style={{ height: `10vh` }}
                alt="ESLint logo"
          />
        </a>
      </div>

      <div style={{ padding: `0px 20px` }}>
        <h3>ESLint:</h3>
        <p>
          I am a bit obsessive about the way my code is organized. 
          And while any JavaScript linter would probably do, ESLint is the one I use. 
        </p>
      </div>

      <div>
        <a href="https://www.google.com/chrome/">
          <img 
                src={chrome}
                style={{ height: `10vh` }}
                alt="Chrome logo"
          />
        </a>
      </div>

      <div style={{ padding: `0px 20px` }}>
        <h3>Chrome:</h3>
        <p>
          I browse the internet on Firefox; I develop on Chrome. 
          Chrome has two developer focused features that I appreciate: 
          Hard Reloads and Local Overrides.
        </p>
      </div>
    </div>
  </>
)

// markup
const IndexPage = () => {
  return (
      <Layout
        toolbar={<Ghostbar />}
        main={<Hero />}
      />
  )
}

export default IndexPage
