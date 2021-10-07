import React from "react";
import "./App.css";
import store from "./redux/store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <div className="app">Hello donald...</div>
    </Provider>
  );
}

export default App;
