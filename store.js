/* 
Knex.js is a SQL query builder for SQLITE3
designed to be flexible, portable and fun to use.
Document: http://knexjs.org/
*/

const knex = require('knex')(require('./knexfile'))

module.exports = {
  studentList () {
    console.log('retrieving students')
    return knex('students').select('*')
    
  }
}
const knex = require('knex')({
  client: 'mysql',
  connection: {
    port : 3306,
  }
});
