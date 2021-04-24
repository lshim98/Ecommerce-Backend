const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../public');

router.get('/', async (req, res) => {
  try {
    const tagData = await Tag.findAll({
      include: [{ all: true }],
    });
    
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  };

});

router.get('/:id', async (req, res) => {
  try {
    const tagData = await Tag.findByPk(req.params.id, {
      include: [{ all: true }],
    });

    if (!tagData) {
      res.status(404).json({ message: 'No tag found with ID' });
      return;
    };

    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  };

});

router.post('/', async (req, res) => {
  try {
    const tagData = await Tag.create(req.body);
    
    res.status(200).json(tagData);
  } catch (err) {
    res.status(400).json(err);
  };

});

router.put('/:id', async (req, res) => {
  try {
    const tagData = await Tag.update(req.body, { 
      where: { id: req.params.id }});

    if (!tagData) {
      res.status(404).json({ message: 'No tag found with ID' });
      return;
    };

    res.status(200).json(tagData);
  } catch (err) {
    res.status(400).json(err);
  };

});

router.delete('/:id', async (req, res) => {
  try {
    const tagData = await Tag.destroy({
      include: [{ all: true }],
      where: {
        id: req.params.id,
      },
    });

    if(!tagData) {
      res.status(404).json({ message: 'No tag found with ID' });
      return;
    };

    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  };

});

module.exports = router;