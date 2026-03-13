use("ecommerce");

db.products.deleteOne({ name: "Wireless Mouse" });

db.products.deleteMany({ status: "delevered" });
