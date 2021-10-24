import React from "react";
import "./App.scss";
import store from "./redux/store";
import { Provider } from "react-redux";
import Header from "./components/header/header";
import Main from "./components/main/Main";

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Main />
      <div className="app"></div>
    </Provider>
  );
}

export default App;

// git branch -D branch-name
// git checkout -b branchName
