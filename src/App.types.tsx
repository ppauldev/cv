export type TEducationData = {
  label: string,
  data: Array<object>
}

export type TJobsData = {
  label: string,
  data: Array<object>
}

export type TLanguagesData = {
  label: string,
  data: Array<object>
}

export type TPersonData = {
  label: string,
  data: Array<object>
}

export type TSummaryData = {
  label: string,
  data: Array<object>
}

export type TCVData = {
  educationData: object,
  jobsData: object,
  languagesData: object,
  personData: object,
  summaryData: object
}