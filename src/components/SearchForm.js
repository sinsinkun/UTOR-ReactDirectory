// import React, { useState, useEffect } from 'react';
import './style.css';

function SearchForm(props) {

  function newSearch(e) {
    e.preventDefault();
    console.log("new search,", document.querySelector("#resultsNum").value);
    props.setSearchNum(document.querySelector("#resultsNum").value);
  }

  function flickToggle(e) {
    // update filter
    switch (e.target.id) {
      case "sortByName": props.setSortName(e.target.checked); break;
      case "sortByCity": props.setSortCity(e.target.checked); break;
      case "showMale": props.setShowMale(e.target.checked); break;
      case "showFemale": props.setShowFemale(e.target.checked); break;
      default: console.log("unexpected error occurred while flicking toggles");
    }
  }

  return(
    <form onSubmit={e => newSearch(e)} className="search-form">
      {/* Search bar for number of results */}
      <label htmlFor="resultsNum" className="form-label">Number of results</label>
      <div className="input-group mb-3">
        <input type="number" className="form-control" id="resultsNum" placeholder="Enter a number" />
        <button type="submit" className="btn btn-primary">Search</button>
      </div>
      {/* Sort by checkboxes */}
      <div className="row">
        <span className="mb-2 col-auto">Sort By</span>
        <div className="form-check col-auto mb-3">
          <input className="form-check-input" type="checkbox" id="sortByName" onClick={e => flickToggle(e)}/>
          <label className="form-check-label" htmlFor="sortByName">First name</label>
        </div>
        <div className="form-check col-auto mb-3">
          <input className="form-check-input" type="checkbox" id="sortByCity" onClick={e => flickToggle(e)}/>
          <label className="form-check-label" htmlFor="sortByName">City name</label>
        </div>
      </div>
      {/* Filter by checkboxes */}
      <div className="row">
        <span className="mb-2 col-auto">Display </span>
        <div className="form-check col-auto mb-3">
          <input className="form-check-input" type="checkbox" id="showMale" defaultChecked={true} onClick={e => flickToggle(e)}/>
          <label className="form-check-label" htmlFor="sortByName">Male</label>
        </div>
        <div className="form-check col-auto mb-3">
          <input className="form-check-input" type="checkbox" id="showFemale" defaultChecked={true} onClick={e => flickToggle(e)}/>
          <label className="form-check-label" htmlFor="sortByName">Female</label>
        </div>
      </div>
    </form>
  )
}

export default SearchForm;