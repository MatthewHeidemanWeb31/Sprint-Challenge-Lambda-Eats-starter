import React, { useState, useEffect } from 'react';
import axios from 'axios'
import styled from 'styled-components';
import  * as yup  from 'yup';
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
    const formSchema = yup.object().shape({
        name: yup
        .string()
        .required()
        // size:

    })
    const [ formState, setFormState ] = useState({
        name: '',
        size: '',
        specialInstructions: '',
        pepperoni: false, 
        canadianBacon: false, 
        sausage: false, 
        bellPeppers: false,
      })
      const [ isValid, setIsValid ] = useState(false)
    //   const valid=async() => await formSchema.isValid(formState);
      useEffect(() => {
        formSchema.isValid(formState).then(valid => {
          setIsValid(!valid);
        });
      }, [formState]);
      
      

    const handleChange = (event) => {
        setFormState({ ...formState, [event.target.name]: event.target.value})
    }

    const formSubmit = e => {
        e.preventDefault();
        console.log("submitted");
        axios
        .post("https://reqres.in/api/users", formState)
        .then(res => {
          console.log(res.data); // Data was created successfully and logs to console
        })
        .catch(err => {
          console.log(err); // There was an error creating the data and logs to console
        });
      };

    return (
        <>
            <Form schema = {formSchema} onSubmit= {formSubmit}>
                <label htmlFor = 'name'>
                    Name:{` `}
                    <input type = 'text' id = 'name' name = 'name' value = {formState.name} onChange = {handleChange}/>
                </label>
                <label htmlFor = 'size'>
                    Select Size:{` `}
                    <select id="size" name="size" value = {formState.size} onChange = {handleChange}>
                        <option value="small">Small</option>
                        <option value="medium">Medium</option>
                        <option value="large">Large</option>
                        <option value="x-large">X-Large</option>
                    </select>
                </label>
                <label for="pepperoni">
                    <input type="checkbox" id="pepperoni" name="pepperoni" value = {formState.pepperoni} onChange = {handleChange} />
                    Pepperoni
                </label>
                <label for="canadian-bacon">
                    <input type="checkbox" id="canadian-bacon" name="canadian-bacon" value = {formState.canadianBacon} onChange = {handleChange} />
                    Canadian Bacon
                </label>
                <label for="sausage">
                    <input type="checkbox" id="sausage" name="sausage" value = {formState.sausage} onChange = {handleChange} />
                    Sausage
                </label>
                <label for="bell-peppers">
                    <input type="checkbox" id="bell-peppers" name="bell-peppers" value = {formState.bellPeppers} onChange = {handleChange} />
                    Bell Peppers
                </label>
                Special Instructions:
                <label htmlFor = 'specialInstructions'>
                
                    <textarea type = 'text' name="specialInstructions" id = 'specialInstructions' rows="10" cols="30" value = {formState.specialInstructions} onChange = {handleChange}>
                    </textarea>
                </label>
                <button disabled={isValid}>
                    Submit
                </button>
            </Form>
        </>
    )
}
export default PizzaForm;