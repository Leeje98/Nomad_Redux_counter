import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
// import ReactDOM from "react-dom/client";
// import { ReactDOM } from "react";
// import { BrowserRouter, HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <Provider store={store}>
//     <HashRouter>
//       <App />
//     </HashRouter>
//   </Provider>
// );

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);



// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <Provider store={store}>
//       <App />
//   </Provider>
// );