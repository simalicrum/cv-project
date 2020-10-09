import React, { useState } from "react";

const Education = () => {
  const [education, setEducation] = useState([]);
  const [educationForm, setEducationForm] = useState(false);
  const [accreditation, setAccreditation] = useState("");
  const [school, setSchool] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [mouseOverButton, setMouseOverButton] = useState(false);

  const renderEducation = () => {
    return education.map((i) => (
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

  const onSubmitEducation = (e) => {
    e.preventDefault();
    setEducation(
      education
        .map((i) => {
          return {
            accreditation: i.accreditation,
            school: i.school,
            from: i.from,
            to: i.to,
          };
        })
        .concat({
          accreditation: accreditation,
          school: school,
          from: from,
          to: to,
        })
    );
    setEducationForm(false);
    setAccreditation("");
    setSchool("");
    setFrom("");
    setTo("");
  };

  const renderEducationForm = () => {
    if (educationForm) {
      return (
        <form onSubmit={onSubmitEducation}>
          <label>Accreditation: </label>
          <input
            type="text"
            name="accreditation"
            value={accreditation}
            onChange={(e) => {
              setAccreditation(e.target.value);
            }}
          ></input>
          <br />
          <label>School: </label>
          <input
            type="text"
            name="school"
            value={school}
            onChange={(e) => {
              setSchool(e.target.value);
            }}
          ></input>
          <br />
          <label>Studied from: </label>
          <input
            type="text"
            name="from"
            value={from}
            onChange={(e) => {
              setFrom(e.target.value);
            }}
          ></input>
          <label> to </label>
          <input
            type="text"
            name="to"
            value={to}
            onChange={(e) => {
              setTo(e.target.value);
            }}
          ></input>
          <br />
          <button type="submit">Add</button>
        </form>
      );
    } else {
      return (
        <div
          id="education-add"
          onMouseEnter={() => {
            setMouseOverButton(true);
          }}
          onMouseLeave={() => {
            setMouseOverButton(false);
          }}
        >
          {mouseOverButton ? (
            <button
              onClick={() => {
                setEducationForm(true);
              }}
            >
              Add accreditation
            </button>
          ) : null}
        </div>
      );
    }
  };

  return (
    <div>
      {" "}
      <h2 id="education-title">Education</h2>
      <div id="education-div">{renderEducation()}</div>
      <div>{renderEducationForm()}</div>
    </div>
  );
};

export default Education;
