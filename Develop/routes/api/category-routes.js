const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/',async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  console.log('category')
  let categories = await Category.findAll({include:Product}); 
  return res.json(categories).status(200)
});

router.get('/:id',async (req, res) => {
  console.log('category')
  let category = await Category.findByPk(req.params.id,{include:Product}); 
  return res.json(category).status(200)
});

router.post('/',async (req, res) => {
  // create a new category
  try {
    const category =  Category.build(req.body);
    await category.save()
    res.status(200).json(category);
  } catch (err) {
    res.status(400).json(err);
  }

});

router.put('/:id',async (req, res) => {
  // update a category by its `id` value
  try {
    const category = await Category.findByPk(req.params.id);
    console.log(category)
    if (!category.id) {
      res.status(404).json({ message: 'No category with this id!' });
      return;
    }
    category.category_name=req.body.category_name
    await category.save()
    res.status(200).json(category);
  } catch (err) {
    res.status(500).json(err);
    console.log(err.message)
  }
});

router.delete('/:id',async (req, res) => {
  // delete a category by its `id` value
  try {
    const isDeleted= await Category.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (isDeleted!=1) {
      res.status(404).json({ message: 'No category with this id!' });
      return;
    }
    res.status(200).json({ message: 'successfully deleted!' });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
