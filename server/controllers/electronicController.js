const { Electonic } = require('../../db/models/electronicSchema');

const electronicCtrl = {
  get: (req, res) => {
    Electonic.find((err, data) => {
      if (err) {
        console.log('error getting electronics: ', err);
        res.send(404);
      }
      console.log('electronics data recieved');
      res.status(200).send(data);
    });
  },
  post: (req, res) => {
    const newElectronic = new Electonic(req.body);

    newElectronic.save((err, data) => {
      if (err) {
        console.log('error posting electronic: ', err);
        res.send(404);
      }
      console.log('electronic posted');
      res.status(201).send(newElectronic);
    });
  }
}

module.exports = {
  electronicCtrl: electronicCtrl
};
