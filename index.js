const express = require("express");
const app = express();

function sayMyInfo(req, res, next) {
  if (req.method === "GET") {
    const { name, lastname, age } = req.query;
    outConsole(name, lastname, age);
  } else {
    const { name, lastname, age } = req.body;
    outConsole(name, lastname, age);
  }

  next();
}

function outConsole(name, lastname, age) {
  console.log(
    `2Меня зовут ${name ? name : ""} ${
      lastname ? lastname : ""
    }, мне ${age} лет`
  );
}

// x-www-form-urlencoded
app.use(express.urlencoded());

app.get("/", sayMyInfo, (req, res) => {
  res.end("GET");
});

// json
app.use(express.urlencoded());

app.post("/", sayMyInfo, (req, res) => {
  res.end("POST");
});

app.listen(8080);
