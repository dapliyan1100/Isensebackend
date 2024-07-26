import express from 'express';

import readingsRoute from '../routes/readings.route.js';
import usersRoute from '../routes/users.route.js';
import sensorsRoute from '../routes/sensors.route.js';
import cors from 'cors';

const app = express();

// Middleware for parsing request body
app.use(express.json());

// Middleware for handling CORS POLICY
// Option 1: Allow All Origins with Default of cors(*)
app.use(cors());
// Option 2: Allow Custom Origins
// app.use(
//   cors({
//     origin: 'http://localhost:5555',
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     allowedHeaders: ['Content-Type'],
//   })
// );

// app.use('/readings', booksRoute);
app.use('/api/readings', readingsRoute);
app.use('/api/users', usersRoute);
app.use('/api/sensors', sensorsRoute);

app.listen(5555, () => {
  console.log(`App is listening to port: 5555`);
});