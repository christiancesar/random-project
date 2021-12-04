const faker = require('faker');
const { convertArrayToCSV } = require('convert-array-to-csv');
const fs = require('fs');


(()=>{
  const budgets = []
  const header = ['budgetId', 'custumer', 'seller', 'totalPrice', 'createAt', 'billed', 'street', 'city', 
  'country', 'state', 'zipCode', 'lat', 'lon'];
  
  for (let index = 0; index < 1000; index++) {
    const budget = {
      budgetId: faker.datatype.number(),
      custumer: `${faker.name.firstName()} ${faker.name.lastName()}`,
      seller: `${faker.name.firstName()} ${faker.name.lastName()}`,
      // productName: faker.commerce.productName(),
      // quantity: Math.floor(Math.random() * (5 - 1 + 1)) + 1,
      totalPrice: faker.commerce.price(),
      createAt: faker.datatype.datetime(),
      billed: faker.datatype.boolean(),
      street: faker.address.streetName(),
      city: faker.address.cityName(),
      country: faker.address.country(),
      state: faker.address.state(),
      zipCode: faker.address.zipCode(),
      lat: faker.address.latitude(),
      lon: faker.address.longitude()
    }

    budgets.push(budget)
  }

  const csv = convertArrayToCSV(budgets, { header, separator: ',' });

  fs.writeFileSync('./budget.csv', csv)

})()