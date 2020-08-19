//Migration to add the column "deleted_at" into users
//Can use for diasable user, soft delete
exports.up = function(knex) {
  return knex.schema.alterTable('users', table => {
    //Add the column deleted_at into users
    table.timestamp('deleted_at')
  })
};

exports.down = function(knex) {
    //Remove the column deleted_at users
    return knex.schema.alterTable('users', table => {
      table.dropColumn('deleted_at')
    })
  };
