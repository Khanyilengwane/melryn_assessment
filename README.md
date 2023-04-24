# melryn_assessment

# Drink Choice App

This is a web application built with ReactJS that pulls metadata from the TOM API for the "Drink choice" model and displays the model name and input variables in a form. It also includes functionality to query the model and display the decision on the screen.

## Getting Started

To run the app locally, you'll need to have Node.js and npm installed on your computer. Here are the steps:

1. Clone this repository to your local machine using `git clone`.
2. Install the required packages by running `npm install`.
3. Create a `.env` file in the root directory with the following contents:

4. Start the development server by running `npm start`.

## Additions

In addition to the base functionality, the following enhancements have been made:

- Added functionality to store data gathered from the TOM API using MongoDB and Mongoose.
- Enhanced security by using HTTPS to communicate with the TOM API and using environment variables to store sensitive information.
- Added batch functionality to the TOM API by allowing the user to submit an array of input data and display the batch results.


