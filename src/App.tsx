import React from "react";
import List from "./components/List";
import Info from "./components/Info";

import { BrowserRouter, Route } from "react-router-dom";

const App = () => (
  <BrowserRouter>
    <Route exact path="/" component={List}/>
    <Route path="/item/:id" component={Info} />
  </BrowserRouter>
);

export default App;
