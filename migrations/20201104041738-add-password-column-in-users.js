'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return [ 
            queryInterface.addColumn(
              'users',
              'password',
              {
               type: Sequelize.STRING,
               after: "email"
              }
             ),
            queryInterface.addColumn(
             'users',
             'gender',
             {
              type: Sequelize.INTEGER,
              after: "age"
             }
            )
        ];
  },

  down: async (queryInterface, Sequelize) => {
    return [
      queryInterface.removeColumn('users', 'password'),
      queryInterface.removeColumn('users', 'gender'),
    ];
  }
};
