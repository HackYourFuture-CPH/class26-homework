const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const apiRouter = express.Router();
app.use('/api', apiRouter);
const contactsAPIRouter = express.Router();
apiRouter.use('/contacts', contactsAPIRouter);



app.listen(port, () => {
  console.log(`Backend api available at ${process.env.API_PATH}`);
});

// app = 
// require('./app');

// const port = parseInt(process.env.PORT, 10) || process.env.API_PORT;

// app.listen(port, () => {
//   console.log(`Backend api available at ${process.env.API_PATH}`);
// });
