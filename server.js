require('dotenv').config({ path: 'variables.env' });

    const express = require('express');
    const bodyParser = require('body-parser');
    const cors = require('cors');
    const processMessage = require('./process-message');

    const app = express();

    app.use(cors());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    

    app.get('/', function (req, res) {
      res.send(JSON.stringify({ Hello: 'World'}));
     });

    app.post('/chat', (req, res) => {
      const { message } = req.body;
      processMessage(message);
    });

    app.set('port', process.env.PORT || 3000);
    const server = app.listen(app.get('port'), () => {
      console.log(`Express running → PORT ${server.address().port}`);
    })