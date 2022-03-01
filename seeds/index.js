const seedRent = require('./rent-seeds');
// const seedPosts = require('./post-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('--------------');
  await seedRent();
  console.log('--------------');
  process.exit(0);
};

seedAll();
