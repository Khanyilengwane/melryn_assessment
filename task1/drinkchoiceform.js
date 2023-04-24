import React, {
    useState
} from 'react';
import {
    Form,
    Button
} from 'react-bootstrap';
import axios from 'axios';

const DrinkForm = () => {
    const [formState, setFormState] = useState({
        age: '',
        gender: '',
        income: '',
        mood: '',
        temperature: '',
    });

    const [decision, setDecision] = useState('');

    const handleInputChange = (event) => {
        setFormState({
            ...formState,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const response = await axios.post('https://tom-api.example.com/predict', {
            model_name: 'Drink choice',
            input_data: [Object.values(formState).map((value) => Number(value))],
        });
        setDecision(response.data.prediction);
    };

    return ( <
        Form onSubmit = {
            handleSubmit
        } >
        <
        Form.Group controlId = "age" >
        <
        Form.Label > Age < /Form.Label> <
        Form.Control type = "number"
        name = "age"
        value = {
            formState.age
        }
        onChange = {
            handleInputChange
        }
        /> < /
        Form.Group >

        <
        Form.Group controlId = "gender" >
        <
        Form.Label > Gender < /Form.Label> <
        Form.Control as = "select"
        name = "gender"
        value = {
            formState.gender
        }
        onChange = {
            handleInputChange
        } >
        <
        option value = "" > Select < /option> <
        option value = "0" > Male < /option> <
        option value = "1" > Female < /option> < /
        Form.Control > <
        /Form.Group>

        <
        Form.Group controlId = "income" >
        <
        Form.Label > Income < /Form.Label> <
        Form.Control as = "select"
        name = "income"
        value = {
            formState.income
        }
        onChange = {
            handleInputChange
        } >
        <
        option value = "" > Select < /option> <
        option value = "0" > $0 - $25K < /option> <
        option value = "1" > $25K - $50K < /option> <
        option value = "2" > $50K - $75K < /option> <
        option value = "3" > $75K + < /option> < /
        Form.Control > <
        /Form.Group>

        <
        Form.Group controlId = "mood" >
        <
        Form.Label > Mood < /Form.Label> <
        Form.Control as = "select"
        name = "mood"
        value = {
            formState.mood
        }
        onChange = {
            handleInputChange
        } >
        <
        option value = "" > Select < /option> <
        option value = "0" > Happy < /option> <
        option value = "1" > Sad < /option> <
        option value = "2" > Angry < /option> <
        option value = "3" > Stressed < /option> <
        option value = "4" > Neutral < /option> < /
        Form.Control > <
        /Form.Group>

        <
        Form.Group controlId = "temperature" >
        <
        Form.Label > Temperature < /Form.Label> <
        Form.Control type = "number"
        name = "temperature"
        value = {
            formState.temperature
        }
        onChange = {
            handleInputChange
        }
        /> < /
        Form.Group >

        <
        Button variant = "primary"
        type = "submit" >
        Submit <
        /Button> < /
        Form >
    )
};
