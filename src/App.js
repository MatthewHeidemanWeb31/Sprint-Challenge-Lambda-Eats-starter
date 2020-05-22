import React from "react";
import styled from 'styled-components';
import { Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage';
import PizzaForm from './components/PizzaForm';

const App = () => {
  return (
    <>
      <h1>Lambda Eats</h1>
      <p>You can remove this code and create your own header</p>
      <Switch>
        <Route path = '/pizza'>
          <PizzaForm />
        </Route>
        <Route path = '/'>
          <HomePage />
        </Route>
      </Switch>
    </>
  );
};
export default App;
