const Coffee = require('../Model/coffeeModel'); // include local module.

// using middleware function to validate the user
function getCoffee(req, res, next) {
  const userName = req.params.userName;
  Coffee.findOne({ userName: userName }, (err, coffee) => {
    if (err) return next(err);
    res.json(coffee);
  });
}
// using middleware function to store the data into the databse.
function postCoffee(req, res, next) {
  const coffee = new Coffee({
    userName: req.body.userName,
    coffeeName: req.body.coffeeName
  });
  coffee.save((err) => {
    if (err) return next(err);
    res.json({ message: 'Preferred Coffee created!' });
  });
}

module.exports = { getCoffee, postCoffee };
