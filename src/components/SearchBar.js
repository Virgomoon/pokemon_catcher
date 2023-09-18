import React, {useState} from 'react';
import './App.css';


function SearchBar() {

  const [newUser, setNewUser] = useState({
    username: "",
    password: "",
  })


  return (
    <div className='searchbar'>
      <form className='input'>
        <label className='label'>Choose a Pokemon</label>
        <input type="text" className='field'  />
        <button>SUBMIT</button>
      </form>
    </div>
  )
}

export default SearchBar