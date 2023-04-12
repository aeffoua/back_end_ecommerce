const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/',async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  console.log('tag')
  let tags = await Tag.findAll(); 
  return res.json(tags).status(200)
});

router.get('/:id',async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  console.log('tag')
  let tag= await Tag.findByPk(req.params.id); 
  return res.json(tag).status(200)
});

router.post('/',async (req, res) => {
  // create a new tag
  try{
    const tag = Tag.build(req.body);
    await tag.save()
    res.status(200).json(tag);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id',async (req, res) => {
  // update a tag's name by its `id` value
  try{
    const tag= await Tag.findByPk(req.params.id);
    console.log(tag)
    if (! tag.id) {
      res.status(404).json({message: 'no tag with this id'})
      return;
    }
    tag.tag_name= req.body.tag_name
    await tag.save()
    res.status(200).json(tag);  
  }catch (err) {
    res.status(500).json(err);
    console.log(err.message)
  }
});

router.delete('/:id',async (req, res) => {
  // delete on tag by its `id` value
  try{
    const isDeleted= await Tag.destroy({
      where:{
        id: req.params.id,
      },
    });
    if (isDeleted!=1) {
      res.status(404).json({message:'no tag with this id!'})
      return;
    }
    res.status(200).json({message:'tag successfully deleted!'})
  }catch(err){
    res.status(500).json(err);
  }
});

module.exports = router;
