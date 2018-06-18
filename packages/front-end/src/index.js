import React from "react";
import ReactDOM from "react-dom";
import { Provider as ReduxProvider } from "react-redux";
import createHistory from "history/createBrowserHistory";
import { ConnectedRouter } from "react-router-redux";

// Redux Store
import createStore from "./store";

import "./index.css";
import App from "./App";

// Create a history
const history = createHistory();
const store = createStore(history);

ReactDOM.render(
  <ReduxProvider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </ReduxProvider>,
  document.getElementById("root")
);
