import React, { useState, useEffect } from 'react';
import SearchForm from './SearchForm';
import InfoList from './InfoList';

function Homepage() {

  const [infoArr, setInfoArr] = useState([]);
  const [searchNum, setSearchNum] = useState("24");
  const [sortName, setSortName] = useState(false);
  const [sortCity, setSortCity] = useState(false);
  const [showMale, setShowMale] = useState(true);
  const [showFemale, setShowFemale] = useState(true);

  useEffect(() => {
    // update search number
    let fetchURL = "https://randomuser.me/api/?results="+searchNum+"&inc=name,gender,location,id,email";
    // fetch data
    (async () => {
      let data = await fetch(fetchURL).then(r => r.json());
      // update state
      setInfoArr(data.results);
    })();
  },[searchNum])

  return(
    <div className="my-2 mx-auto">
      <SearchForm setSearchNum={setSearchNum} setSortName={setSortName} setSortCity={setSortCity} 
        setShowMale={setShowMale} setShowFemale={setShowFemale} />
      <InfoList data={infoArr} sortName={sortName} sortCity={sortCity} 
        showMale={showMale} showFemale={showFemale} />
    </div>
  )
}

export default Homepage;