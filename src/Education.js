import React, { Component } from "react";

class Education extends Component {
  constructor() {
    super();
    this.state = {
      education: [],
      educationform: false,
      accreditation: "",
      school: "",
      isMouseInsideJobs: false,
      isMouseInsideEd: false,
      from: "",
      to: "",
    };
  }
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
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
        {" "}
        <h2 id="education-title">Education</h2>
        <div id="education-div">{this.renderEducation()}</div>
        <div>{this.renderEducationForm()}</div>
      </div>
    );
  }
}

export default Education;
