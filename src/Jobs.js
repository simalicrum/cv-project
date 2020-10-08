import React, { Component } from "react";

class Jobs extends Component {
  constructor() {
    super();
    this.state = {
      jobs: [],
      jobsform: false,
      title: "",
      company: "",
      from: "",
      to: "",
    };
  }
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
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
  render() {
    return (
      <div>
        {" "}
        <h2 id="jobs-title">Job Experience</h2>
        <div id="jobs-div">{this.renderJobs()}</div>
        <div>{this.renderJobsForm()}</div>
      </div>
    );
  }
}

export default Jobs;
