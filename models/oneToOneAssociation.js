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

const Country = sequelize.define(
  "country",
  {
    countryName: {
      type: DataTypes.STRING,
      unique: true,
    },
  },
  {
    timestamps: false,
  }
);

const Capital = sequelize.define(
  "capital",
  {
    capitalName: {
      type: DataTypes.STRING,
      unique: true,
    },
  },
  {
    timestamps: false,
  }
);

Country.hasOne(Capital);
Capital.belongsTo(Country);

// insert data into both tables

// sequelize
//   .sync({ alter: true })
//   .then(() => {
//     Country.bulkCreate([
//       {
//         countryName: "India",
//       },
//       {
//         countryName: "USA",
//       },
//       {
//         countryName: "Nepal",
//       },
//       {
//         countryName: "China",
//       },
//       {
//         countryName: "Sri Lanka",
//       },
//     ]);

//     Capital.bulkCreate([
//       {
//         capitalName: "Delhi",
//       },
//       {
//         capitalName: "Washington, D.C.",
//       },
//       {
//         capitalName: "Kathmandu",
//       },
//       {
//         capitalName: "Beijing",
//       },
//       {
//         capitalName: "Colombo",
//       },
//     ]);
//   })

//   .catch((err) => console.log(err));

// ---------- set capital of country -----------

// let country, capital;
// sequelize
//   .sync({ alter: true })
//   .then(() => {
//     return Capital.findOne({ where: { capitalName: "Delhi" } });
//   })
//   .then((data) => {
//     capital = data;
//     return Country.findOne({ where: { countryName: "India" } });
//   })
//   .then((data) => {
//     country = data;
//     country.setCapital(capital);
//   })
//   .catch((err) => console.log(err));

// get capital of country ======================

// let country, capital;
// sequelize
//   .sync({ alter: true })
//   .then(() => {
//     return Country.findOne({ where: { countryName: "India" } });
//   })
//   .then((data) => {
//     country = data;
//     return country.getCapital();
//   })
//   .then((data) => {
//     console.log(data.toJSON());
//   })
//   .catch((err) => console.log(err));

// ============create new country and capital=========

// let country, capital;
// sequelize
//   .sync({ alter: true })
//   .then(() => {
//     return Country.create({ countryName: "Pakistan" });
//   })
//   .then((data) => {
//     country = data;
//     return country.createCapital({
//       capitalName: "Islamabad",
//     });
//   })
//   .then((data) => {
//     console.log(data.toJSON());
//   })
//   .catch((err) => console.log(err));

// ==============capital belongsTo country table=======

// let country, capital;

// sequelize
//   .sync({ alter: true })
//   .then(() => {
//     return Country.findOne({ countryName: "Pakistan" });
//   })
//   .then((data) => {
//     country = data;
//     return Capital.findOne({
//       where: { capitalName: "Islamabad" },
//     });
//   })
//   .then((data) => {
//     capital = data;
//     return capital.setCountry(country);
//   })
//   .then((data) => console.log(data.toJSON()))
//   .catch((err) => console.log(err));

// ==============delete one to one relation=======

// Country.hasOne(Capital, { onDelete: "CASCADE" });
// Capital.belongsTo(Country, { onDelete: "CASCADE" });

// sequelize
//   .sync({ alter: true })
//   .then(() => {
//     return Country.destroy({ where: { countryName: "Pakistan" } });
//   })
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// ==============Update one to one relation=======

// Country.hasOne(Capital, { onUpdate: "CASCADE" });
// Capital.belongsTo(Country, { onDelete: "CASCADE" });
// let country, capital;

// sequelize
//   .sync({ alter: true })
//   .then(() => {
//     return Country.findOne({ where: { countryName: "China" } });
//   })
//   .then((data) => {
//     country = data;
//     return Capital.findOne({ where: { capitalName: "Beijing" } });
//   })
//   .then((data) => {
//     capital = data;
//     return country.setCapital(capital);
//   })
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));
