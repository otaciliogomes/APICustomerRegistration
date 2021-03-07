import express from 'express';
import bodyParser from 'body-parser';

const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

require('./controllers/authController')(app);

app.listen('3333', () => console.log('Server is run'));

export default app;