import * as React from "react";
import { AppContext } from "./helper/context"
import { GitHubIcon, LoadingSpinner, LinkedInIcon, MailIcon, PhoneIcon } from "./icons/Icons"
import * as cvdataJSON from "./cvdata.json"
import styles from "./App.module.css"
import * as Types from "./App.types"

const App = (): JSX.Element => {
  const [cvData, setCvData] = React.useState<Types.TCVData | {}>({})

  React.useEffect(() => {
    const data: Types.TCVData = cvdataJSON // Load data, here via JSON

    setCvData((initial) => (
      {
        ...initial,
        educationData: data.educationData,
        jobsData: data.jobsData,
        languagesData: data.languagesData,
        personData: data.personData,
        summaryData: data.summaryData,
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
  const { personData } = React.useContext<Types.TCVData | { personData?: Types.TPersonData }>(AppContext)

  if (!personData || !("data" in personData)) return null

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
  const { personData } = React.useContext<Types.TCVData | { personData?: Types.TPersonData }>(AppContext)

  if (!personData || !("data" in personData)) return null

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
        <span>
          <a href={`https://www.${personData.data.github}`}>
            {personData.data.github}
          </a>
          <GitHubIcon />
        </span>
      </div>
    </div>
  )
}

const Summary = (): JSX.Element | null => {
  const { summaryData } = React.useContext<Types.TCVData | { summaryData?: Types.TSummaryData }>(AppContext)

  if (!summaryData || !("data" in summaryData)) return null

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
  const { jobsData } = React.useContext<Types.TCVData | { jobsData?: Types.TJobsData }>(AppContext)

  if (!jobsData || !("data" in jobsData)) return null

  return (
    <div className={styles.Jobs}>
      {jobsData.data.map((jobData: Types.TJob) => <Job {...jobData} />)}
    </div>
  )
}

const Job = (data: Types.TJob): JSX.Element => {
  const classJobDetails: string = data?.techstack ? styles.JobDetails : styles.JobDetailsFullWidth

  const tasks: JSX.Element[] = data.tasks.map((task: any): JSX.Element => {
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
      <TechStack stack={data?.techstack} />
    </div>
  )
}

const TechStack = ({ stack }: { stack: string[] | undefined }): JSX.Element | null => {
  if (!stack || stack.length === 0) return null

  const stackItems: JSX.Element[] = stack.map((item: string) => {
    return (
      <div className={styles.StackItem}>{item}</div>
    )
  })

  return (
    <div className={styles.JobTechStack}>
      <p>Tech Stack</p>
      <div className={styles.StackItems}>
        <div>
          {stackItems}
        </div>
      </div>
    </div>
  )
}

const Info = (): JSX.Element => {
  return (
    <section className={styles.Info}>
      <Education />
      <Languages />
    </section>
  )
}

const Education = (): JSX.Element | null => {
  const { educationData }: any = React.useContext(AppContext)

  if (!("data" in educationData)) return null

  const schools = educationData.data.map((schoolData: any): JSX.Element => {
    return <School data={schoolData} />
  })

  return (
    <section className={styles.Education}>
      <h5>Education</h5>
      <hr />
      <div className={styles.Schools}>{schools}</div>
    </section>
  )
}

const School = ({ data }: any): JSX.Element => {
  return (
    <div className={styles.SchoolDetails}>
      <span className={styles.bold}>{data.degree}</span>
      <span>{data.name}</span>
      <span>{data.duration}</span>
    </div>
  )
}

const Languages = (): JSX.Element | null => {
  const { languagesData }: any = React.useContext(AppContext)

  if (!("data" in languagesData)) return null

  const languages = languagesData.data.map((languageData: any) => {
    return <Language data={languageData} />
  })

  return (
    <section className={styles.Languages}>
      <h5>Languages</h5>
      <hr />
      <div className={styles.LanguagesDetails}>{languages}</div>
    </section>
  )
}

const Language = ({ data }: any): JSX.Element => {
  return (
    <div className={styles.LanguageDetails}>
      <span className={styles.bold}>{data.language}</span>
      <span>{data.level}</span>
    </div>
  )
}

export default App;
