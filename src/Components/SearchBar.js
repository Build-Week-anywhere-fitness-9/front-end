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
// $(document).ready(function () {
//   $(".dropdown").click(function () {
//     $(".dropdown-list ul").toggleClass("active");
//   });
// });

function SearchBar(props) {
  const { handleClick } = props;
  const [query, setQuery] = useState("");
  return (
    <div className="searchBar">
      <div className="search-input">
        <div className="dropdown">
          <div className="default-option">
            {" "}
            <label>
              {" "}
              <select className="test">
                <option value="1">name</option>
                <option value="1">type</option>
                <option value="1">cost</option>
                <option value="1">date</option>
                <option value="1">time</option>
                <option value="1">location</option>
                <option value="1">maxSize</option>
                <option value="1">duration</option>
                <option value="1">intensity</option>
              </select>
            </label>
          </div>
          <div className="dropdown-list">
            {/* <ul>
              <li>name</li>
              <li>Type</li>
              <li>cost</li>
              <li>date</li>
              <li>time</li>
              <li>location</li>
              <li>maxSize</li>
              <li>duration</li>
              <li>intensity</li>
            </ul> */}
          </div>
        </div>
        <div className="search">
          <input
            type="text"
            placeholder="Search"
            onChange={(event) => setQuery(event.target.value)}
          />
        </div>

        <button className="btn" type="submit">
          <i className="fas-search">search</i>
        </button>
      </div>
      {classes
        .filter((i) => {
          if (query === "") {
            return "";
          } else if (i.name.toLowerCase().includes(query.toLowerCase())) {
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
