import express from "express";
import { data } from "../data.js";

const route = express();
route.use(express.json());

let users = [...data];

route.get("/get", (req, res) => {
  res.json(users);
});

route.post("/add", (req, res) => {
  const { id, name } = req.body;

  const newUsers = [...users, { id, name }];
  users = newUsers;
  res.json(users);
});

route.delete("/:id", (req, res) => {
  const id = Number(req.param.id);

  const newUsers = users.filter((user) => user.id !== id);
  users = newUsers;
  res.json(users);
});

export default route;
