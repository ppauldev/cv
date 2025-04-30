import * as React from "react"
import * as Types from "../App.types"

export interface IAppContext {
  language: string
  setLanguage: (language: string) => void
  educationData?: Types.TEducationData
  jobsData?: Types.TJobsData
  languagesData?: Types.TLanguagesData
  personData?: Types.TPersonData
  summaryData?: Types.TSummaryData
}

export const AppContext = React.createContext<IAppContext>({
  language: "en",
  setLanguage: () => { },
})