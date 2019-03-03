const express = require('express');
const validateItem = require('./validateItem');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();
const app = express();
const mongoose = require('mongoose');
const Item = require('./models/item');
const path = require('path');
const port = process.env.PORT || 8080;

app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));

app.get('/ping', function (req, res) {
 return res.send('pong');
});

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

mongoose.connect('mongodb://localhost/items', { useNewUrlParser: true });
const db = mongoose.connection;

db.once('open', () => {
  console.log('Connected to MongoDB');
});

db.on('error', err => {
  console.log(err);
});

app.use(bodyParser.json());
app.use(pino);

app.get('/api/items', (req, res) => {
  Item.find()
    .sort({ $natural: -1 })
    .exec((err, items) => {
      if (err) {
        res.status(404).send(err);
      } else {
        res.send(items);
      }
    });
});

app.get('/api/items/:id', (req, res) => {
  Item.find({ _id: req.params.id }, (err, item) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.send(item);
    }
  });
});

app.post('/api/items', (req, res) => {
  const { error } = validateItem(req.body);

  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  const item = new Item();
  item.value = req.body.value;
  item.isActive = req.body.isActive;
  item.date = req.body.date;

  item.save(err => {
    if (err) {
      return console.log(err);
    }
    res.send(item);
  });
});

app.put('/api/items/:id', (req, res) => {
  const { error } = validateItem(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  const item = {
    _id: req.body._id,
    value: req.body.value,
    isActive: req.body.isActive,
    date: req.body.date
  };

  Item.updateOne({ _id: req.params.id }, item, err => {
    if (err) return res.status(404).send(err);
    return res.send(item);
  });
});

app.delete('/api/items/:id', (req, res) => {
  Item.deleteOne({ _id: req.params.id }, err => {
    if (err) return res.status(404).send(err);
    return res.status(204).send();
  });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
