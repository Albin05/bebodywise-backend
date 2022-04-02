require("dotenv").config();
const express = require("express");
const cors = require("cors");

const skinController=require("./controllers/skin.controllers")
const hairController=require("./controllers/hair.controllers")
const pcosController=require("./controllers/pcos.controllers")
const femcareController=require("./controllers/femcare.controllers")
const weightController=require("./controllers/weight.controllers")


const userController = require("./controllers/user.controllers")
const {register, login} = require("./controllers/auth.controllers");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/users", userController);
app.use("/register", register)
app.use("/login", login)
app.use("/skin",skinController)
app.use("/hair",hairController)
app.use("/pcos",pcosController)
app.use("/femcare",femcareController)
app.use("/weight",weightController)


module.exports = app;

