import * as React from "react"
import { AppContext, IAppContext } from "./helper/context"
import { isEmptyObject } from "./helper/utils"
import { GitHubIcon, LoadingSpinner, LinkedInIcon, MailIcon, PhoneIcon } from "./icons/Icons"
import styles from "./App.module.css"
import * as Types from "./App.types"

const DIN_A4_HEIGHT_IN_PX = 1118.74

const SECTION_LABELS: Record<string, { summary: string; experience: string; education: string; languages: string }> = {
  en: {
    summary: "Profile Summary",
    experience: "Experience",
    education: "Education",
    languages: "Languages",
  },
  de: {
    summary: "Zusammenfassung",
    experience: "Berufserfahrung",
    education: "Ausbildung",
    languages: "Sprachen",
  },
}

const App = ({ loadData }: { loadData: (language: string) => Types.TCVData | Types.TCVDataInitial }): JSX.Element => {
  const [cvData, setCvData] = React.useState<Types.TCVData | Types.TCVDataInitial>({})
  const [language, setLanguage] = React.useState<string>("en")

  React.useEffect(() => {
    const data: Types.TCVData | Types.TCVDataInitial = loadData(language)

    setCvData((initial) => (
      {
        ...initial,
        ...data
      })
    )
  }, [loadData, language])

  return (
    <AppContext.Provider value={{ ...cvData, language, setLanguage }}>
      <div className={styles.App} data-testid="app">
        <div className={styles.CVWrapper} data-testid="cv-wrapper">
          {!isEmptyObject(cvData) ? <CVContent /> : <LoadingSpinner />}
        </div>
      </div>
    </AppContext.Provider>
  )
}

export const CVContent = (): JSX.Element => {
  return (
    <div className={styles.CVContent} data-testid="cvcontent-wrapper">
      <Header />
      <Summary />
      <Experience />
      <Info />
    </div>
  )
}

export const Header = (): JSX.Element => {
  return (
    <section className={styles.Header} data-testid="header-section">
      <Person />
      <Contact />
    </section>
  )
}

export const Person = (): JSX.Element | null => {
  const { personData, language, setLanguage } = React.useContext<IAppContext>(AppContext)

  if (!personData || !("data" in personData)) return null

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "de" : "en")
  }

  return (
    <div className={styles.Person} data-testid="person-wrapper">
      <div className={styles.PersonDetails} data-testid="person-details">
        <h2 onClick={toggleLanguage} style={{ cursor: "pointer" }}>{personData.data.fullname}</h2>
        <h3>{personData.data.role}</h3>
      </div>
    </div>
  )
}

export const Contact = (): JSX.Element | null => {
  const { personData } = React.useContext<IAppContext>(AppContext)

  if (!personData || !("data" in personData)) return null

  return (
    <div className={styles.Contact} data-testid="contact-wrapper">
      <div className={styles.ContactDetails} data-testid="contact-details">
        <span>
          <a href={`mailto:${personData.data.email}?subject=${personData.data.emailsubject}`} data-testid="ref-email">
            {personData.data.email}
          </a>
          <MailIcon />
        </span>
        <span>
          <p>{personData.data.phone}</p>
          <PhoneIcon />
        </span>
        <span>
          <a href={`https://www.${personData.data.linkedin}`} data-testid="ref-linkedin">
            {personData.data.linkedin}
          </a>
          <LinkedInIcon />
        </span>
        <span>
          <a href={`https://www.${personData.data.github}`} data-testid="ref-github">
            {personData.data.github}
          </a>
          <GitHubIcon />
        </span>
      </div>
    </div>
  )
}

export const Summary = (): JSX.Element | null => {
  const { summaryData, language } = React.useContext<IAppContext>(AppContext)

  if (!summaryData || !("data" in summaryData)) return null

  return (
    <section className={styles.Summary} data-testid="summary-section">
      <h4>{SECTION_LABELS[language]?.summary ?? SECTION_LABELS["en"].summary}</h4>
      <hr />
      <p data-testid="summary-text">{summaryData.data.summary}</p>
    </section>
  )
}

