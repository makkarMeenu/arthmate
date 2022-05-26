// server/index.js

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();
const path = require("path");
const bodyParser = require("body-parser");

// Have Node serve the files for our built React app
app.use(
  express.static(path.resolve(__dirname, "../arthmate-dashboard-react/build"))
);
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/createUser", async (req, res) => {
  const {
    email,
    name,
    username,
    phone,
    website,
    suite,
    street,
    city,
    zipcode,
  } = req.body;

  let address = {
    suite,
    street,
    city,
    zipcode,
  };
  address = JSON.stringify(address);

  const user = await prisma.user.create({
    data: {
      email,
      name,
      username,
      address,
      phone,
      website,
    },
  });
});

app.post("/createPost", async (req, res) => {
  console.log(req.body);
  const { userId, title, body } = req.body;
  const intUserId = parseInt(userId);
  console.log(prisma.post, "dbdhh");
  try {
    const postData = await prisma.post.create({
      data: {
        userId: intUserId,
        title: title,
        body: body,
      },
    });
    res.json({ message: "Hello from server disisisui!" });
  } catch (e) {
    console.log(e);
    res.json({ message: e });
  }
});

app.get("/users", (req, res) => {
  res.json({ message: "Hello from server disisisui!" });
});

app.get("/users/:id", (req, res) => {
  const found = users.some((user) => user.id === parseInt(req.params.id));
  if (found) {
    res.json(users.filter((user) => user.id === parseInt(req.params.id)));
  } else {
    res.sendStatus(400);
  }
});

app.get("/posts", (req, res) => {
  res.json({ message: "Hello from djhd disisisui!" });
});

app.get("/posts/:id", (req, res) => {
  res.json({ message: "Hello from djhd disisisui!" });
});

app.get("/posts/:id/comments", (req, res) => {
  res.json({ message: "Hello from djhd disisisui!" });
});

app.get("/albums", (req, res) => {
  res.json({ message: "Hello from djhd disisisui!" });
});

app.get("/albums/:id", (req, res) => {
  res.json({ message: "Hello from djhd disisisui!" });
});

// All other GET requests not handled before will return our React app
app.get("*", (req, res) => {
  res.sendFile(
    path.resolve(__dirname, "../arthmate-dashboard-react/build", "index.html")
  );
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
