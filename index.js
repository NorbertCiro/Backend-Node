const express=require('express');
const cors = require('cors');
const routerApi = require('./src/api/routes');
const { logErrors, errorHandler, boomErrorHandler } = require('./src/api/middlewares/error.handler');

const app=express();
const port=3500;

app.use(express.json());
const whitelist = ['http://localhost:8080', 'https://myapp.co'];
const options = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin)) {
      callback(null, true);
    }else {
      callback(new Error('No allowed'));
    }
  }
}
app.use(cors());

app.get('/', (req, res) =>{
  res.send('Server en express');
});

routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);


app.listen(port, () =>{
  console.log('Aplicación escuchando en el puerto: '+port);
});

