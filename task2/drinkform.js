import DrinkChoiceModel from '../models/DrinkChoice';
const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await axios.post('https://tom-api.example.com/predict', {
        model_name: 'Drink choice',
        input_data: [Object.values(formState).map((value) => Number(value))],
    });
    setDecision(response.data.prediction);

    // Save input data and decision to database
    const drinkChoice = new DrinkChoiceModel({
        age: formState.age,
        gender: formState.gender,
        income: formState.income,
        mood: formState.mood,
        temperature: formState.temperature,
        decision: response.data.prediction,
    });
    await drinkChoice.save();
};
