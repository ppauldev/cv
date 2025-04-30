import * as cvdataEN from "../cvdata-en.json"
import * as cvdataDE from "../cvdata-de.json"
import * as Types from "../App.types"

// Interface for data loading, here via JSON
export const loadData = (language: string = "en"): Types.TCVData | {} => {
  if (language === "de") {
    return cvdataDE
  }
  return cvdataEN
}