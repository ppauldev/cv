import styles from './App.module.css';

const App = (): JSX.Element => {
  return (
    <div className={styles.App}>
      <div className={styles.cvWrapper}>
        <CVContent />
      </div>
    </div>
  );
}

const CVContent = (): JSX.Element => {
  return (
    <div className={styles.cvContent}>
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
      Header info
    </div>
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
