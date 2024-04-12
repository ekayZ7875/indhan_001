/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('comedy-shows-2',(table)=>{
      table.increments('id').primary()
      table.string('title').notNullable()
      table.string('description')
      table.dateTime('start-time').notNullable()
      table.dateTime('end-time').notNullable()
      table.string('venue').notNullable()
      table.integer('price').notNullable()
  
    })
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = function(knex) {
    return knex.schema.dropTable('comedy-shows-2')
  };