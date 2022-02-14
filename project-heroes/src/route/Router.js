import React from "react";
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import { DetailsPage } from "../pages/DetailsPage/DetailsPage";
import { HomePage } from "../pages/HomePage/HomePage";

const Router = () => {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path={'/'} component={HomePage} />
          <Route exact path={'/detalhe/:name'} component={DetailsPage} />
        </Switch>
      </BrowserRouter>
    );
  }

  export default Router;