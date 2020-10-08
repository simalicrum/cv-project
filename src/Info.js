import React, { Component } from "react";

class Info extends Component {
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
    };
  }
  onSubmitForm = (e) => {
    e.preventDefault();
    this.setState({ [e.target.id]: false });
  };
  handleClick = (form) => {
    this.setState({ [form]: true });
  };
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
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
      </div>
    );
  }
}

export default Info;
