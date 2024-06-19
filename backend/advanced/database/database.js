require("dotenv").config();

const typeorm = require("typeorm");

const Todo = new typeorm.EntitySchema({
  name: "Todo",
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: true,
    },
    description: {
      type: "varchar",
    },
    completed: {
      type: "boolean",
      default: false,
    },
  },
});

const dataSource = new typeorm.DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: "postgres",
  synchronize: true,
  logging: false,
  entities: [Todo],
});

module.exports = { dataSource };
