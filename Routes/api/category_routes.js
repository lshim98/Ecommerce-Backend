const router = require('express').Router();
const { Category, Product } = require('../../public');

// async

router.get('/', async (req, res) => {
  try {
    const categoryData = await Category.findAll({
      include: [{ model: Product }],
    });
    
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  };
});

router.get('/:id', async (req, res) => {
  try {
    const categoryData = await Category.findByPk(req.params.id, {
      include: [{ model: Product }],
    });

    if (!categoryData) {
      res.status(404).json({ message: 'No category found with that ID' });
      return;
    };

    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  };

});

router.post('/', async (req, res) => {
  try {
    const categoryData = await Category.create(req.body); 
    
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(400).json(err);
  };

});

router.put('/:id', async (req, res) => {
  try {
    const categoryData = await Category.update(req.body, {
      where: {
        id: req.params.id
      }
    });

    if (!categoryData) {
      res.status(404).json({ message: 'No category found with that ID' });
      return;
    };

    res.status(200).json(categoryData);
  } catch (err) {
    res.status(400).json(err);
  };

});

router.delete('/:id', async (req, res) => {
  try {
  const categoryData = await Category.destroy({
    include: [{ model: Product }],
    where: {
      id: req.params.id,
    },
    });

    if (!categoryData) {
    res.status(404).json({ message: 'No category found with that ID' });
    return;
    };
    .then((data) => {
    res.status(200).json(data);
    })
  .catch((err) => {
    console.log(err);
    res.json(err);
    });
    res.status(200).json(categoryData);
    } catch (err) {
    res.status(500).json(err);
  };
  
  // find all without async
  
  router.get('/', (req, res) => {
  Category.findAll({
  attributes: ['id', 'category_name'],
  include: [
      {
        model: Product,
        attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
          }
        ]
      })
  .then(data => res.json(data))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
  });
});

module.exports = router;
