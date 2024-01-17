import './App.css';
import SearchBar from './SearchBar';
import React, { useState } from 'react';

export const Context = React.createContext();

function App() {

  // const [newUser, setNewUser] = useState({
  //   username: "",
  //   password: "",
  // })

  const [data, setData] =  useState(null)

  console.log(data)

  return (
    <Context.Provider value={[data, setData]}>
      <div className="App">
        <SearchBar />
      </div>
    </Context.Provider>
  );
}

export default App;
