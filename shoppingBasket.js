class ShoppingBasket {
  constructor() {
    this.basket = []
  }

  addItem(candy) {
    this.basket.push(candy);
  }

  getTotalPrice() {
    let sum = 0;
      this.basket.forEach((candy) => {
        sum += candy.getPrice()
      });
      return sum
    }
}

module.exports = ShoppingBasket;

/*
const Candy = require('./candy');
const candy = new Candy('Mars', 4.99);
const ShoppingBasket = require('./shoppingBasket');
const basket = new ShoppingBasket();
basket.getTotalPrice();
basket.addItem(candy);
basket.getTotalPrice();
basket.addItem(new Candy('Skittle', 3.99));
basket.addItem(new Candy('Skittle', 3.99));
basket.getTotalPrice();
*/
