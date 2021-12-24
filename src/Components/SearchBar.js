import React from "react";
import { useState } from "react";

const classes = [
  {
    type: "yoga",
    maxSize: 10,
    date: 12212021,
    time: 2200,
    duration: 60,
    intensity: 1,
    name: "Yoga with Yani",
    cost: 25,
    location: "San Diego",
    participants: [],
    owner: "Fred",
  },
  {
    type: "karate",
    maxSize: 10,
    date: 12212021,
    time: 2200,
    duration: 60,
    intensity: 1,
    name: "Hiya Karate",
    cost: 10,
    location: "Chicago",
    participants: ["Carlos", "Darla", "William"],
    owner: "George",
  },
  {
    type: "Pilates",
    maxSize: 10,
    date: 12222021,
    time: 2000,
    duration: 30,
    intensity: 3,
    name: "Platform Pilates",
    cost: 15,
    location: "New York",
    participants: ["Max", "Roxanne", "Cobey"],
    owner: "Max",
  },
];

const values = {
  value: "",
};
// $(document).ready(function () {
//   $(".dropdown").click(function () {
//     $(".dropdown-list ul").toggleClass("active");
//   });
// });

function SearchBar(props) {
  const { handleClick } = props;
  const [query, setQuery] = useState("");
  const [formValues, setFormValues] = useState(values);

  const handleSelect = (e) => {
    setFormValues(e.target.value);
    console.log(e);
  };

  const onChange = (evt) => {
    setFormValues(evt.target.value);
    setQuery(evt.target.value);
  };
  const formSubmit = () => {
    {
      classes
        .filter((i) => {
          if (query === "") {
            return "";
          } else if (i.location.toLowerCase().includes(query.toLowerCase())) {
            return i;
          }
        })
        .map((i, idx) => (
          <div className="otherClass" key={idx}>
            <h3>{i.name}</h3>
            <ul className="genericClassList">
              <li>Type: {i.type}</li>
              <li>Cost: ${i.cost}</li>
              <li>Date: {i.date}</li>
              <li>Time: {i.time}</li>
              <li>Location: {i.location}</li>
              <li>Max particpants: {i.maxSize}</li>
              <li>Duration: {i.duration} minutes</li>
              <li>Intensity Level: {i.intensity} out of 5</li>
            </ul>
            <button onClick={handleClick} name={i.name} className="reservation">
              Attend Class
            </button>
          </div>
        ));
    }
  };
  return (
    <div className="searchBar" onSubmit={formSubmit}>
      <div className="search-input">
        <div className="dropdown">
          <div className="default-option">
            {" "}
            <label>
              {" "}
              <select
                className="test"
                onSelect={handleSelect}
                value={formValues.value}
              >
                <option value="">--select--</option>
                <option value="name">name</option>
                <option value="type">type</option>
                <option value="cost">cost</option>
                <option value="date">date</option>
                <option value="time">time</option>
                <option value="location">location</option>
                <option value="maxSize">maxSize</option>
                <option value="duration">duration</option>
                <option value="intensity">intensity</option>
              </select>
            </label>
          </div>
          <div className="dropdown-list"></div>
        </div>
        <div className="search">
          <input type="text" placeholder="Search" onChange={onChange} />
        </div>

        <button className="btn" type="submit" onClick={handleClick}>
          {/* <i className="fas-search">search</i> */}search
        </button>
      </div>
      {classes
        .filter((i) => {
          if (query === "") {
            return "";
          } else if (i.location.toLowerCase().includes(query.toLowerCase())) {
            return i;
          }
        })
        .map((i, idx) => (
          <div className="otherClass" key={idx}>
            <h3>{i.name}</h3>
            <ul className="genericClassList">
              <li>Type: {i.type}</li>
              <li>Cost: ${i.cost}</li>
              <li>Date: {i.date}</li>
              <li>Time: {i.time}</li>
              <li>Location: {i.location}</li>
              <li>Max particpants: {i.maxSize}</li>
              <li>Duration: {i.duration} minutes</li>
              <li>Intensity Level: {i.intensity} out of 5</li>
            </ul>
            <button onClick={handleClick} name={i.name} className="reservation">
              Attend Class
            </button>
          </div>
        ))}
    </div>
  );
}

export default SearchBar;
