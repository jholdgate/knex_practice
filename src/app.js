const express = require('express');
const app = express();
const port = 8081;

const knex = require('knex')(require('../knexfile.js')["development"])

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Application up and running.')
})

app.listen(port, () => {
  console.log('Your Knex and Express application are running successfully');
})

app.get('/pets', (req, res) => {
  knex('pet')
    .select('*')
    .then(pets => {
      var petNames = pets.map(pet => pet.name)
      res.json(petNames);
    })
})

// app.get('/pets/food', (req, res) => {
//   knex('pet_food')
//     .select('*')
//     .then(foods => {
//       var foodNames = foods.map(food => food.name)
//       res.json(foodNames);
//     })
// })