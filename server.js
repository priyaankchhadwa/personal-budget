const express = require("express");
const app = express();
const port = 3000;

const budget = {
  myBudget: [
    {
      title: "Eat Out",
      budget: 50,
    },
    {
      title: "Groceries",
      budget: 80,
    },
    {
      title: "Movies",
      budget: 20,
    },
    {
      title: "Games",
      budget: 60,
    },
    {
      title: "Internet",
      budget: 30,
    },
    {
      title: "Gas",
      budget: 25,
    },
    {
      title: "Rent",
      budget: 150,
    },
    {
      title: "Drinks",
      budget: 15,
    },
  ],
};

app.use("/", express.static("public"));

app.get("/hello", (req, res) => {
  res.send("Hello World!");
});

app.get("/budget", (req, res) => {
  res.json(budget);
});

app.listen(port, () => {
  console.log(`example app listening at port - ${port}`);
});
