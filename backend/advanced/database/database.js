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
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "password",
  database: "postgres",
  synchronize: true,
  logging: true,
  entities: [Todo],
});

module.exports = { dataSource };
