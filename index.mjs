import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import methodOverride from "method-override";
import { connectBD } from "./db/conn.mjs";
import { getGrades, createGrade } from "./controllers/grades.mjs";
import { getPlants, createPlant } from "./controllers/plants.mjs";
import { getUsers, createUser } from "./controllers/users.mjs";

dotenv.config();

const app = express;

app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use("/styles", express.static("styles"));

connectBD();

app.get("/users", getUsers);
app.get("/plants", getPlants);
app.get("/grades", getGrades);

const PORT = process.env.PORT || 5050;

app.listen(PORT, () => {
  console.log("Server is running on port ${PORT}");
});
