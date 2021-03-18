import React, { useState, useEffect } from 'react';

function PersonEntry(props) {

  const [displayedList, setDisplayedList] = useState([]);

  // re-render list on reload
  useEffect(() => {
    setDisplayedList(props.data);
  }, [props.data])

  // apply filter on list
  useEffect(() => {
    console.log("Applying a filter:", props);
    // do things
  }, [props])

  return(
    <div className="row">
      {displayedList.map(person => {
        return (
          <div className="col-6 col-md-3 col-lg-2 card text-start">
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