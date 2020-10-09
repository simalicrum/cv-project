import React, { useState } from "react";

const Info = () => {
  const [name, setName] = useState("Enter name");
  const [nameform, setNameform] = useState(false);
  const [address, setAddress] = useState("Enter street address");
  const [addressform, setAddressform] = useState(false);
  const [cityprovince, setCityprovince] = useState("Enter city and province");
  const [cityprovinceform, setCityprovinceform] = useState(false);
  const [phone, setPhone] = useState("Enter phone number");
  const [phoneform, setPhoneform] = useState(false);
  const [email, setEmail] = useState("Enter email address");
  const [emailform, setEmailform] = useState(false);
  const onSubmitForm = (e) => {
    e.preventDefault();
    this.setState({ [e.target.id]: false });
  };
  const handleClick = (form) => {
    this.setState({ [form]: true });
  };
  const handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  const renderEntry = (formName, name, stateEntry, stateFormEntry) => {
    if (stateFormEntry) {
      return (
        <form onSubmit={onSubmitForm} id={formName}>
          <input
            type="text"
            name={name}
            value={stateEntry}
            onChange={handleChange}
          ></input>
          <button type="submit">Submit</button>
        </form>
      );
    } else {
      return stateEntry;
    }
  };
  return (
    <div>
      <h1
        id="name-div"
        onClick={() => {
          handleClick("nameform");
        }}
      >
        {renderEntry("nameform", "name", name, nameform)}
      </h1>
      <b
        id="address-div"
        onClick={() => {
          handleClick("addressform");
        }}
      >
        {renderEntry("addressform", "address", address, addressform)}
      </b>
      <br />
      <b
        id="cityprovince-div"
        onClick={() => {
          handleClick("cityprovinceform");
        }}
      >
        {renderEntry(
          "cityprovinceform",
          "cityprovince",
          cityprovince,
          cityprovinceform
        )}
      </b>
      <br />
      <b
        id="phone-div"
        onClick={() => {
          handleClick("phoneform");
        }}
      >
        {renderEntry("phoneform", "phone", phone, phoneform)}
      </b>
      <br />
      <b
        id="email-div"
        onClick={() => {
          handleClick("emailform");
        }}
      >
        {renderEntry("emailform", "email", email, emailform)}
      </b>
    </div>
  );
};

export default Info;
