import React, { useState } from 'react'
import eye from './assets/eye.png';
import './App.css'

function App() {
  const name = "KEERTHY S";
  const regno = 212221040082;
  const [isVisibile, setVisibile] = useState(false)
  const update = () => {
    if(isVisibile)
    {
      setVisibile(false);
      document.querySelector('.show-details').innerHTML = 'Show Details';
    }
    else
    {
      setVisibile(true);
      document.querySelector('.show-details').innerHTML = 'Hide Details';
    }
  }
  return (
    <React.Fragment>
      <div className='main-div'>
        <img src={eye} alt="eye" width={80} height={80}/>
        <h2>Name: {name}</h2>
        <p>Registration No: {regno}</p>
        <button onClick={() => update()} className='show-details'>Show Details</button>
        {isVisibile ? <p>Department : CSE</p> : <p></p>}
        {isVisibile ? <p>Year : 4th Year</p> : <p></p>}
      </div>
    </React.Fragment>
  )
}

export default App