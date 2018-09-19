let Drink = require('./schemas.js')

module.exports = {
  save: (object) => {
    new Drink ({
      image: object.strDrinkThumb,
      instructions: object.strInstructions,
      name: object.strDrink,
      glass: object.strGlass
    }).save()
  },
  delete: (name) => {
    console.log(name)
    return Drink.deleteOne({name: name}, function(err) {
      console.log(err)
    })
  },
  retrieve: () => {
    return Drink.find({})
                .exec()
  }
}