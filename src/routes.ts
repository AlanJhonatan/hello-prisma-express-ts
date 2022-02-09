import { Router } from 'express';
import { CreateCategoryController } from './controllers/CreateCategoryController';
import { CreateProductCategory } from './controllers/CreateProductCategoryController';
import { CreateProductController } from './controllers/CreateProductController';
import { CreateProductWithExistCategory } from './controllers/CreateProductWithExistCategory';

const router = Router();

const createProduct = new CreateProductController();
const createCategory = new CreateCategoryController();
const createproductCategory = new CreateProductCategory();
const createProductWithExistCategory = new CreateProductWithExistCategory();

router.post('/product', createProduct.handle);
router.post('/category', createCategory.handle);
router.post('/productCategory', createproductCategory.handle);
router.post('/productWithCategory', createProductWithExistCategory.handle);

export { router };
