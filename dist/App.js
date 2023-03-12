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
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import * as React from "react";
import { AppContext } from "./helper/context";
import { isEmptyObject } from "./helper/utils";
import { GitHubIcon, LoadingSpinner, LinkedInIcon, MailIcon, PhoneIcon } from "./icons/Icons";
import styles from "./App.module.css";
var DIN_A4_HEIGHT_IN_PX = 1118.74;
var App = function (_a) {
    var loadData = _a.loadData;
    var _b = React.useState({}), cvData = _b[0], setCvData = _b[1];
    React.useEffect(function () {
        var data = loadData(); // Dependency injection to test conditional loading
        setCvData(function (initial) { return (__assign(__assign({}, initial), data)); });
    }, [loadData]);
    return (_jsx(AppContext.Provider, __assign({ value: cvData }, { children: _jsx("div", __assign({ className: styles.App, "data-testid": "app" }, { children: _jsx("div", __assign({ className: styles.CVWrapper, "data-testid": "cv-wrapper" }, { children: !isEmptyObject(cvData) ? _jsx(CVContent, {}, void 0) : _jsx(LoadingSpinner, {}, void 0) }), void 0) }), void 0) }), void 0));
};
export var CVContent = function () {
    return (_jsxs("div", __assign({ className: styles.CVContent, "data-testid": "cvcontent-wrapper" }, { children: [_jsx(Header, {}, void 0), _jsx(Summary, {}, void 0), _jsx(Experience, {}, void 0), _jsx(Info, {}, void 0)] }), void 0));
};
export var Header = function () {
    return (_jsxs("section", __assign({ className: styles.Header, "data-testid": "header-section" }, { children: [_jsx(Person, {}, void 0), _jsx(Contact, {}, void 0)] }), void 0));
};
export var Person = function () {
    var personData = React.useContext(AppContext).personData;
    if (!personData || !("data" in personData))
        return null;
    return (_jsx("div", __assign({ className: styles.Person, "data-testid": "person-wrapper" }, { children: _jsxs("div", __assign({ className: styles.PersonDetails, "data-testid": "person-details" }, { children: [_jsx("h2", { children: personData.data.fullname }, void 0), _jsx("h3", { children: personData.data.role }, void 0)] }), void 0) }), void 0));
};
export var Contact = function () {
    var personData = React.useContext(AppContext).personData;
    if (!personData || !("data" in personData))
        return null;
    return (_jsx("div", __assign({ className: styles.Contact, "data-testid": "contact-wrapper" }, { children: _jsxs("div", __assign({ className: styles.ContactDetails, "data-testid": "contact-details" }, { children: [_jsxs("span", { children: [_jsx("a", __assign({ href: "mailto:".concat(personData.data.email, "?subject=").concat(personData.data.emailsubject), "data-testid": "ref-email" }, { children: personData.data.email }), void 0), _jsx(MailIcon, {}, void 0)] }, void 0), _jsxs("span", { children: [_jsx("p", { children: personData.data.phone }, void 0), _jsx(PhoneIcon, {}, void 0)] }, void 0), _jsxs("span", { children: [_jsx("a", __assign({ href: "https://www.".concat(personData.data.linkedin), "data-testid": "ref-linkedin" }, { children: personData.data.linkedin }), void 0), _jsx(LinkedInIcon, {}, void 0)] }, void 0), _jsxs("span", { children: [_jsx("a", __assign({ href: "https://www.".concat(personData.data.github), "data-testid": "ref-github" }, { children: personData.data.github }), void 0), _jsx(GitHubIcon, {}, void 0)] }, void 0)] }), void 0) }), void 0));
};
export var Summary = function () {
    var summaryData = React.useContext(AppContext).summaryData;
    if (!summaryData || !("data" in summaryData))
        return null;
    return (_jsxs("section", __assign({ className: styles.Summary, "data-testid": "summary-section" }, { children: [_jsx("h4", { children: "Profile Summary" }, void 0), _jsx("hr", {}, void 0), _jsx("p", __assign({ "data-testid": "summary-text" }, { children: summaryData.data.summary }), void 0)] }), void 0));
};
export var Experience = function () {
    return (_jsxs("section", __assign({ className: styles.Experience, "data-testid": "experience-section" }, { children: [_jsx("h4", { children: "Experience" }, void 0), _jsx("hr", {}, void 0), _jsx(Jobs, {}, void 0)] }), void 0));
};
export var Jobs = function () {
    var jobsData = React.useContext(AppContext).jobsData;
    if (!jobsData || !("data" in jobsData))
        return null;
    var jobs = jobsData.data.map(function (jobData, index) { return _jsx(Job, { data: jobData }, index); });
    return (_jsx("div", __assign({ className: styles.Jobs, "data-testid": "jobs" }, { children: jobs }), void 0));
};
export var Job = function (_a) {
    var data = _a.data;
    var ref = React.useRef(null);
    var _b = React.useState(false), shouldAddPageBreak = _b[0], setShouldAddPageBreak = _b[1];
    var classJobDetails = (data === null || data === void 0 ? void 0 : data.techstack) ? styles.JobDetails : styles.JobDetailsFullWidth;
    var tasks = data.tasks.map(function (task, index) {
        return (_jsx("li", { children: task.description }, index));
    });
    React.useEffect(function () {
        if (!ref.current)
            return;
        var body = document.body.getBoundingClientRect();
        var job = ref.current.getBoundingClientRect();
        var offsetTop = job.top - body.top;
        setShouldAddPageBreak(offsetTop < DIN_A4_HEIGHT_IN_PX && offsetTop + job.height >= DIN_A4_HEIGHT_IN_PX);
    }, [ref]);
    return (_jsxs("div", __assign({ className: "".concat(styles.Job, " ").concat(shouldAddPageBreak ? styles.JobOnNextPage : ''), "data-testid": "job-wrapper", ref: ref }, { children: [_jsxs("div", __assign({ className: classJobDetails, "data-testid": "job-details" }, { children: [_jsx("span", __assign({ className: styles.bold, "data-testid": "job-title" }, { children: data.title }), void 0), _jsx("span", __assign({ className: styles.light, "data-testid": "job-tenure" }, { children: data.tenure }), void 0), _jsx("span", __assign({ "data-testid": "job-description" }, { children: data.description }), void 0), _jsx("ul", __assign({ "data-testid": "job-tasks" }, { children: tasks }), void 0)] }), void 0), _jsx(TechStack, { stack: data === null || data === void 0 ? void 0 : data.techstack }, void 0)] }), void 0));
};
export var TechStack = function (_a) {
    var stack = _a.stack;
    if (!stack || stack.length === 0)
        return null;
    var stackItems = stack.map(function (item, index) {
        return (_jsx("div", __assign({ className: styles.StackItem, "data-testid": "stack-item" }, { children: item }), index));
    });
    return (_jsxs("div", __assign({ className: styles.JobTechStack, "data-testid": "tech-stack" }, { children: [_jsx("p", __assign({ "data-testid": "tech-stack-title" }, { children: "Tech Stack" }), void 0), _jsx("div", __assign({ className: styles.StackItems, "data-testid": "stack-items-wrapper" }, { children: _jsx("div", __assign({ "data-testid": "stack-items" }, { children: stackItems }), void 0) }), void 0)] }), void 0));
};
export var Info = function () {
    var _a = React.useState(false), isMultiPage = _a[0], setIsMultiPage = _a[1];
    React.useEffect(function () {
        var body = document.body.getBoundingClientRect();
        setIsMultiPage(body.height > DIN_A4_HEIGHT_IN_PX);
    }, []);
    return (_jsx(_Fragment, { children: isMultiPage ? (_jsxs(_Fragment, { children: [_jsx("section", __assign({ className: styles.Info, "data-testid": "education-section-multipage" }, { children: _jsx(EducationMultiPage, {}, void 0) }), void 0), _jsx("section", __assign({ className: styles.Info, "data-testid": "language-section-multipage" }, { children: _jsx(LanguagesMultiPage, {}, void 0) }), void 0)] }, void 0)) : (_jsxs("section", __assign({ className: styles.Info, "data-testid": "info-section" }, { children: [_jsx(Education, {}, void 0), _jsx(Languages, {}, void 0)] }), void 0)) }, void 0));
};
export var Education = function () {
    var educationData = React.useContext(AppContext).educationData;
    if (!educationData || !("data" in educationData))
        return null;
    var schools = educationData.data.map(function (schoolData, index) {
        return _jsx(School, { data: schoolData }, index);
    });
    return (_jsxs("section", __assign({ className: styles.Education, "data-testid": "education-section" }, { children: [_jsx("h5", { children: "Education" }, void 0), _jsx("hr", {}, void 0), _jsx("div", __assign({ className: styles.Schools, "data-testid": "schools" }, { children: schools }), void 0)] }), void 0));
};
export var EducationMultiPage = function () {
    var educationData = React.useContext(AppContext).educationData;
    if (!educationData || !("data" in educationData))
        return null;
    var schools = educationData.data.map(function (schoolData, index) {
        return _jsx(SchoolMultiPage, { data: schoolData }, index);
    });
    return (_jsxs("section", __assign({ className: styles.EducationMultiPage, "data-testid": "education-multipage-section" }, { children: [_jsx("h5", { children: "Education" }, void 0), _jsx("hr", {}, void 0), _jsx("div", __assign({ className: styles.SchoolsMultiPage, "data-testid": "schools" }, { children: schools }), void 0)] }), void 0));
};
export var School = function (_a) {
    var data = _a.data;
    return (_jsxs("div", __assign({ className: styles.SchoolDetails, "data-testid": "school-details" }, { children: [_jsx("span", __assign({ className: styles.bold, "data-testid": "school-degree" }, { children: data.degree }), void 0), _jsx("span", __assign({ "data-testid": "school-name" }, { children: data.name }), void 0), _jsx("span", __assign({ "data-testid": "school-duration" }, { children: data.duration }), void 0)] }), void 0));
};
export var SchoolMultiPage = function (_a) {
    // const tasks: JSX.Element[] = data.tasks.map((task: Types.TJobTask, index: number): JSX.Element => {
    //   return (
    //     <li key={index}>{task.description}</li>
    //   )
    // })
    var data = _a.data;
    return (_jsxs("div", __assign({ className: styles.SchoolDetailsMultiPage, "data-testid": "school-details-multipage" }, { children: [_jsxs("span", __assign({ className: styles.bold, "data-testid": "school-degree" }, { children: [data.degree, ", ", data.name] }), void 0), _jsx("span", __assign({ style: { paddingBottom: "12px" }, "data-testid": "school-duration" }, { children: data.duration }), void 0)] }), void 0));
};
export var Languages = function () {
    var languagesData = React.useContext(AppContext).languagesData;
    if (!languagesData || !("data" in languagesData))
        return null;
    var languages = languagesData.data.map(function (language, index) {
        return _jsx(Language, { data: language }, index);
    });
    return (_jsxs("section", __assign({ className: styles.Languages, "data-testid": "languages-section" }, { children: [_jsx("h5", { children: "Languages" }, void 0), _jsx("hr", {}, void 0), _jsx("div", __assign({ className: styles.LanguagesDetails, "data-testid": "languages-details" }, { children: languages }), void 0)] }), void 0));
};
export var LanguagesMultiPage = function () {
    var languagesData = React.useContext(AppContext).languagesData;
    if (!languagesData || !("data" in languagesData))
        return null;
    var languages = languagesData.data.map(function (language, index) {
        return _jsx(LanguageMultiPage, { data: language }, index);
    });
    return (_jsxs("section", __assign({ className: styles.LanguagesMultiPage, "data-testid": "languages-section" }, { children: [_jsx("h5", { children: "Languages" }, void 0), _jsx("hr", {}, void 0), _jsx("div", __assign({ className: styles.LanguagesDetails, "data-testid": "languages-details" }, { children: languages }), void 0)] }), void 0));
};
export var Language = function (_a) {
    var data = _a.data;
    return (_jsxs("div", __assign({ className: styles.LanguageDetails, "data-testid": "language-details" }, { children: [_jsx("span", __assign({ className: styles.bold, "data-testid": "language" }, { children: data.language }), void 0), _jsx("span", __assign({ "data-testid": "language-level" }, { children: data.level }), void 0)] }), void 0));
};
export var LanguageMultiPage = function (_a) {
    var data = _a.data;
    return (_jsxs("div", __assign({ className: styles.LanguageDetailsMultiPage, "data-testid": "language-details" }, { children: [_jsx("span", __assign({ className: styles.bold, "data-testid": "language" }, { children: data.language }), void 0), _jsx("span", __assign({ "data-testid": "language-level" }, { children: data.level }), void 0)] }), void 0));
};
export default App;
