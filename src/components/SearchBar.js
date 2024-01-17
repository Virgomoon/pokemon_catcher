import React, {useContext, useState} from 'react';
import './App.css';

import { Context } from './App';

function SearchBar() {

  const url = process.env.REACT_APP_POKE_URL
  // console.log(url)

  // const [newUser, setNewUser] = useContext(Context)
  const [pokemon, setPokemon] = useState("")
  const [data, setData] =  useContext(Context)
  // console.log(pokemon)

  function handleChange(e) {
    setPokemon(e.target.value)
  }

  function handleSubmit(e){
    e.preventDefault();

      (async function getData(name){
        const response = await fetch(`${url}${name}`)
        const dataPromise = await response.json()
        setData(dataPromise)
      })(pokemon)

      setPokemon("")
    }
    // console.log(data)

  return (
    <div className='searchbar'>
      <form className='input' onSubmit={handleSubmit}>
        <label className='label'>Choose a Pokemon</label>
        <input type="text" 
        className='field' 
        value={pokemon}
        onChange={handleChange} />
        <button>SUBMIT</button>
      </form>
    </div>
  )
}

export default SearchBar