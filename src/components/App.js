import React, { useState, useEffect } from "react";
import BotsPage from "./BotsPage";

function App() {
  const [isLoading, setIsLoading]= useState(true);
  useEffect(()=>{
    setTimeout(()=>{
      setIsLoading(false);
    },2500);
  }, []);
  if(isLoading) {
    return(
      <div className="ui active inverted dimmer">
        <div className="ui text loader">Welcome to bot-Botlr...</div>
      </div>
    );
    }
  return (
    <div className="App">
      <BotsPage />
    </div>
  );
}

export default App;