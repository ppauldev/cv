import { LinkedInIcon, MailIcon, PhoneIcon } from "./icons/Icons"
import styles from "./App.module.css";

const App = (): JSX.Element => {
  return (
    <div className={styles.App}>
      <div className={styles.CVWrapper}>
        <CVContent />
      </div>
    </div>
  );
}

const CVContent = (): JSX.Element => {
  return (
    <div className={styles.CVContent}>
      <Header />
      <Summary />
      <Experience />
      <Info />
    </div>
  )
}

const Header = (): JSX.Element => {
  return (
    <section className={styles.Header}>
      <Person />
      <Contact />
    </section>
  )
}

const Person = (): JSX.Element => {
  return (
    <div className={styles.Person}>
      <div className={styles.PersonDetails}>
        <h2>Phillip Paul</h2>
        <h3>Software Developer</h3>
      </div>
    </div>
  )
}

const Contact = (): JSX.Element => {
  return (
    <div className={styles.Contact}>
      <div className={styles.ContactDetails}>
        <span>
          <a href="mailto:phillip.paul@t-online.de?subject=Hi Phillip!">
            phillip.paul@t-online.de
          </a>
          <MailIcon />
        </span>
        <span>
          <p>+49 176 3177 8623</p>
          <PhoneIcon />
        </span>
        <span>
          <a href="https://www.linkedin.com/in/phillippaul">
            linkedin.com/in/phillippaul
          </a>
          <LinkedInIcon />
        </span>
      </div>
    </div>
  )
}

const Summary = (): JSX.Element => {
  return (
    <section className={styles.Summary}>
      <h4>Profile Summary</h4>
      <hr />
      <p>
        Full stack software developer with an engineering background
        who relies on a passion for learning, acute attention to
        detail and effective communication to deliver exceptional results.
        My mission is to help purposeful tech companies realize their
        vision of the future by working pragmatically, thoroughly and business-oriented.
      </p>
    </section>
  )
}

const Experience = (): JSX.Element => {
  return (
    <section className={styles.Experience}>
      Experience
      <Job />
    </section>
  )
}

const Job = (): JSX.Element => {
  return (
    <>
      Job
    </>
  )
}

const Info = (): JSX.Element => {
  return (
    <section className={styles.Info}>
      <Education />
      <Awards />
      <Languages />
    </section>
  )
}

const Education = (): JSX.Element => {
  return (
    <div className={styles.Education}>
      Education
    </div>
  )
}

const Awards = (): JSX.Element => {
  return (
    <div className={styles.Awards}>
      Awards
    </div>
  )
}

const Languages = (): JSX.Element => {
  return (
    <div className={styles.Languages}>
      Languages
    </div>
  )
}

export default App;