export const Experience = (): JSX.Element => {
  const { language } = React.useContext<IAppContext>(AppContext)
  return (
    <section className={styles.Experience} data-testid="experience-section">
      <h4>{SECTION_LABELS[language]?.experience ?? SECTION_LABELS["en"].experience}</h4>
      <hr />
      <Jobs />
    </section>
  )
}

export const Jobs = (): JSX.Element | null => {
  const { jobsData } = React.useContext<IAppContext>(AppContext)

  if (!jobsData || !("data" in jobsData)) return null

  const jobs: JSX.Element[] = jobsData.data.map((jobData: Types.TJob, index: number) => <Job data={jobData} key={index} />)

  return (
    <div className={styles.Jobs} data-testid="jobs">
      {jobs}
    </div>
  )
}

export const Job = ({ data }: { data: Types.TJob }): JSX.Element => {
  const ref = React.useRef(null)

  const [shouldAddPageBreak, setShouldAddPageBreak] = React.useState(false)

  const classJobDetails: string = data?.techstack ? styles.JobDetails : styles.JobDetailsFullWidth

  const tasks: JSX.Element[] = data.tasks.map((task: Types.TJobTask, index: number): JSX.Element => {
    return (
      <li key={index}><span className={styles.bold}>{task.keyword ? `${task.keyword}: ` : ""}</span> {task.description}</li>
    )
  })

  React.useEffect(() => {
    if (!ref.current) return;

    const body = document.body.getBoundingClientRect()
    const job = (ref.current as Element).getBoundingClientRect()
    const offsetTop = job.top - body.top

    //setShouldAddPageBreak(offsetTop < DIN_A4_HEIGHT_IN_PX && offsetTop + job.height >= DIN_A4_HEIGHT_IN_PX)
  }, [ref])

  return (
    <div className={`${styles.Job} ${shouldAddPageBreak ? styles.JobOnNextPage : ''}`} data-testid="job-wrapper" ref={ref}>
      <div className={classJobDetails} data-testid="job-details">
        <span className={styles.bold} data-testid="job-title">{data.title}</span>
        <span className={styles.light} data-testid="job-tenure">{data.tenure}</span>
        <span data-testid="job-description">{data.description}</span>
        <ul data-testid="job-tasks">{tasks}</ul>
      </div>
      <TechStack stack={data?.techstack} />
    </div>
  )
}

export const TechStack = ({ stack }: { stack: string[] | undefined }): JSX.Element | null => {
  if (!stack || stack.length === 0) return null

  const stackItems: JSX.Element[] = stack.map((item: string, index: number) => {
    return (
      <div className={styles.StackItem} data-testid="stack-item" key={index}>{item}</div>
    )
  })

  return (
    <div className={styles.JobTechStack} data-testid="tech-stack">
      <p data-testid="tech-stack-title">Tech Stack</p>
      <div className={styles.StackItems} data-testid="stack-items-wrapper">
        <div data-testid="stack-items">
          {stackItems}
        </div>
      </div>
    </div>
  )
}

export const Info = (): JSX.Element => {
  const [isMultiPage, setIsMultiPage] = React.useState(false)

  React.useEffect(() => {
    const body = document.body.getBoundingClientRect()
    setIsMultiPage(body.height > DIN_A4_HEIGHT_IN_PX)
  }, [])

  return (
    <>
      {isMultiPage ? (
        <>
          <section className={styles.Info} data-testid="education-section-multipage">
            <EducationMultiPage />
          </section>
          <section className={styles.Info} data-testid="language-section-multipage">
            <LanguagesMultiPage />
          </section>
        </>
      ) : (
        <section className={styles.Info} data-testid="info-section">
          <Education />
          <Languages />
        </section>
      )}
    </>
  )
}

export const Education = (): JSX.Element | null => {
  const { educationData, language } = React.useContext<IAppContext>(AppContext)

  if (!educationData || !("data" in educationData)) return null

  const schools: JSX.Element[] = educationData.data.map((schoolData: Types.TSchool, index: number): JSX.Element => {
    return <School data={schoolData} key={index} />
  })

  return (
    <section className={styles.Education} data-testid="education-section">
      <h5>{SECTION_LABELS[language]?.education ?? SECTION_LABELS["en"].education}</h5>
      <hr />
      <div className={styles.Schools} data-testid="schools">{schools}</div>
    </section>
  )
}

