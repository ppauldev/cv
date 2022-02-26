import { render, screen } from '@testing-library/react';
import App, { Education, Language, Languages, School } from './App';
import styles from "./App.module.css"
import * as cvdataJSON from "./cvdata.json"
import { AppContext } from "./helper/context"

describe("abc", () => {
  it('should render App and find Test', () => {
    render(<App />);
    const linkElement = screen.getByText(/Test/i);
    expect(linkElement).toBeInTheDocument();
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