import React, {useState} from 'react';
import styled from 'styled-components';
const Form = styled.form`
    width: 40%;
    display: flex;
    flex-direction: column;
    padding: 1%;
    margin: 5%;
    border-radius: 10px;
    border: 1px solid black;
`
function PizzaForm(){
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

    const handleChange = (event) => {
        setFormValues({ ...formValues, [event.target.name]: event.target.value})
    }
    const handleToppings = (event) => {
        setToppings({ ...toppings, [event.target.value]: true})
    }
    return (
        <>
            <Form>
                <label htmlFor = 'name'>
                    Name:{` `}
                    <input type = 'text' id = 'name' name = 'name' value = {formValues.name} onChange = {handleChange}/>
                </label>
                <label htmlFor = 'size'>
                    Select Size:{` `}
                    <select id="size" name="size" value = {formValues.size} onChange = {handleChange}>
                        <option value="small">Small</option>
                        <option value="medium">Medium</option>
                        <option value="large">Large</option>
                        <option value="x-large">X-Large</option>
                    </select>
                </label>
                <label for="pepperoni">
                    <input type="checkbox" id="pepperoni" name="pepperoni" value = {toppings.pepperoni} onChange = {handleToppings} />
                    Pepperoni
                </label>
                <label for="canadian-bacon">
                    <input type="checkbox" id="canadian-bacon" name="canadian-bacon" value = {toppings.canadianBacon} onChange = {handleToppings} />
                    Canadian Bacon
                </label>
                <label for="sausage">
                    <input type="checkbox" id="sausage" name="sausage" value = {toppings.sausage} onChange = {handleToppings} />
                    Sausage
                </label>
                <label for="bell-peppers">
                    <input type="checkbox" id="bell-peppers" name="bell-peppers" value = {toppings.bellPeppers} onChange = {handleToppings} />
                    Bell Peppers
                </label>
                Special Instructions:
                <label htmlFor = 'specialInstructions'>
                
                    <textarea type = 'text' name="specialInstructions" id = 'specialInstructions' rows="10" cols="30" value = {formValues.specialInstructions} onChange = {handleChange}>
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