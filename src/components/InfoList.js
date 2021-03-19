import React, { useState, useEffect } from 'react';

function PersonEntry(props) {

  const [displayedList, setDisplayedList] = useState([]);

  // apply filter on list
  useEffect(() => {
    let filteredList = props.data;
    // sort list by first name
    if (props.sortName) filteredList.sort((a,b) => {
      let [a1, b1] = [a.name.first.toLowerCase(), b.name.first.toLowerCase()];
      return a1.localeCompare(b1);
    })
    // sort list by city name
    if (props.sortCity) filteredList.sort((a,b) => {
      let [a1, b1]= [a.location.city.toLowerCase(), b.location.city.toLowerCase()];
      return a1.localeCompare(b1);
    })
    // hide entries that are male
    if (!props.showMale) filteredList = filteredList.filter(entry => entry.gender !== "male");
    // hide entries that are female
    if (!props.showFemale) filteredList = filteredList.filter(entry => entry.gender !== "female");
    // generate new displayed list on every change
    setDisplayedList([...filteredList]);
  }, [props]);

  return(
    <div className="row">
      {displayedList.map((person,idx) => {
        return (
          <div className="col-6 col-md-3 col-lg-2 card text-start" key={idx}>
            <div className="card-body">
              <h5 className="card-title">{person.name.first} {person.name.last}</h5>
              <p className="card-text">{person.gender}</p>
              <p className="card-text">{person.location.city}, {person.location.country}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default PersonEntry;