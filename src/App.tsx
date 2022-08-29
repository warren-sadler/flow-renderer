import React from "react";

import "./App.css";
import { useFlow } from "./shared/flow";
import { REGISTRATION_FLOW } from "./constants/flows/registration";

function App() {
  const { Component, pageProps } = useFlow(REGISTRATION_FLOW);
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default App;
