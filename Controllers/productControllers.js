import { v2 as cloudinary } from 'cloudinary';
import productModel from '../Models/productModel.js';

// Function for adding a product
const addProduct = async (req, res) => {
  try {
    const { name, description, price, category, subCategory, sizes, bestseller } = req.body;

    // Safely retrieve image files from req.files for keys image1, image2, image3, image4
    const imageFiles = ['image1', 'image2', 'image3', 'image4']
      .map(key => req.files[key] && req.files[key][0])
      .filter(file => file !== undefined);

    // Upload images to Cloudinary and get URLs
    const imageUrl = await Promise.all(
      imageFiles.map(async (item) => {
        const result = await cloudinary.uploader.upload(item.path, { resource_type: 'image' });
        return result.secure_url;
      })
    );

    // Build product data; parse sizes if it's a string
    const productData = {
      name,
      description,
      category,
      price: Number(price),
      subCategory,
      bestseller: bestseller === "true",
      sizes: typeof sizes === 'string' ? JSON.parse(sizes) : sizes,
      image: imageUrl,
      date: Date.now(),
    };

    console.log('Product data:', productData);

    // Save the product
    const product = new productModel(productData);
    await product.save();

    // Log request body details and image URLs for debugging
    console.log({ name, description, price, category, subCategory, sizes, bestseller });
    console.log('Uploaded image URLs:', imageUrl);

    // Send a successful response
    res.json({ success: true, message: "Product added" });
  } catch (error) {
    console.error("Error adding product:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};

// Function for listing products
const listProducts = async (req, res) => {
  // Implementation here...
};

// Function for removing a product
const removeProduct = async (req, res) => {
  // Implementation here...
};

// Function for retrieving single product info
const singleProduct = async (req, res) => {
  // Implementation here...
};

export { listProducts, addProduct, removeProduct, singleProduct };
