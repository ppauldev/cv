import { render, screen } from "@testing-library/react";
import { loadData as _loadData } from "./api/loadData";
import App, { Contact, CVContent, Education, Experience, Header, Info, Job, Jobs, Language, Languages, Person, School, Summary, TechStack } from "./App";
import styles from "./App.module.css"
import * as cvdataJSON from "./cvdata.json"
import { AppContext } from "./helper/context"

describe("Component: 'App", () => {
  it("should have applied a styling to elements after successful data load", () => {
    const testLoadData = _loadData
    render(<App loadData={testLoadData} />)

    const app = screen.getByTestId("app")
    const cvWrapper = screen.getByTestId("cv-wrapper")

    expect(app.className).toBe(styles.App)
    expect(cvWrapper.className).toBe(styles.CVWrapper)
  })

  it("should show loading spinner on load", () => {
    const testLoadData = () => { return {} }
    render(<App loadData={testLoadData} />)

    const spinner = screen.getByTestId("loading-spinner")

    expect(spinner).toBeVisible()
  })
})

describe("Component: 'CVContent'", () => {
  it("should have applied a styling to element", () => {
    render(<CVContent />)

    const wrapper = screen.getByTestId("cvcontent-wrapper")

    expect(wrapper.className).toBe(styles.CVContent)
  })
})

describe("Component: 'Header'", () => {
  it("should have applied a styling to element", () => {
    render(<Header />)

    const section = screen.getByTestId("header-section")

    expect(section.className).toBe(styles.Header)
  })
})

describe("Component: 'Person'", () => {
  it("should have applied styling to elements", () => {
    const testPersonData = { personData: cvdataJSON.personData }
    render(
      <AppContext.Provider value={testPersonData}>
        <Person />
      </AppContext.Provider>
    )

    const wrapper = screen.getByTestId("person-wrapper")
    const div = screen.getByTestId("person-details")

    expect(wrapper.className).toBe(styles.Person)
    expect(div.className).toBe(styles.PersonDetails)
  })

  it("should show correct person data", () => {
    const testPersonData = { personData: cvdataJSON.personData }
    render(
      <AppContext.Provider value={testPersonData}>
        <Person />
      </AppContext.Provider>
    )

    const h2 = screen.getByRole("heading", { level: 2 })
    const h3 = screen.getByRole("heading", { level: 3 })

    expect(h2.textContent).toBe(testPersonData.personData.data.fullname)
    expect(h3.textContent).toBe(testPersonData.personData.data.role)
  })
})

describe("Component: 'Contact'", () => {
  it("should have applied styling to elements", () => {
    const testPersonData = { personData: cvdataJSON.personData }
    render(
      <AppContext.Provider value={testPersonData}>
        <Contact />
      </AppContext.Provider>
    )

    const wrapper = screen.getByTestId("contact-wrapper")
    const div = screen.getByTestId("contact-details")

    expect(wrapper.className).toBe(styles.Contact)
    expect(div.className).toBe(styles.ContactDetails)
  })

  it("should show correct contact data", () => {
    const testPersonData = { personData: cvdataJSON.personData }
    render(
      <AppContext.Provider value={testPersonData}>
        <Contact />
      </AppContext.Provider>
    )

    const email = screen.getByTestId("ref-email")
    const linkedin = screen.getByTestId("ref-linkedin")
    const github = screen.getByTestId("ref-github")

    expect(email.textContent).toBe(testPersonData.personData.data.email)
    expect(linkedin.textContent).toBe(testPersonData.personData.data.linkedin)
    expect(github.textContent).toBe(testPersonData.personData.data.github)
  })

  it("should have correct contact links", () => {
    const testPersonData = { personData: cvdataJSON.personData }
    render(
      <AppContext.Provider value={testPersonData}>
        <Contact />
      </AppContext.Provider>
    )

    const email = screen.getByTestId("ref-email")
    const linkedin = screen.getByTestId("ref-linkedin")
    const github = screen.getByTestId("ref-github")

    expect(email).toHaveAttribute("href", `mailto:${testPersonData.personData.data.email}?subject=${testPersonData.personData.data.emailsubject}`)
    expect(linkedin).toHaveAttribute("href", `https://www.${testPersonData.personData.data.linkedin}`)
    expect(github).toHaveAttribute("href", `https://www.${testPersonData.personData.data.github}`)
  })
})

