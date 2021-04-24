const router = require('express').Router();
const categoryRoutes = require('./category_routes');
const productRoutes = require('./product_routes');
const tagRoutes = require('./tag_routes');

router.use('/categories', categoryroutes);
router.use('/products', productroutes);
router.use('/tags', tagroutes);

module.exports = router;
