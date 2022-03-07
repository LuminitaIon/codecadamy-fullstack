let menu = {
  _courses: {
    appertizers: [],
    mains: [],
    desserts: []
  },
  get courses() {
    return {
      appertizers: this.appertizers,
      mains: this.mains,
      desserts: this.desserts
    }
  },

  addDishToCourse(courseName, dishName, dishPrice) {
    let dish = {
      name: courseName,
      price: dishPrice
    }
    this._courses[courseName].push(dish)
  },

  getRandomDishFromCourse(courseName) {
    let dishes = this._courses[courseName];
    const randomIndex = Math.floor(Math.random() * dishes.length);
    return dishes[randomIndex];
  },

  generateRandomMeal() {
    let appertizer = this.getRandomDishFromCourse('appertizers')
    let main = this.getRandomDishFromCourse('mains')
    let dessert = this.getRandomDishFromCourse('desserts')
    let totalPrice = appertizer.price + main.price + dessert.price
    return `Your meal is ${appertizer.name}, ${main.name}, ${dessert.price} and the price is ${totalPrice}`
  }
}

menu.addDishToCourse('appertizers', 'Caesar Salad', 4.25);
menu.addDishToCourse('mains', 'Chicken Soup', 3.2);
menu.addDishToCourse('desserts', 'Lava Cake', 5.3)

let meal = menu.generateRandomMeal();
console.log(meal)