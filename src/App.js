import React from "react";
import "./App.scss";
import store from "./redux/store";
import { Provider } from "react-redux";
import Header from "./components/header/header";

function App() {
  return (
    <Provider store={store}>
      <Header />
      <div className="app"></div>
    </Provider>
  );
}

export default App;

// git branch -D branch-name
// git checkout -b branchName
