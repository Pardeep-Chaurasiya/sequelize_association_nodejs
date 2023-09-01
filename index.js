const express = require("express");
const dotenv = require("dotenv").config();
const model = require("./models/oneToOneAssociation");
// const model = require("./models/oneToManyAssociation");
// const model = require("./models/manyTomanyAssociation");
const app = express();

app.use(express.json());

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`server started at port ${PORT}`));
