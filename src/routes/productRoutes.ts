import { Router } from 'express';
import { addProduct, searchProduct, getPaginatedProducts, filterProducts } from '../controller/productController';

const router = Router();

router.post('/products', addProduct);
router.get('/products/search', searchProduct);
router.get('/products', getPaginatedProducts);
router.get('/products/filter', filterProducts);

export default router;
