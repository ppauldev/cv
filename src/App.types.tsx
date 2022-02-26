export type TEducationData = {
  label: string,
  data: TSchool[]
}

export type TSchool = {
  degree: string,
  name: string,
  duration: string
}

export type TJobsData = {
  label: string,
  data: TJob[]
}

export type TJob = {
  title: string,
  tenure: string,
  description: string,
  tasks: TJobTask[],
  techstack?: string[]
}

export type TJobTask = {
  description: string
}

export type TLanguagesData = {
  label: string,
  data: TLanguage[]
}

export type TLanguage = {
  language: string,
  level: string
}

export type TPersonData = {
  label: string,
  data: TPersonInfo
}

export type TPersonInfo = {
  fullname: string,
  role: string,
  email: string,
  emailsubject: string,
  phone: string,
  linkedin: string,
  github: string
}

export type TSummaryData = {
  label: string,
  data: TSummaryText
}

export type TSummaryText = {
  summary: string
}

export type TCVData = {
  educationData: TEducationData,
  jobsData: TJobsData,
  languagesData: TLanguagesData,
  personData: TPersonData,
  summaryData: TSummaryData
}