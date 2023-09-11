import express from 'express';
import { admin, protect } from '../middleware/auth.middleware.js'
import { checkObjectId } from '../middleware/checkObjectId.js'
import { createProduct, createProductReview, deleteProduct, getProductById, getProducts, getTopProducts, updateProduct } from '../controllers/productController.js';

const router = express.Router()

router.route('/')
    .get(getProducts)
    .post(
        protect,
        admin,
        createProduct
    )

router.route('/:id/reviews').post(protect, checkObjectId, createProductReview)
router.get('/top', getTopProducts)


router
    .route('/:id')
    .get(checkObjectId, getProductById)
    .delete(
        protect,
        admin,
        checkObjectId,
        deleteProduct
    )
    .put(
        protect,
        admin,
        checkObjectId,
        updateProduct
    )

export default router