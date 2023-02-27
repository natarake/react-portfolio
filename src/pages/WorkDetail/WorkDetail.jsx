import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { client } from "../../client";
import { AppWrap } from "../../wrapper";
import "./WorkDetail.scss";

const WorkDetail = () => {
  const { id } = useParams();
  const [works, setWorks] = useState([]);
  const [filterWorks, setFilterWorks] = useState([]);
  console.log(filterWorks);

  // useEffect(() => {
  //   const query = `*[_id == "${id}"]`;

  //   client
  //     .fetch(query)
  //     .then((data) => {
  //       setWorks(data);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

  useEffect(() => {
    const query = '*[_type == "works"]';

    client
      .fetch(query)
      .then((data) => {
        setWorks(data);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    works.filter((work) => {
      if (work._id === id) {
        setFilterWorks(work);
      }
    });
  }, [works]);

  return (
    <>
      <div className="app__navbar-detail">
        <div className="app__navbar-logo-detail">
          <Link to="/">
            <p>GLadWebDev</p>
          </Link>
        </div>
        <div className="app__navbar-breadcrumbs">
          <Link to="/">
            <span>Home / </span>
          </Link>
          {works[0]?.title}
        </div>
      </div>

      <div className="app__header-detail">
        <h2 className="head-text__detail">
          <span>What went well?</span>
        </h2>
        <p className="p-text">{works[0]?.wentwell}</p>
      </div>

      <div className="app__header-detail">
        <h2 className="head-text__detail">
          <span>Challenges encountered?</span>
        </h2>
        <p className="p-text">{works[0]?.challenges}</p>
      </div>

      <div className="app__header-detail">
        <h2 className="head-text__detail">
          <span>Codebase differences?</span>
        </h2>
        <p className="p-text">{works[0]?.differences}</p>
      </div>

      <div className="app__header-detail">
        <h2 className="head-text__detail">
          <span>Future Improments?</span>
        </h2>
        <p className="p-text">{works[0]?.futureplans}</p>
      </div>
    </>
  );
};

export default AppWrap(WorkDetail);
