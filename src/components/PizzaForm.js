import React from 'react';
import styled from 'styled-components';
const Form = styled.form`
    width: 60%;
    display: flex;
    flex-direction: column;
    padding: 1%;
    margin: 5%;
    border-radius: 10px;
    border: 1px solid black;
`
function PizzaForm(){
    return (
        <>
            <Form>
                <label htmlFor = 'name'>
                    Name:{` `}
                    <input type = 'text' id = 'name' name = 'name' />
                </label>
                <label htmlFor = 'size'>
                    Select Size:{` `}
                    <select id="size" name="size">
                        <option value="small">Small</option>
                        <option value="medium">Medium</option>
                        <option value="large" selected>Large</option>
                        <option value="x-large">X-Large</option>
                    </select>
                </label>
                <label for="pepperoni">
                    <input type="checkbox" id="pepperoni" name="pepperoni" />
                    Pepperoni
                </label>
                <label for="canadian-bacon">
                    <input type="checkbox" id="canadian-bacon" name="canadian-bacon" />
                    Canadian Bacon
                </label>
                <label for="sausage">
                    <input type="checkbox" id="sausage" name="sausage" />
                    Sausage
                </label>
                <label for="bell-peppers">
                    <input type="checkbox" id="bell-peppers" name="bell-peppers" />
                    Bell Peppers
                </label>
                Special Instructions:
                <label htmlFor = 'special-instructions'>
                    <textarea name="special-instruction" id = 'special-instructions' rows="10" cols="30">
                    </textarea>
                </label>
                <button>
                    Submit
                </button>
            </Form>
        </>
    )
}
export default PizzaForm;