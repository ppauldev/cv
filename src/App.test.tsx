import { render, screen } from '@testing-library/react';
import App, { Languages } from './App';
import styles from "./App.module.css"
import * as cvdataJSON from "./cvdata.json"
import { AppContext } from "./helper/context"

// test('Initial test render', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/Test/i);
//   expect(linkElement).toBeInTheDocument();
// });



describe("abc", () => {
  it('should render App and find Test', () => {
    render(<App />);
    const linkElement = screen.getByText(/Test/i);
    expect(linkElement).toBeInTheDocument();
  })
})

describe("Success cases - component: 'Languages'", () => {
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

  it("should have applied a styling to div", () => {
    const testLanguagesData = { languagesData: cvdataJSON.languagesData }
    render(
      <AppContext.Provider value={testLanguagesData}>
        <Languages />
      </AppContext.Provider>
    )
    const div = screen.getByTestId("languages-details")

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