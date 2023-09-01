const Sequelize = require("sequelize");
const { DataTypes, Op } = Sequelize;

const sequelize = new Sequelize(
  process.env.DB,
  process.env.USER,
  process.env.PASSWORD,
  {
    host: process.env.host,
    dialect: process.env.dialect,
  }
);

const Customer = sequelize.define(
  "customer",
  {
    customerName: {
      type: DataTypes.STRING,
    },
  },
  { timestamps: false }
);

const Product = sequelize.define(
  "product",
  {
    productName: {
      type: DataTypes.STRING,
    },
  },
  { timestamps: false }
);

const CustomerProduct = sequelize.define(
  "customerproduct",
  {
    customerproductId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
  },
  { timestamps: false }
);

Customer.belongsToMany(Product, { through: CustomerProduct });
Product.belongsToMany(Customer, { through: CustomerProduct });

// insert data into Customer and Product Table

// sequelize
//   .sync({ alter: true })
//   .then(() => {
//     Customer.bulkCreate([
//       { customerName: "Pardeep" },
//       { customerName: "Kuldeep" },
//       { customerName: "Sandeep" },
//       { customerName: "Ankit" },
//     ]);
//     Product.bulkCreate([
//       { productName: "Laptop" },
//       { productName: "Mobile" },
//       { productName: "Bag" },
//       { productName: "Bottle" },
//     ]);
//   })
//   .catch((err) => console.log(err));

// add product to the current user ============
// let customer, product;
// sequelize
//   .sync({ alter: true })
//   .then(() => {
//     return Customer.findOne({ where: { customerName: "Pardeep" } });
//   })
//   .then((data) => {
//     customer = data;
//     return Product.findAll();
//   })
//   .then((data) => {
//     product = data;
//     customer.addProducts(product);
//   })
//   .catch((err) => console.log(err));

// add product to all the customer =================
// let customer, product;
// sequelize
//   .sync({ alter: true })
//   .then(() => {
//     return Product.findOne({ where: { productName: "Laptop" } });
//   })
//   .then((data) => {
//     product = data;
//     return Customer.findAll();
//   })
//   .then((data) => {
//     customer = data;
//     product.addCustomers(customer);
//   })
//   .catch((err) => console.log(err));

// delete all the product of a customer without using onDelete CASCADE

sequelize
  .sync({ alter: true })
  .then(() => {
    return Customer.destroy({ where: { customerName: "Pardeep" } });
  })
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
