// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category,{
   foreignKey: 'category_id'
})
// Categories have many Products
Category.hasMany(Product,{
  foreignKey:'category_id',
  onDelete:'CASCADE'
})
// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag,{
  through: 'ProductTag'
})
Product.addHook('afterDestroy',(post,option)=>{
  return ProductTag.destroy({where:{product_id:post.id}})
  
})

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product,{
  through: 'ProductTag'
})
Tag.addHook('afterDestroy',(post,option)=>{
  return ProductTag.destroy({where:{tag_id:post.id}})
 
})
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
