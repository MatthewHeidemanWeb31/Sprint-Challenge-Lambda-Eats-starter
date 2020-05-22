import React, { useState } from "react";
import styled from 'styled-components';
import { Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage';
import PizzaForm from './components/PizzaForm';
import NavBar from './components/NavBar';

const Wrapper = styled.div`
  max-widt: 100%;
  display: flex;
  flex-direction column;
  align-items: center;
`
const App = () => {
  const [ formValues, setFormValues ] = useState({
    name: '',
    size: '',
    specialInstructions: '',
  })
  const [ toppings, setToppings ] =useState({
    pepperoni: false, 
    canadianBacon: false, 
    sausage: false, 
    bellPeppers: false,
  })
  return (
    <>
      <h1>Lambda Eats</h1>
      <p>You can remove this code and create your own header</p>
      <Wrapper>
        <NavBar />
        <Switch>
          <Route path = '/pizza'>
            <PizzaForm formValues = {formValues} toppings = {toppings} />
          </Route>
          <Route path = '/'>
            <HomePage />
          </Route>
        </Switch>
      </Wrapper>
    </>
  );
};
export default App;
