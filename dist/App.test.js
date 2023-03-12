var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx } from "react/jsx-runtime";
import { render, screen } from "@testing-library/react";
import { loadData as _loadData } from "./api/loadData";
import App, { Contact, CVContent, Education, Experience, Header, Info, Job, Jobs, Language, Languages, Person, School, Summary, TechStack } from "./App";
import styles from "./App.module.css";
import * as cvdataJSON from "./cvdata.json";
import { AppContext } from "./helper/context";
describe("Component: 'App", function () {
    it("should have applied a styling to elements after successful data load", function () {
        var testLoadData = _loadData;
        render(_jsx(App, { loadData: testLoadData }, void 0));
        var app = screen.getByTestId("app");
        var cvWrapper = screen.getByTestId("cv-wrapper");
        expect(app).toHaveClass(styles.App);
        expect(cvWrapper).toHaveClass(styles.CVWrapper);
    });
    it("should show loading spinner on load", function () {
        var testLoadData = function () { return {}; };
        render(_jsx(App, { loadData: testLoadData }, void 0));
        var spinner = screen.getByTestId("loading-spinner");
        expect(spinner).toBeVisible();
    });
});
describe("Component: 'CVContent'", function () {
    it("should have applied a styling to element", function () {
        render(_jsx(CVContent, {}, void 0));
        var wrapper = screen.getByTestId("cvcontent-wrapper");
        expect(wrapper).toHaveClass(styles.CVContent);
    });
});
describe("Component: 'Header'", function () {
    it("should have applied a styling to element", function () {
        render(_jsx(Header, {}, void 0));
        var section = screen.getByTestId("header-section");
        expect(section).toHaveClass(styles.Header);
    });
});
describe("Component: 'Person'", function () {
    it("should have applied styling to elements", function () {
        var testPersonData = { personData: cvdataJSON.personData };
        render(_jsx(AppContext.Provider, __assign({ value: testPersonData }, { children: _jsx(Person, {}, void 0) }), void 0));
        var wrapper = screen.getByTestId("person-wrapper");
        var div = screen.getByTestId("person-details");
        expect(wrapper).toHaveClass(styles.Person);
        expect(div).toHaveClass(styles.PersonDetails);
    });
    it("should show correct person data", function () {
        var testPersonData = { personData: cvdataJSON.personData };
        render(_jsx(AppContext.Provider, __assign({ value: testPersonData }, { children: _jsx(Person, {}, void 0) }), void 0));
        var h2 = screen.getByRole("heading", { level: 2 });
        var h3 = screen.getByRole("heading", { level: 3 });
        expect(h2).toHaveTextContent(testPersonData.personData.data.fullname);
        expect(h3).toHaveTextContent(testPersonData.personData.data.role);
    });
});
describe("Component: 'Contact'", function () {
    it("should have applied styling to elements", function () {
        var testPersonData = { personData: cvdataJSON.personData };
        render(_jsx(AppContext.Provider, __assign({ value: testPersonData }, { children: _jsx(Contact, {}, void 0) }), void 0));
        var wrapper = screen.getByTestId("contact-wrapper");
        var div = screen.getByTestId("contact-details");
        expect(wrapper).toHaveClass(styles.Contact);
        expect(div).toHaveClass(styles.ContactDetails);
    });
    it("should show correct contact data", function () {
        var testPersonData = { personData: cvdataJSON.personData };
        render(_jsx(AppContext.Provider, __assign({ value: testPersonData }, { children: _jsx(Contact, {}, void 0) }), void 0));
        var email = screen.getByTestId("ref-email");
        var linkedin = screen.getByTestId("ref-linkedin");
        var github = screen.getByTestId("ref-github");
        expect(email).toHaveTextContent(testPersonData.personData.data.email);
        expect(linkedin).toHaveTextContent(testPersonData.personData.data.linkedin);
        expect(github).toHaveTextContent(testPersonData.personData.data.github);
    });
    it("should have correct contact links", function () {
        var testPersonData = { personData: cvdataJSON.personData };
        render(_jsx(AppContext.Provider, __assign({ value: testPersonData }, { children: _jsx(Contact, {}, void 0) }), void 0));
        var email = screen.getByTestId("ref-email");
        var linkedin = screen.getByTestId("ref-linkedin");
        var github = screen.getByTestId("ref-github");
        expect(email).toHaveAttribute("href", "mailto:".concat(testPersonData.personData.data.email, "?subject=").concat(testPersonData.personData.data.emailsubject));
        expect(linkedin).toHaveAttribute("href", "https://www.".concat(testPersonData.personData.data.linkedin));
        expect(github).toHaveAttribute("href", "https://www.".concat(testPersonData.personData.data.github));
    });
});
describe("Component: 'Summary'", function () {
    it("should show the section heading text as h4", function () {
        var testSummaryData = { summaryData: cvdataJSON.summaryData };
        render(_jsx(AppContext.Provider, __assign({ value: testSummaryData }, { children: _jsx(Summary, {}, void 0) }), void 0));
        var h4 = screen.getByRole("heading", { level: 4 });
        expect(h4).toHaveTextContent("Profile Summary");
    });
    it("should show the headers thematic break (hr)", function () {
        var testSummaryData = { summaryData: cvdataJSON.summaryData };
        render(_jsx(AppContext.Provider, __assign({ value: testSummaryData }, { children: _jsx(Summary, {}, void 0) }), void 0));
        var hr = screen.getByRole("separator");
        expect(hr).toBeDefined();
    });
    it("should have applied styling to elements", function () {
        var testSummaryData = { summaryData: cvdataJSON.summaryData };
        render(_jsx(AppContext.Provider, __assign({ value: testSummaryData }, { children: _jsx(Summary, {}, void 0) }), void 0));
        var section = screen.getByTestId("summary-section");
        expect(section).toHaveClass(styles.Summary);
    });
    it("should show correct summary data", function () {
        var testSummaryData = { summaryData: cvdataJSON.summaryData };
        render(_jsx(AppContext.Provider, __assign({ value: testSummaryData }, { children: _jsx(Summary, {}, void 0) }), void 0));
        var p = screen.getByTestId("summary-text");
        expect(p).toHaveTextContent(testSummaryData.summaryData.data.summary);
    });
});
describe("Component: 'Experience'", function () {
    it("should show the section heading text as h4", function () {
        var testJobsData = { jobsData: cvdataJSON.jobsData };
        render(_jsx(AppContext.Provider, __assign({ value: testJobsData }, { children: _jsx(Experience, {}, void 0) }), void 0));
        var h4 = screen.getByRole("heading", { level: 4 });
        expect(h4).toHaveTextContent("Experience");
    });
    it("should show the headers thematic break (hr)", function () {
        var testJobsData = { jobsData: cvdataJSON.jobsData };
        render(_jsx(AppContext.Provider, __assign({ value: testJobsData }, { children: _jsx(Experience, {}, void 0) }), void 0));
        var hr = screen.getByRole("separator");
        expect(hr).toBeDefined();
    });
    it("should have applied styling to elements", function () {
        var testJobsData = { jobsData: cvdataJSON.jobsData };
        render(_jsx(AppContext.Provider, __assign({ value: testJobsData }, { children: _jsx(Experience, {}, void 0) }), void 0));
        var section = screen.getByTestId("experience-section");
        expect(section).toHaveClass(styles.Experience);
    });
});
describe("Component: 'Jobs'", function () {
    it("should have applied styling to element", function () {
        var testJobsData = { jobsData: cvdataJSON.jobsData };
        render(_jsx(AppContext.Provider, __assign({ value: testJobsData }, { children: _jsx(Jobs, {}, void 0) }), void 0));
        var wrapper = screen.getByTestId("jobs");
        expect(wrapper).toHaveClass(styles.Jobs);
    });
    it("should render correct amount of jobs data", function () {
        var testJobsData = { jobsData: cvdataJSON.jobsData };
        render(_jsx(AppContext.Provider, __assign({ value: testJobsData }, { children: _jsx(Jobs, {}, void 0) }), void 0));
        var div = screen.getByTestId("jobs");
        expect(div.childNodes.length).toBe(testJobsData.jobsData.data.length);
    });
});
describe("Component: 'Job'", function () {
    it("should have applied styling to elements", function () {
        var testJobData = cvdataJSON.jobsData.data[0];
        render(_jsx(Job, { data: testJobData }, void 0));
        var wrapper = screen.getByTestId("job-wrapper");
        var details = screen.getByTestId("job-details");
        var title = screen.getByTestId("job-title");
        var tenure = screen.getByTestId("job-tenure");
        expect(wrapper).toHaveClass(styles.Job);
        expect(details).toHaveClass(styles.JobDetails);
        expect(title).toHaveClass(styles.bold);
        expect(tenure).toHaveClass(styles.light);
    });
    it("should render correct job data", function () {
        var testJobData = cvdataJSON.jobsData.data[0];
        render(_jsx(Job, { data: testJobData }, void 0));
        var title = screen.getByTestId("job-title");
        var tenure = screen.getByTestId("job-tenure");
        var description = screen.getByTestId("job-description");
        var tasks = screen.getByTestId("job-tasks");
        expect(title).toHaveTextContent(testJobData.title);
        expect(tenure).toHaveTextContent(testJobData.tenure);
        expect(description).toHaveTextContent(testJobData.description);
        expect(tasks.childNodes.length).toBe(testJobData.tasks.length);
    });
});
describe("Component: 'TechStack'", function () {
    it("should have applied styling to elements", function () {
        var testStackData = cvdataJSON.jobsData.data[0].techstack;
        render(_jsx(TechStack, { stack: testStackData }, void 0));
        var stack = screen.getByTestId("tech-stack");
        var items = screen.getByTestId("stack-items-wrapper");
        var itemNodes = screen.getAllByTestId("stack-item");
        expect(stack).toHaveClass(styles.JobTechStack);
        expect(items).toHaveClass(styles.StackItems);
        itemNodes.forEach(function (item) { return expect(item).toHaveClass(styles.StackItem); });
    });
    it("should render correct stack data", function () {
        var testStackData = cvdataJSON.jobsData.data[0].techstack;
        render(_jsx(TechStack, { stack: testStackData }, void 0));
        var title = screen.getByTestId("tech-stack-title");
        var items = screen.getByTestId("stack-items");
        var itemNodes = screen.getAllByTestId("stack-item");
        expect(title).toHaveTextContent("Tech Stack");
        expect(items.childNodes.length).toBe(testStackData === null || testStackData === void 0 ? void 0 : testStackData.length);
        if (!(items.childNodes.length === (testStackData === null || testStackData === void 0 ? void 0 : testStackData.length)))
            return;
        itemNodes.forEach(function (item, index) { return expect(item).toHaveTextContent(testStackData[index]); });
    });
});
describe("Component: 'Info'", function () {
    it("should have applied a styling to element", function () {
        render(_jsx(Info, {}, void 0));
        var section = screen.getByTestId("info-section");
        expect(section).toHaveClass(styles.Info);
    });
});
describe("Component: 'Education'", function () {
    it("should show the section heading text as h5", function () {
        var testEducationData = { educationData: cvdataJSON.educationData };
        render(_jsx(AppContext.Provider, __assign({ value: testEducationData }, { children: _jsx(Education, {}, void 0) }), void 0));
        var h5 = screen.getByRole("heading", { level: 5 });
        expect(h5).toHaveTextContent("Education");
    });
    it("should show the headers thematic break (hr)", function () {
        var testEducationData = { educationData: cvdataJSON.educationData };
        render(_jsx(AppContext.Provider, __assign({ value: testEducationData }, { children: _jsx(Education, {}, void 0) }), void 0));
        var hr = screen.getByRole("separator");
        expect(hr).toBeDefined();
    });
    it("should have applied styling to elements", function () {
        var testEducationData = { educationData: cvdataJSON.educationData };
        render(_jsx(AppContext.Provider, __assign({ value: testEducationData }, { children: _jsx(Education, {}, void 0) }), void 0));
        var section = screen.getByTestId("education-section");
        var div = screen.getByTestId("schools");
        expect(section).toHaveClass(styles.Education);
        expect(div).toHaveClass(styles.Schools);
    });
    it("should render correct amount of education data", function () {
        var testEducationData = { educationData: cvdataJSON.educationData };
        render(_jsx(AppContext.Provider, __assign({ value: testEducationData }, { children: _jsx(Education, {}, void 0) }), void 0));
        var div = screen.getByTestId("schools");
        expect(div.childNodes.length).toBe(testEducationData.educationData.data.length);
    });
});
describe("Component: 'School'", function () {
    it("should have applied a styling to elements", function () {
        var testEducationData = cvdataJSON.educationData.data[0];
        render(_jsx(School, { data: testEducationData }, void 0));
        var div = screen.getByTestId("school-details");
        var span = screen.getByTestId("school-degree");
        expect(div).toHaveClass(styles.SchoolDetails);
        expect(span).toHaveClass(styles.bold);
    });
    it("should render correct school data", function () {
        var testEducationData = cvdataJSON.educationData.data[0];
        render(_jsx(School, { data: testEducationData }, void 0));
        var degree = screen.getByTestId("school-degree");
        var name = screen.getByTestId("school-name");
        var duration = screen.getByTestId("school-duration");
        expect(degree).toHaveTextContent(testEducationData.degree);
        expect(name).toHaveTextContent(testEducationData.name);
        expect(duration).toHaveTextContent(testEducationData.duration);
    });
});
describe("Component: 'Languages'", function () {
    it("should show the section heading text as h5", function () {
        var testLanguagesData = { languagesData: cvdataJSON.languagesData };
        render(_jsx(AppContext.Provider, __assign({ value: testLanguagesData }, { children: _jsx(Languages, {}, void 0) }), void 0));
        var h5 = screen.getByRole("heading", { level: 5 });
        expect(h5).toHaveTextContent("Languages");
    });
    it("should show the headers thematic break (hr)", function () {
        var testLanguagesData = { languagesData: cvdataJSON.languagesData };
        render(_jsx(AppContext.Provider, __assign({ value: testLanguagesData }, { children: _jsx(Languages, {}, void 0) }), void 0));
        var hr = screen.getByRole("separator");
        expect(hr).toBeDefined();
    });
    it("should have applied styling to elements", function () {
        var testLanguagesData = { languagesData: cvdataJSON.languagesData };
        render(_jsx(AppContext.Provider, __assign({ value: testLanguagesData }, { children: _jsx(Languages, {}, void 0) }), void 0));
        var section = screen.getByTestId("languages-section");
        var div = screen.getByTestId("languages-details");
        expect(section).toHaveClass(styles.Languages);
        expect(div).toHaveClass(styles.LanguagesDetails);
    });
    it("should render correct amount of language data", function () {
        var testLanguagesData = { languagesData: cvdataJSON.languagesData };
        render(_jsx(AppContext.Provider, __assign({ value: testLanguagesData }, { children: _jsx(Languages, {}, void 0) }), void 0));
        var div = screen.getByTestId("languages-details");
        expect(div.childNodes.length).toBe(testLanguagesData.languagesData.data.length);
    });
});
describe("Component: 'Language'", function () {
    it("should have applied a styling to elements", function () {
        var testLanguageData = cvdataJSON.languagesData.data[0];
        render(_jsx(Language, { data: testLanguageData }, void 0));
        var div = screen.getByTestId("language-details");
        var span = screen.getByTestId("language");
        expect(div).toHaveClass(styles.LanguageDetails);
        expect(span).toHaveClass(styles.bold);
    });
    it("should render correct language data", function () {
        var testLanguageData = cvdataJSON.languagesData.data[0];
        render(_jsx(Language, { data: testLanguageData }, void 0));
        var language = screen.getByTestId("language");
        var level = screen.getByTestId("language-level");
        expect(language).toHaveTextContent(testLanguageData.language);
        expect(level).toHaveTextContent(testLanguageData.level);
    });
});
