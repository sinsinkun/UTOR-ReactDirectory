// import React, { useState, useEffect } from 'react';
import './style.css';

function SearchForm(props) {

  function newSearch(e) {
    e.preventDefault();
    console.log("new search,", document.querySelector("#resultsNum").value);
    props.setSearchNum(document.querySelector("#resultsNum").value);
  }

  function flickToggle(e) {
    console.log(e.target.checked);
    // update filter
    switch (e.target.id) {
      case "sortByName": props.setSortName(e.target.checked); break;
      case "sortByCity": props.setSortCity(e.target.checked); break;
      case "showMale": props.showMale(e.target.checked); break;
      case "showFemale": props.showFemale(e.target.checked); break;
      default: console.log("unexpected error occurred while flicking toggles");
    }
    // toggle off if on
    if (e.target.checked) e.target.checked = false;
  }

  return(
    <form onSubmit={e => newSearch(e)} className="search-form">
      {/* Search bar for number of results */}
      <label for="resultsNum" class="form-label">Number of results</label>
      <div className="input-group mb-3">
        <input type="number" class="form-control" id="resultsNum" placeholder="Enter a number" />
        <button type="submit" className="btn btn-primary">Search</button>
      </div>
      {/* Sort by checkboxes */}
      <div className="row">
        <span className="mb-2 col-auto">Sort By</span>
        <div className="form-check col-auto mb-3">
          <input className="form-check-input" type="checkbox" id="sortByName" onClick={e => flickToggle(e)}/>
          <label className="form-check-label" for="sortByName">Last Name</label>
        </div>
        <div className="form-check col-auto mb-3">
          <input className="form-check-input" type="checkbox" id="sortByCity" onClick={e => flickToggle(e)}/>
          <label className="form-check-label" for="sortByName">City name</label>
        </div>
      </div>
      {/* Filter by checkboxes */}
      <div className="row">
        <span className="mb-2 col-auto">Display </span>
        <div className="form-check col-auto mb-3">
          <input className="form-check-input" type="checkbox" id="showMale" defaultChecked={true} onClick={e => flickToggle(e)}/>
          <label className="form-check-label" for="sortByName">Male</label>
        </div>
        <div className="form-check col-auto mb-3">
          <input className="form-check-input" type="checkbox" id="showFemale" defaultChecked={true} onClick={e => flickToggle(e)}/>
          <label className="form-check-label" for="sortByName">Female</label>
        </div>
      </div>
    </form>
  )
}

export default SearchForm;