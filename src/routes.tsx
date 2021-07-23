import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { Product } from './pages/Products';
import { Users } from './pages/Users';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
            <Route path="/" exact component={Product} />
            <Route path="/users" exact component={Users} />
      </Switch>
    </BrowserRouter>
  );
}