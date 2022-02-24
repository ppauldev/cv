import styles from './App.module.css';

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
    <div className={styles.Header}>
      <Person />
      <Contact />
    </div>
  )
}

const Person = (): JSX.Element => {
  return (
    <div className={styles.Person}>
      <div className={styles.PersonDetails}>
        <h2>Phillip Paul</h2>
        <h3>Software Engineer</h3>
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

const MailIcon = (): JSX.Element => {
  return (
    <svg
      fill="currentColor"
      height="1em"
      viewBox="0 0 16 16"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        d="M14 3H2a1 1 0 00-1 1v8a1 1 0 001 1h12a1 1 0 001-1V4a1 1 0 00-1-1zM2 2a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V4a2 2 0 00-2-2H2z"
        clip-rule="evenodd"
      />
      <path
        fill-rule="evenodd"
        d="M.071 4.243a.5.5 0 01.686-.172L8 8.417l7.243-4.346a.5.5 0 01.514.858L8 9.583.243 4.93a.5.5 0 01-.172-.686z"
        clip-rule="evenodd"
      />
      <path
        d="M6.752 8.932l.432-.252-.504-.864-.432.252.504.864zm-6 3.5l6-3.5-.504-.864-6 3.5.504.864zm8.496-3.5l-.432-.252.504-.864.432.252-.504.864zm6 3.5l-6-3.5.504-.864 6 3.5-.504.864z"
      />
    </svg>
  )
}

const PhoneIcon = (): JSX.Element => {
  return (
    <svg
      fill="currentColor"
      height="1em"
      viewBox="0 0 16 16"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        d="M11 1H5a1 1 0 00-1 1v12a1 1 0 001 1h6a1 1 0 001-1V2a1 1 0 00-1-1zM5 0a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V2a2 2 0 00-2-2H5z"
        clip-rule="evenodd"
      />
      <path
        fill-rule="evenodd"
        d="M8 14a1 1 0 100-2 1 1 0 000 2z"
        clip-rule="evenodd"
      />
    </svg>
  )
}

const LinkedInIcon = (): JSX.Element => {
  return (
    <svg
      fill="currentColor"
      height="1em"
      viewBox="0 0 16 16"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"
      />
    </svg>

  )
}

const Summary = (): JSX.Element => {
  return (
    <div className={styles.Summary}>
      Summary
    </div>
  )
}

const Experience = (): JSX.Element => {
  return (
    <div className={styles.Experience}>
      Experience
      <Job />
    </div>
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
    <div className={styles.Info}>
      <Education />
      <Awards />
      <Languages />
    </div>
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
