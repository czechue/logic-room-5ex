import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { configure } from "mobx";
import { container } from "./ioc";
import { Provider } from "./Core/WithPresenter";

configure({
  enforceActions: "never",
  computedRequiresReaction: false,
  reactionRequiresObservable: false,
  observableRequiresReaction: false,
  disableErrorBoundaries: false,
});

ReactDOM.render(
  <React.StrictMode>
    <Provider container={container}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
