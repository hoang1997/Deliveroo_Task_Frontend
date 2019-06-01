import React from 'react';
import data from "./Data/restaurants.json";
import Banner from "./Components/Banner/Banner";
import Navigation from "./Components/Navigation/Navigation";
import Body from "./Components/Body/Body"


function App() {
  return (
    <div className="App">
      <Navigation/>
      <Banner data={data}/>
      <Body data={data}/>
    </div>
  );
}

export default App;
