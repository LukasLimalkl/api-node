const cors = require('cors');
const app = require('./app');
const sequelize = require('./sequelize');

const PORT = 3333;

app.use(cors());

app.listen(PORT, () => {
  console.log('running on http://localhost:3333/');
  console.log('Server running on port:', PORT);
});

sequelize
  .sync()
  .then(() => {
    console.log('Database connected');
  })
  .catch((error) => {
    console.error('Error connecting to database:', error);
  });
