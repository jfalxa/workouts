# Gymondo assessment app

Go to the project directory in your terminal then run `make -j`.

The front-end will be accessible at http://localhost:3000, the backend at http://localhost:3001.

## Requirements

- I can see a global header with an image logo
- I can see a top bar with two filters: Start date and Category
- I can see a list of workouts
- I see maximum of 20 workouts per page
- I can see other workouts using the pagination component
- I can click on one workout and be redirected to the Workout Detail Page
- I can see a Workout Detail Page
- On the Workout Detail Page I can see the fields: name, description, start date and category
- On the Workout Detail Page I can come back to the Workout List Page from the Workout Detail Page
- Category allowed values: `['c1', 'c2', 'c3', 'c4', 'c5', 'c6', 'c7']`
- The startDate filter will show all months from today till the next 12 months
- The category filter should be multiple-choice
- The pagination bar indicates the total amount of workouts, page number, and pages in between.
- Hide pagination when there are less than 20 results.

## Front-end stack

- `create-react-app` for the build config and base code
- `styled-components` for styling directly in JS
- `react-router-dom` for managing routing state
- `date-fns` for functional date operations

## Back-end stack

- `express` for the http server framework
- `nodemon` for server run state management
- `lowdb` for data management
