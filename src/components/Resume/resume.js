// import services
import * as React from "react"

// CSS Module import
import * as styles from "./resume.module.css"

const Resume = () => (
  <div className={styles.resumeGrid}>
    <div className={styles.leftGrid}>
      <div className={styles.contact}>
        <h2>Jonathan Wesley Dudzik</h2>
        <h3>Software Architect</h3>
        <p>Jonathan.d.wesley@gmail.com</p>
        <p>419-944-4290</p>
        <p>2627 Dwight Place</p>
        <p>Raleigh, NC</p>
      </div>
      
      <h2 className={styles.header}>Technical Skills</h2>
      
      <div className={styles.skillsList}>
        {/* five plus years */}
        <h3>Five plus years of experience</h3>
        <p>Project Management</p>
        <p>Organizational Training</p>
        <p>UI and UX Design</p>
        <p>Wordpress Development</p>
        <p>Linux</p>

        {/* three plus years */}
        <h3>Three plus years of experience</h3>
        <p>HTML, CSS, JavaScript</p>
        <p>API integrations</p>
        <p>Git and SVN (version control)</p>
        <p>WCAG 2.1 and Section 508</p>
        <p>Figma (mockups)</p>
        <p>Vue.js</p>
        <p>React</p>
        <p>CSS Frameworks</p>
        <p>Screencasts</p>
        <p>AWS S3</p>
        <p>AWS EC2</p>
        <p>AWS Cloud 9 IDE</p>
        <p>AWS Dynamo DB</p>
        <p>No SQL Databases</p>
        <p>Firebase</p>
        <p>Agile</p>
        <p>Technical Documentation</p>
      </div>

      <h2 className={styles.header}>Education</h2>

      <div className={styles.educationList}>
        <p style={{ marginBottom: `0px` }}>Bachelor of Bussiness Communication</p>
        <p style={{ margin: `0px` }}><i>Ohio University</i></p>
        <p style={{ marginBottom: `0px` }}>Master of Instructional Design Technology</p>
        <p style={{ margin: `0px` }}><i>American College of Education</i></p>
      </div>
    </div>
    <div className={styles.rightFlex}>
      <h3 style={{ marginBottom: `0px` }}>Software Architect | Maverick Solutions</h3>
      <p style={{ margin: `0px` }}><i>November 2020 - Current</i></p>
      <p>Manage development projects and development team after being promoted to Software Architect after 6 months</p>
      <p>Persuaded company leadership to implement pair programming which decreased time spent on difficult projects and sped up onboarding of new developers by 1 month</p>
      <p>Guided company leadership in a restructure of the development team that decreased developer turn over - achieved this by implementing agile principles and a culture of servant leadership and mentoring</p>
      <p>Took on new development project that was not anticipated to be completed on time due to the unexpected termination of Lead Developer - project completed on-time with 74 commits and 39,000 lines of code</p>
      <p>Refactored 24,953 lines of undocumented jQuery code that was causing many errors into 24,559 lines of well commented modular code without any application downtime</p>

      <h3 style={{ marginBottom: `0px` }}>Administrative Officer II | North Carolina DHHS</h3>
      <p style={{ margin: `0px` }}><i>March 2018 - November 2020</i></p>
      <p>Hired as Instructional Designer but necessarily learned web development in order to solve multifaceted problems our branch was facing</p>
      <p>Learned Vue.js and converted over 50 hours of Adobe Flash content into HTML5 while working closely with stakeholders and subject matter experts</p>
      <p>Documented and trained on UI, UX, accessibility, and branding standards for our branch website and public facing web apps</p>
      <p>Administered our Adobe Cloud platform which included using the Adobe API, deploying content, creating users, managing permissions, pulling reports, troubleshooting issues, and training staff</p>
      <p>Served as technical subject matter expert for our branch through excellently supporting our team in all technical areas, documenting technical requirements for software procurements, and writing internal technology policies</p>
      <p>Found solutions to training and technology problems through collaboration and innovative thinking</p>
      
      <h3 style={{ marginBottom: `0px` }}>Freelance Developer | Intricate, LLC</h3>
      <p style={{ margin: `0px` }}><i>June 2020 - September 2020</i></p>
      <p>Worked closely with a Senior Developer to implement functional components in React, Next.js, Express, Material UI, and Styled Components</p>

      <h3 style={{ marginBottom: `0px` }}>Volunteer Developer | Knowbility</h3>
      <p style={{ margin: `0px` }}><i>September 2019 - November 2019</i></p>
      <p>Worked with UX and accessibility professionals to create a fully WCAG 2.1 compliant website</p>
      
      <h3 style={{ marginBottom: `0px` }}>Freelance Developer | Immersive Design</h3>
      <p style={{ margin: `0px` }}><i>August 2019 - November 2020</i></p>
      <p>Removed bugs and refactored a large code base of non-documented jQuery code - clients included Kubota, the State of California, and Kia</p>
      
      <h3 style={{ marginBottom: `0px` }}>Volunteer Developer | IEEE ICICLE</h3>
      <p style={{ margin: `0px` }}><i>March 2019 - May 2019</i></p>
      <p>Saved the chapter from spending $300.00 on an event app by offering to develop the 2019 IEEE conference of Learning Engineering mobile app myself using Vue.js and AWS.</p>
      
      <h3 style={{ marginBottom: `0px` }}>Owner | On Course English, LLC</h3>
      <p style={{ margin: `0px` }}><i>September 2014 - April 2018</i></p>
      <p>Applied software development and system administration skills to create and maintain a hybrid WordPress and Moodle learning platform for my students</p>
    </div>
  </div>
)

export default Resume