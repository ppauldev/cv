import * as cvdataJSON from "../cvdata.json"
import * as Types from "../App.types"

// Interface for data loading, here via JSON
export const loadData = (): Types.TCVData | {} => {
  if (!cvdataJSON) return {}

  return cvdataJSON
}