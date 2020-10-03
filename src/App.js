import React, { createContext } from 'react';
import CompA from './CompA';

const FirstName = createContext();
const LastName = createContext();

const App = () => {
  return (
    <>
      <FirstName.Provider value={"aniket"}>
        <LastName.Provider value={"tiwari"}>
          <CompA/>
        </LastName.Provider>
      </FirstName.Provider>
    </>
  )
}

export default App;
export { FirstName, LastName };
