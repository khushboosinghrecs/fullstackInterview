use("ecommerce");

db.products.updateMany(
  { category: "Electronics" },
  { $set: { price: 8899, stock: 1900 } },
);

// db.products.find();

db.products.updateOne({ name: "Wireless Mouse" }, { $push: { tags: "new" } });

db.products.find();