describe("Component: 'Summary'", () => {
  it("should show the section heading text as h4", () => {
    const testSummaryData = { summaryData: cvdataJSON.summaryData }
    render(
      <AppContext.Provider value={testSummaryData}>
        <Summary />
      </AppContext.Provider>
    )

    const h4 = screen.getByRole("heading", { level: 4 })

    expect(h4.textContent).toBe("Profile Summary")
  })

  it("should show the headers thematic break (hr)", () => {
    const testSummaryData = { summaryData: cvdataJSON.summaryData }
    render(
      <AppContext.Provider value={testSummaryData}>
        <Summary />
      </AppContext.Provider>
    )

    const hr = screen.getByRole("separator")

    expect(hr).toBeDefined()
  })

  it("should have applied styling to elements", () => {
    const testSummaryData = { summaryData: cvdataJSON.summaryData }
    render(
      <AppContext.Provider value={testSummaryData}>
        <Summary />
      </AppContext.Provider>
    )

    const section = screen.getByTestId("summary-section")

    expect(section.className).toBe(styles.Summary)
  })

  it("should show correct summary data", () => {
    const testSummaryData = { summaryData: cvdataJSON.summaryData }
    render(
      <AppContext.Provider value={testSummaryData}>
        <Summary />
      </AppContext.Provider>
    )

    const p = screen.getByTestId("summary-text")

    expect(p.textContent).toBe(testSummaryData.summaryData.data.summary)
  })
})

describe("Component: 'Experience'", () => {
  it("should show the section heading text as h4", () => {
    const testJobsData = { jobsData: cvdataJSON.jobsData }
    render(
      <AppContext.Provider value={testJobsData}>
        <Experience />
      </AppContext.Provider>
    )

    const h4 = screen.getByRole("heading", { level: 4 })

    expect(h4.textContent).toBe("Experience")
  })

  it("should show the headers thematic break (hr)", () => {
    const testJobsData = { jobsData: cvdataJSON.jobsData }
    render(
      <AppContext.Provider value={testJobsData}>
        <Experience />
      </AppContext.Provider>
    )

    const hr = screen.getByRole("separator")

    expect(hr).toBeDefined()
  })

  it("should have applied styling to elements", () => {
    const testJobsData = { jobsData: cvdataJSON.jobsData }
    render(
      <AppContext.Provider value={testJobsData}>
        <Experience />
      </AppContext.Provider>
    )

    const section = screen.getByTestId("experience-section")

    expect(section.className).toBe(styles.Experience)
  })
})

describe("Component: 'Jobs'", () => {
  it("should have applied styling to element", () => {
    const testJobsData = { jobsData: cvdataJSON.jobsData }
    render(
      <AppContext.Provider value={testJobsData}>
        <Jobs />
      </AppContext.Provider>
    )

    const wrapper = screen.getByTestId("jobs")

    expect(wrapper.className).toBe(styles.Jobs)
  })

  it("should render correct amount of jobs data", () => {
    const testJobsData = { jobsData: cvdataJSON.jobsData }
    render(
      <AppContext.Provider value={testJobsData}>
        <Jobs />
      </AppContext.Provider>
    )

    const div = screen.getByTestId("jobs")

    expect(div.childNodes.length).toBe(testJobsData.jobsData.data.length)
  })
})

describe("Component: 'Job'", () => {
  it("should have applied styling to elements", () => {
    const testJobData = cvdataJSON.jobsData.data[0]
    render(<Job data={testJobData} />)

    const wrapper = screen.getByTestId("job-wrapper")
    const details = screen.getByTestId("job-details")
    const title = screen.getByTestId("job-title")
    const tenure = screen.getByTestId("job-tenure")

    expect(wrapper.className).toBe(styles.Job)
    expect(details.className).toBe(styles.JobDetails)
    expect(title.className).toBe(styles.bold)
    expect(tenure.className).toBe(styles.light)
  })

  it("should render correct job data", () => {
    const testJobData = cvdataJSON.jobsData.data[0]
    render(<Job data={testJobData} />)

    const title = screen.getByTestId("job-title")
    const tenure = screen.getByTestId("job-tenure")
    const description = screen.getByTestId("job-description")
    const tasks = screen.getByTestId("job-tasks")

    expect(title.textContent).toBe(testJobData.title)
    expect(tenure.textContent).toBe(testJobData.tenure)
    expect(description.textContent).toBe(testJobData.description)
    expect(tasks.childNodes.length).toBe(testJobData.tasks.length)
  })
})

describe("Component: 'TechStack'", () => {
  it("should have applied styling to elements", () => {
    const testStackData = cvdataJSON.jobsData.data[0].techstack
    render(<TechStack stack={testStackData} />)

    const stack = screen.getByTestId("tech-stack")
    const items = screen.getByTestId("stack-items-wrapper")
    const itemNodes = screen.getAllByTestId("stack-item")

    expect(stack.className).toBe(styles.JobTechStack)
    expect(items.className).toBe(styles.StackItems)
    itemNodes.forEach(item => expect(item.className).toBe(styles.StackItem))
  })

  it("should render correct stack data", () => {
    const testStackData = cvdataJSON.jobsData.data[0].techstack
    render(<TechStack stack={testStackData} />)

    const title = screen.getByTestId("tech-stack-title")
    const items = screen.getByTestId("stack-items")
    const itemNodes = screen.getAllByTestId("stack-item")

    expect(title.textContent).toBe("Tech Stack")
    expect(items.childNodes.length).toBe(testStackData?.length)

    if (!(items.childNodes.length === testStackData?.length)) return
    itemNodes.forEach((item, index) => expect(item.textContent).toBe(testStackData[index]))
  })
})

