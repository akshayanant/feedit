import React from "react";
import "./App.css";
import Container from "./components/container";
import { Provider } from "react-redux";
import { store } from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div>
        <Container />
      </div>
    </Provider>
  );
}

export default App;
