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

const User = sequelize.define(
  "user",
  {
    username: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
  },
  { timestamps: false }
);

const Post = sequelize.define(
  "post",
  {
    message: {
      type: DataTypes.STRING,
    },
  },
  { timestamps: false }
);

User.hasMany(Post);
Post.belongsTo(User);

// ============insert data into User and Post table=========

// sequelize
//   .sync({ alter: true })
//   .then(() => {
//     User.bulkCreate([
//       { username: "Pardeep", password: "12345" },
//       { username: "Sandeep", password: "abcdef" },
//       { username: "Deepak", password: "000000" },
//     ]);

//     Post.bulkCreate([
//       { message: "Hi i am pardeep" },
//       { message: "Hi i am Sandeep" },
//       { message: "Hi i am Deepak" },
//       { message: "Hi this is awesome " },
//       { message: "Hi this is awesome " },
//       { message: "Hi this is awesome " },
//     ]);
//   })
//   .catch((err) => console.log(err));

// add foreign key to post table

// let user, posts;
// sequelize
//   .sync({ alter: true })
//   .then(() => {
//     return User.findOne({ where: { username: "Pardeep" } });
//   })
//   .then((data) => {
//     user = data;
//     return Post.findAll();
//   })
//   .then((data) => {
//     posts = data;
//     return user.addPosts(posts);
//   })
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// ===========count the number of posts=====
// let user, posts;
// sequelize
//   .sync({ alter: true })
//   .then(() => {
//     return User.findOne({ where: { username: "Pardeep" } });
//   })
//   .then((data) => {
//     user = data;
//     return user.countPosts();
//   })
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// remove the userid of first occurance in post table=====
// let user, posts;
// sequelize
//   .sync({ alter: true })
//   .then(() => {
//     return User.findOne({ where: { username: "Pardeep" } });
//   })
//   .then((data) => {
//     user = data;
//     return Post.findOne();
//   })
//   .then((data) => {
//     posts = data;
//     return user.removePosts(posts);
//   })
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// ================delete has many relation=======

// User.hasMany(Post, { onDelete: "CASCADE" });
// Post.belongsTo(User, { onDelete: "CASCADE" });
// let user, posts;
// sequelize
//   .sync({ alter: true })
//   .then(() => {
//     return User.destroy({ where: { username: "Pardeep" } });
//   })
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// set userid for the post ===================

// User.hasMany(Post, { onDelete: "CASCADE" });
// Post.belongsTo(User, { onDelete: "CASCADE" });
// let user, posts;
// sequelize
//   .sync({ alter: true })
//   .then(() => {
//     return User.findOne();
//   })
//   .then((data) => {
//     user = data;
//     return Post.findOne();
//   })
//   .then((data) => {
//     posts = data;
//     posts.setUser(user);
//   })
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));