export const EducationMultiPage = (): JSX.Element | null => {
  const { educationData, language } = React.useContext<IAppContext>(AppContext)

  if (!educationData || !("data" in educationData)) return null

  const schools: JSX.Element[] = educationData.data.map((schoolData: Types.TSchool, index: number): JSX.Element => {
    return <SchoolMultiPage data={schoolData} key={index} />
  })

  return (
    <section className={styles.EducationMultiPage} data-testid="education-multipage-section">
      <h5>{SECTION_LABELS[language]?.education ?? SECTION_LABELS["en"].education}</h5>
      <hr />
      <div className={styles.SchoolsMultiPage} data-testid="schools">{schools}</div>
    </section>
  )
}

export const School = ({ data }: { data: Types.TSchool }): JSX.Element => {
  return (
    <div className={styles.SchoolDetails} data-testid="school-details">
      <span className={styles.bold} data-testid="school-degree">{data.degree}</span>
      <span data-testid="school-name">{data.name}</span>
      <span data-testid="school-duration">{data.duration}</span>
    </div>
  )
}

export const SchoolMultiPage = ({ data }: { data: Types.TSchool }): JSX.Element => {
  // const tasks: JSX.Element[] = data.tasks.map((task: Types.TJobTask, index: number): JSX.Element => {
  //   return (
  //     <li key={index}>{task.description}</li>
  //   )
  // })

  return (
    <div className={styles.SchoolDetailsMultiPage} data-testid="school-details-multipage">
      <span className={styles.bold} data-testid="school-degree">{data.degree}, {data.name}</span>
      <span style={{ paddingBottom: "12px" }} data-testid="school-duration">{data.duration}</span>
      {/* <ul data-testid="school-tasks">{tasks}</ul> */}
    </div>
  )
}

export const Languages = (): JSX.Element | null => {
  const { languagesData, language } = React.useContext<IAppContext>(AppContext)

  if (!languagesData || !("data" in languagesData)) return null

  const languages: JSX.Element[] = languagesData.data.map((languageObj: Types.TLanguage, index: number) => {
    return <Language data={languageObj} key={index} />
  })

  return (
    <section className={styles.Languages} data-testid="languages-section">
      <h5>{SECTION_LABELS[language]?.languages ?? SECTION_LABELS["en"].languages}</h5>
      <hr />
      <div className={styles.LanguagesDetails} data-testid="languages-details">{languages}</div>
    </section>
  )
}

export const LanguagesMultiPage = (): JSX.Element | null => {
  const { languagesData, language } = React.useContext<IAppContext>(AppContext)

  if (!languagesData || !("data" in languagesData)) return null

  const languages: JSX.Element[] = languagesData.data.map((languageObj: Types.TLanguage, index: number) => {
    return <LanguageMultiPage data={languageObj} key={index} />
  })

  return (
    <section className={styles.LanguagesMultiPage} data-testid="languages-section">
      <h5>{SECTION_LABELS[language]?.languages ?? SECTION_LABELS["en"].languages}</h5>
      <hr />
      <div className={styles.LanguagesDetails} data-testid="languages-details">{languages}</div>
    </section>
  )
}

export const Language = ({ data }: { data: Types.TLanguage }): JSX.Element => {
  return (
    <div className={styles.LanguageDetails} data-testid="language-details">
      <span className={styles.bold} data-testid="language">{data.language}</span>
      <span data-testid="language-level">{data.level}</span>
    </div>
  )
}

export const LanguageMultiPage = ({ data }: { data: Types.TLanguage }): JSX.Element => {
  return (
    <div className={styles.LanguageDetailsMultiPage} data-testid="language-details">
      <span className={styles.bold} data-testid="language">{data.language}</span>
      <span data-testid="language-level">{data.level}</span>
    </div>
  )
}

export default App