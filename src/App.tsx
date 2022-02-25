import * as React from "react";
import { AppContext } from "./helper/context"
import { LoadingSpinner, LinkedInIcon, MailIcon, PhoneIcon } from "./icons/Icons"
import * as cvdataJSON from "./cvdata.json"
import styles from "./App.module.css";

const App = (): JSX.Element => {
  const [cvData, setCvData] = React.useState({})

  React.useEffect(() => {
    const data = cvdataJSON // Load data, here via JSON

    setCvData((initial) => (
      {
        ...initial,
        jobsData: data.jobsdata,
        personData: data.persondata,
        summaryData: data.summarydata,
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

const Person = (): JSX.Element | null => {
  const { personData }: any = React.useContext(AppContext)

  if (!("data" in personData)) return null

  return (
    <div className={styles.Person}>
      <div className={styles.PersonDetails}>
        <h2>{personData.data.fullname}</h2>
        <h3>{personData.data.role}</h3>
      </div>
    </div>
  )
}

const Contact = (): JSX.Element | null => {
  const { personData }: any = React.useContext(AppContext)

  if (!("data" in personData)) return null

  return (
    <div className={styles.Contact}>
      <div className={styles.ContactDetails}>
        <span>
          <a href={`mailto:${personData.data.email}?subject=${personData.data.emailsubject}`}>
            {personData.data.email}
          </a>
          <MailIcon />
        </span>
        <span>
          <p>{personData.data.phone}</p>
          <PhoneIcon />
        </span>
        <span>
          <a href={`https://www.${personData.data.linkedin}`}>
            {personData.data.linkedin}
          </a>
          <LinkedInIcon />
        </span>
      </div>
    </div>
  )
}

const Summary = (): JSX.Element | null => {
  const { summaryData }: any = React.useContext(AppContext)

  if (!("data" in summaryData)) return null

  return (
    <section className={styles.Summary}>
      <h4>Profile Summary</h4>
      <hr />
      <p>{summaryData.data.summary}</p>
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
  const { jobsData }: any = React.useContext(AppContext)

  if (!("data" in jobsData)) return null

  return (
    <div className={styles.Jobs}>
      {jobsData.data.map((jobData: any) => <Job data={jobData} />)}
    </div>
  )
}

const Job = ({ data }: any): JSX.Element => {
  const hasTechStack: boolean = "techstack" in data
  const classJobDetails: string = hasTechStack ? styles.JobDetails : styles.JobDetailsFullWidth

  const tasks = data.tasks.map((task: any): JSX.Element => {
    return (
      <li>{task.description}</li>
    )
  })

  return (
    <div className={styles.Job}>
      <div className={classJobDetails}>
        <span className={styles.bold}>{data.title}</span>
        <span className={styles.light}>{data.tenure}</span>
        <span>{data.description}</span>
        <ul>{tasks}</ul>
      </div>
      {hasTechStack && <TechStack stack={data.techstack} />}
    </div>
  )
}

const TechStack = ({ stack }: any): JSX.Element => {
  const stackItems = stack.map((item: any) => {
    return (
      <div className={styles.StackItem}>{item}</div>
    )
  })
  return (
    <div className={styles.JobTechStack}>
      <p>Tech Stack:</p>
      <div>{stackItems}</div>
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
