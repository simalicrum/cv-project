import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "Enter name",
      nameform: false,
      address: "Enter street address",
      addressform: false,
      cityprovince: "Enter city and province",
      cityprovinceform: false,
      phone: "Enter phone number",
      phoneform: false,
      email: "Enter email address",
      emailform: false,
      jobs: [],
      jobsform: false,
      title: "",
      company: "",
      from: "",
      to: "",
      education: [],
      educationform: false,
      accreditation: "",
      school: "",
      isMouseInsideJobs: false,
      isMouseInsideEd: false,
    };
  }
  handleClick = (form) => {
    this.setState({ [form]: true });
  };
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmitForm = (e) => {
    e.preventDefault();
    this.setState({ [e.target.id]: false });
  };
  renderEntry = (formName, name, stateEntry, stateFormEntry) => {
    if (stateFormEntry) {
      return (
        <form onSubmit={this.onSubmitForm} id={formName}>
          <input
            type="text"
            name={name}
            value={stateEntry}
            onChange={this.handleChange}
          ></input>
          <button type="submit">Submit</button>
        </form>
      );
    } else {
      return stateEntry;
    }
  };
  renderJobs = () => {
    return this.state.jobs.map((i) => (
      <div>
        <h3>
          {i.title} at {i.company}
        </h3>
        <b>
          From {i.from} to {i.to}
        </b>
      </div>
    ));
  };
  onSubmitJobs = (e) => {
    e.preventDefault();
    this.setState({
      jobs: this.state.jobs
        .map((i) => {
          return { title: i.title, company: i.company, from: i.from, to: i.to };
        })
        .concat({
          title: this.state.title,
          company: this.state.company,
          from: this.state.from,
          to: this.state.to,
        }),
      jobsform: false,
      title: "",
      company: "",
      from: "",
      to: "",
    });
  };
  renderJobsForm = () => {
    if (this.state.jobsform) {
      return (
        <form onSubmit={this.onSubmitJobs}>
          <label>Job title: </label>
          <input
            type="text"
            name="title"
            value={this.state.title}
            onChange={this.handleChange}
          ></input>
          <br />
          <label>Company: </label>
          <input
            type="text"
            name="company"
            value={this.state.company}
            onChange={this.handleChange}
          ></input>
          <br />
          <label>Worked from: </label>
          <input
            type="text"
            name="from"
            value={this.state.from}
            onChange={this.handleChange}
          ></input>
          <label> to </label>
          <input
            type="text"
            name="to"
            value={this.state.to}
            onChange={this.handleChange}
          ></input>
          <br />
          <button type="submit">Add</button>
        </form>
      );
    } else {
      return (
        <div
          id="jobs-add"
          onMouseEnter={this.mouseEnterJobs}
          onMouseLeave={this.mouseLeaveJobs}
        >
          {this.state.isMouseInsideJobs ? (
            <button
              onClick={() => {
                this.setState({ jobsform: true });
              }}
            >
              Add job
            </button>
          ) : null}
        </div>
      );
    }
  };
  mouseEnterJobs = () => {
    this.setState({ isMouseInsideJobs: true });
  };
  mouseLeaveJobs = () => {
    this.setState({ isMouseInsideJobs: false });
  };
  onSubmitEducation = (e) => {
    e.preventDefault();
    this.setState({
      education: this.state.education
        .map((i) => {
          return {
            accreditation: i.accreditation,
            school: i.school,
            from: i.from,
            to: i.to,
          };
        })
        .concat({
          accreditation: this.state.accreditation,
          school: this.state.school,
          from: this.state.from,
          to: this.state.to,
        }),
      educationform: false,
      accreditation: "",
      school: "",
      from: "",
      to: "",
    });
  };
  renderEducationForm = () => {
    if (this.state.educationform) {
      return (
        <form onSubmit={this.onSubmitEducation}>
          <label>Accreditation title: </label>
          <input
            type="text"
            name="accreditation"
            value={this.state.accreditation}
            onChange={this.handleChange}
          ></input>
          <br />
          <label>School: </label>
          <input
            type="text"
            name="school"
            value={this.state.school}
            onChange={this.handleChange}
          ></input>
          <br />
          <label>Studied from: </label>
          <input
            type="text"
            name="from"
            value={this.state.from}
            onChange={this.handleChange}
          ></input>
          <label> to </label>
          <input
            type="text"
            name="to"
            value={this.state.to}
            onChange={this.handleChange}
          ></input>
          <br />
          <button type="submit">Add</button>
        </form>
      );
    } else {
      return (
        <div
          id="education-add"
          onMouseEnter={this.mouseEnterEd}
          onMouseLeave={this.mouseLeaveEd}
        >
          {this.state.isMouseInsideEd ? (
            <button
              onClick={() => {
                this.setState({ educationform: true });
              }}
            >
              Add accreditation
            </button>
          ) : null}
        </div>
      );
    }
  };
  mouseEnterEd = () => {
    this.setState({ isMouseInsideEd: true });
  };
  mouseLeaveEd = () => {
    this.setState({ isMouseInsideEd: false });
  };
  renderEducation = () => {
    return this.state.education.map((i) => (
      <div>
        <h3>
          {i.accreditation} at {i.school}
        </h3>
        <b>
          From {i.from} to {i.to}
        </b>
      </div>
    ));
  };
  render() {
    return (
      <div>
        <h1
          id="name-div"
          onClick={() => {
            this.handleClick("nameform");
          }}
        >
          {this.renderEntry(
            "nameform",
            "name",
            this.state.name,
            this.state.nameform
          )}
        </h1>
        <b
          id="address-div"
          onClick={() => {
            this.handleClick("addressform");
          }}
        >
          {this.renderEntry(
            "addressform",
            "address",
            this.state.address,
            this.state.addressform
          )}
        </b>
        <br />
        <b
          id="cityprovince-div"
          onClick={() => {
            this.handleClick("cityprovinceform");
          }}
        >
          {this.renderEntry(
            "cityprovinceform",
            "cityprovince",
            this.state.cityprovince,
            this.state.cityprovinceform
          )}
        </b>
        <br />
        <b
          id="phone-div"
          onClick={() => {
            this.handleClick("phoneform");
          }}
        >
          {this.renderEntry(
            "phoneform",
            "phone",
            this.state.phone,
            this.state.phoneform
          )}
        </b>
        <br />
        <b
          id="email-div"
          onClick={() => {
            this.handleClick("emailform");
          }}
        >
          {this.renderEntry(
            "emailform",
            "email",
            this.state.email,
            this.state.emailform
          )}
        </b>
        <h2 id="jobs-title">Job Experience</h2>
        <div id="jobs-div">{this.renderJobs()}</div>
        <div>{this.renderJobsForm()}</div>
        <h2 id="education-title">Education</h2>
        <div id="education-div">{this.renderEducation()}</div>
        <div>{this.renderEducationForm()}</div>
      </div>
    );
  }
}

export default App;
