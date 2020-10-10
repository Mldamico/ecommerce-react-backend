import express from 'express';
import Product from '../models/productModel.js';
import asyncHandler from 'express-async-handler';
import {
  getProductById,
  getProducts,
} from '../controllers/productController.js';
const router = express.Router();

router.route('/').get(getProducts);

router.route('/:id').get(getProductById);
export default router;
