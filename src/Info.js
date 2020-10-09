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

  const renderEntry = (
    formName,
    name,
    stateEntry,
    stateFormEntry,
    onSubmitForm
  ) => {
    if (stateFormEntry) {
      return (
        <form onSubmit={onSubmitForm} id={formName}>
          <input
            type="text"
            name={name}
            value={stateEntry}
            onChange={formName}
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
          setNameform(true);
        }}
      >
        {renderEntry(
          (e) => {
            setName(e.target.value);
          },
          "name",
          name,
          nameform,
          (e) => {
            e.preventDefault();
            setNameform(false);
          }
        )}
      </h1>
      <b
        id="address-div"
        onClick={() => {
          setAddressform(true);
        }}
      >
        {renderEntry(
          (e) => {
            setAddress(e.target.value);
          },
          "address",
          address,
          addressform,
          (e) => {
            e.preventDefault();
            setAddressform(false);
          }
        )}
      </b>
      <br />
      <b
        id="cityprovince-div"
        onClick={() => {
          setCityprovinceform(true);
        }}
      >
        {renderEntry(
          (e) => {
            setCityprovince(e.target.value);
          },
          "cityprovince",
          cityprovince,
          cityprovinceform,
          (e) => {
            e.preventDefault();
            setCityprovinceform(false);
          }
        )}
      </b>
      <br />
      <b
        id="phone-div"
        onClick={() => {
          setPhoneform(true);
        }}
      >
        {renderEntry(
          (e) => {
            setPhone(e.target.value);
          },
          "phone",
          phone,
          phoneform,
          (e) => {
            e.preventDefault();
            setPhoneform(false);
          }
        )}
      </b>
      <br />
      <b
        id="email-div"
        onClick={() => {
          setEmailform(true);
        }}
      >
        {renderEntry(
          (e) => {
            setEmail(e.target.value);
          },
          "email",
          email,
          emailform,
          (e) => {
            e.preventDefault();
            setEmailform(false);
          }
        )}
      </b>
    </div>
  );
};

export default Info;
