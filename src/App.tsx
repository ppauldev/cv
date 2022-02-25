import * as React from "react";
import { AppContext } from "./helper/context"
import { LoadingSpinner, LinkedInIcon, MailIcon, PhoneIcon } from "./icons/Icons"
import * as jobdataJSON from "./jobdata.json"
import styles from "./App.module.css";

const App = (): JSX.Element => {
  const [cvData, setCvData] = React.useState({})

  React.useEffect(() => {
    const jobdata = jobdataJSON // Load data, here via JSON

    setCvData((initial) => (
      {
        ...initial,
        jobdata: jobdata
      })
    )
  }, [])

  const isEmpty = (data: object) => {
    return Object.keys(data).length === 0 && data.constructor === Object;
  }

  return (
    <AppContext.Provider value={cvData}>
      <div className={styles.App}>
        <div className={styles.CVWrapper}>
          {!isEmpty(cvData) ? <CVContent /> : <LoadingSpinner />}
        </div>
      </div>
    </AppContext.Provider>
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
      <h4>Experience</h4>
      <hr />
      <Jobs />
    </section>
  )
}

const Jobs = (): JSX.Element | null => {
  const { jobdata }: any = React.useContext(AppContext)

  if (!("data" in jobdata)) return null

  return (
    <div className={styles.Jobs}>
      {jobdata.data.map((job: any) => <Job data={job} />)}
    </div>
  )
}

const Job = ({ data }: any): JSX.Element => {
  return (
    <div className={styles.Job}>
      <div className={styles.JobDetails}>
        <span className={styles.bold}>{data.title}</span>
        <span className={styles.light}>{data.tenure}</span>
        <span>{data.description}</span>
        <ul>
          {data.tasks.map((task: any) => {
            return (
              <li>{task.description}</li>
            )
          })}
        </ul>
      </div>
      <div className={styles.JobTechStack}>
        Tech stack
      </div>
    </div>
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
