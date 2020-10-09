import React, { useState } from "react";

const Jobs = () => {
  const [jobs, setJobs] = useState([
    {
      title: "Widget Inspector",
      company: "123 Company",
      from: "2010",
      to: "2015",
    },
  ]);
  const [jobsform, setJobsform] = useState(false);
  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [mouseOverButton, setMouseOverButton] = useState(false);

  const renderJobs = () => {
    return jobs.map((i) => (
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

  const onSubmitJobs = (e) => {
    e.preventDefault();
    setJobs(
      jobs
        .map((i) => {
          return { title: i.title, company: i.company, from: i.from, to: i.to };
        })
        .concat({
          title: title,
          company: company,
          from: from,
          to: to,
        })
    );
    setJobsform(false);
    setTitle("");
    setCompany("");
    setFrom("");
    setTo("");
  };

  const renderJobsForm = () => {
    if (jobsform) {
      return (
        <form onSubmit={onSubmitJobs}>
          <label>Job title: </label>
          <input
            type="text"
            name="title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          ></input>
          <br />
          <label>Company: </label>
          <input
            type="text"
            name="company"
            value={company}
            onChange={(e) => {
              setCompany(e.target.value);
            }}
          ></input>
          <br />
          <label>Worked from: </label>
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
          id="jobs-add"
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
                setJobsform(true);
              }}
            >
              Add job
            </button>
          ) : null}
        </div>
      );
    }
  };

  return (
    <div>
      {" "}
      <h2 id="jobs-title">Job Experience</h2>
      <div id="jobs-div">{renderJobs()}</div>
      <div>{renderJobsForm()}</div>
    </div>
  );
};

export default Jobs;
