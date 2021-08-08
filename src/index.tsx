import "reflect-metadata";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { configure } from "mobx";
import { container } from "./ioc";
import { Provider } from "./Core/WithPresenter";
import { CurrentPageComponent } from "./CurrentPageComponent";

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
      <CurrentPageComponent />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
