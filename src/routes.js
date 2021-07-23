import React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projetcs";
import Contato from "./pages/contatc";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/projetos" exact component={Projects} />
        <Route path="/contato" exact component={Contato} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
