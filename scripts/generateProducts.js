// import fs from 'fs';
// import { faker } from '@faker-js/faker';

// const generateProducts = (num) => {
//   const products = [];

//   for (let i = 0; i < num; i++) {
//     products.push({
//       name: faker.commerce.productName(),
//       description: faker.commerce.productDescription(),
//       price: parseFloat(faker.commerce.price()),
//       image: faker.image.urlPicsumPhotos(),
//       category: faker.commerce.department(),
//       countInStock: faker.number.int({ min: 0, max: 100 }),


//     });
//   }

//   return products;
// };

// const products = generateProducts(50);
// fs.writeFileSync('dummyProducts.json', JSON.stringify(products, null, 2));
// console.log('Dummy products generated!');