describe("Component: 'Info'", () => {
  it("should have applied a styling to element", () => {
    render(<Info />)

    const section = screen.getByTestId("info-section")

    expect(section.className).toBe(styles.Info)
  })
})

describe("Component: 'Education'", () => {
  it("should show the section heading text as h5", () => {
    const testEducationData = { educationData: cvdataJSON.educationData }
    render(
      <AppContext.Provider value={testEducationData}>
        <Education />
      </AppContext.Provider>
    )

    const h5 = screen.getByRole("heading", { level: 5 })

    expect(h5.textContent).toBe("Education")
  })

  it("should show the headers thematic break (hr)", () => {
    const testEducationData = { educationData: cvdataJSON.educationData }
    render(
      <AppContext.Provider value={testEducationData}>
        <Education />
      </AppContext.Provider>
    )

    const hr = screen.getByRole("separator")

    expect(hr).toBeDefined()
  })

  it("should have applied styling to elements", () => {
    const testEducationData = { educationData: cvdataJSON.educationData }
    render(
      <AppContext.Provider value={testEducationData}>
        <Education />
      </AppContext.Provider>
    )

    const section = screen.getByTestId("education-section")
    const div = screen.getByTestId("schools")

    expect(section.className).toBe(styles.Education)
    expect(div.className).toBe(styles.Schools)
  })

  it("should render correct amount of education data", () => {
    const testEducationData = { educationData: cvdataJSON.educationData }
    render(
      <AppContext.Provider value={testEducationData}>
        <Education />
      </AppContext.Provider>
    )

    const div = screen.getByTestId("schools")

    expect(div.childNodes.length).toBe(testEducationData.educationData.data.length)
  })
})

describe("Component: 'School'", () => {
  it("should have applied a styling to elements", () => {
    const testEducationData = cvdataJSON.educationData.data[0]
    render(<School data={testEducationData} />)

    const div = screen.getByTestId("school-details")
    const span = screen.getByTestId("school-degree")

    expect(div.className).toBe(styles.SchoolDetails)
    expect(span.className).toBe(styles.bold)
  })

  it("should render correct school data", () => {
    const testEducationData = cvdataJSON.educationData.data[0]
    render(<School data={testEducationData} />)

    const degree = screen.getByTestId("school-degree")
    const name = screen.getByTestId("school-name")
    const duration = screen.getByTestId("school-duration")

    expect(degree.textContent).toBe(testEducationData.degree)
    expect(name.textContent).toBe(testEducationData.name)
    expect(duration.textContent).toBe(testEducationData.duration)
  })
})

describe("Component: 'Languages'", () => {
  it("should show the section heading text as h5", () => {
    const testLanguagesData = { languagesData: cvdataJSON.languagesData }
    render(
      <AppContext.Provider value={testLanguagesData}>
        <Languages />
      </AppContext.Provider>
    )

    const h5 = screen.getByRole("heading", { level: 5 })

    expect(h5.textContent).toBe("Languages")
  })

  it("should show the headers thematic break (hr)", () => {
    const testLanguagesData = { languagesData: cvdataJSON.languagesData }
    render(
      <AppContext.Provider value={testLanguagesData}>
        <Languages />
      </AppContext.Provider>
    )

    const hr = screen.getByRole("separator")

    expect(hr).toBeDefined()
  })

  it("should have applied styling to elements", () => {
    const testLanguagesData = { languagesData: cvdataJSON.languagesData }
    render(
      <AppContext.Provider value={testLanguagesData}>
        <Languages />
      </AppContext.Provider>
    )

    const section = screen.getByTestId("languages-section")
    const div = screen.getByTestId("languages-details")

    expect(section.className).toBe(styles.Languages)
    expect(div.className).toBe(styles.LanguagesDetails)
  })

  it("should render correct amount of language data", () => {
    const testLanguagesData = { languagesData: cvdataJSON.languagesData }
    render(
      <AppContext.Provider value={testLanguagesData}>
        <Languages />
      </AppContext.Provider>
    )

    const div = screen.getByTestId("languages-details")

    expect(div.childNodes.length).toBe(testLanguagesData.languagesData.data.length)
  })
})

describe("Component: 'Language'", () => {
  it("should have applied a styling to elements", () => {
    const testLanguageData = cvdataJSON.languagesData.data[0]
    render(<Language data={testLanguageData} />)

    const div = screen.getByTestId("language-details")
    const span = screen.getByTestId("language")

    expect(div.className).toBe(styles.LanguageDetails)
    expect(span.className).toBe(styles.bold)
  })

  it("should render correct language data", () => {
    const testLanguageData = cvdataJSON.languagesData.data[0]
    render(<Language data={testLanguageData} />)

    const language = screen.getByTestId("language")
    const level = screen.getByTestId("language-level")

    expect(language.textContent).toBe(testLanguageData.language)
    expect(level.textContent).toBe(testLanguageData.level)
  })
})