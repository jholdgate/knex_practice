/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('food_type').del()
  await knex('food_type').insert([
    {id: 1, name: 'kibbles', description: 'dry, dull, small bits of food'},
    {id: 2, name: 'bits', description: 'dry, dull, small bits of food'},
    {id: 3, name: 'fish flakes', description: 'dry, dull, small bits of food'},
    {id: 4, name: 'purina', description: 'dry, dull, small bits of food'}
  ]);
};
