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
      <Body />
    </div>
  )
}
const Header = (): JSX.Element => {
  return (
    <>
      Header info
    </>
  )
}

const Summary = (): JSX.Element => {
  return (
    <>
      Summary
    </>
  )
}

const Body = (): JSX.Element => {
  return (
    <>
      <Experience />
      <Info />
    </>
  )
}

const Experience = (): JSX.Element => {
  return (
    <>
      Experience
      <Job />
    </>
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
    <>
      <Education />
      <Awards />
      <Languages />
    </>
  )
}

const Education = (): JSX.Element => {
  return (
    <>
      Education
    </>
  )
}

const Awards = (): JSX.Element => {
  return (
    <>
      Awards
    </>
  )
}

const Languages = (): JSX.Element => {
  return (
    <>
      Languages
    </>
  )
}

export default App;
