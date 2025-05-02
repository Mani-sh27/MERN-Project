// // components/ProductList.jsx
// import React, { useEffect, useState } from 'react';

// const ProductList = () => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     // Fetch products data
//     const fetchProducts = async () => {
//       try {
//         const response = await fetch('/dummyProducts.json');
//         const data = await response.json();
//         setProducts(data);
//       } catch (error) {
//         console.error('Error fetching products:', error);
//       }
//     };

//     fetchProducts();
//   }, []);

//   return (
//     <div className="grid grid-cols-3 gap-4">
//       {products.map((product) => (
//         <div key={product.id} className="border p-4 rounded-lg shadow">
//           <img src={product.image} alt={product.name} className="w-full h-60 object-cover mb-4" />
//           <h2 className="text-xl font-bold">{product.name}</h2>
//           <p className="text-sm text-gray-600">{product.description}</p>
//           <p className="text-lg font-semibold mt-2">${product.price}</p>
//           <p className="text-yellow-500">⭐ {product.rating}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ProductList;