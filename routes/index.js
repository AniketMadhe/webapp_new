var express = require('express');
var router = express.Router();
const bcrypt = require('bcryptjs');
const userModel = require('./users');
const clientModel = require('./client');

// GET home page.
router.get("/", function(req, res) {
  res.render("index");
});

// GET books page.
router.get("/books", function(req, res) {
  res.render("books");
});

// GET blogs page.
router.get("/blogs", function(req, res) {
  res.render("blogs");
});

// GET signup page.
router.get("/signup", function(req, res) {
  res.render("signup");
});

// POST signup data.
router.post("/signup", async function(req, res) {
  const data = {
    name: req.body.uName,
    password: req.body.password
  };

  try {
    const existingUser = await userModel.findOne({ name: data.name });

    if (existingUser) {
      res.send("User already exists");
    } else {
      const saltedRounds = 10;
      const hashedPass = await bcrypt.hash(data.password, saltedRounds);
      data.password = hashedPass;

      const userData = await userModel.create(data); // Changed from insertMany to create
      console.log(userData);
      res.redirect('/login');
    }
  } catch (error) {
    console.error("Error during signup:", error);
    res.status(500).send("Internal Server Error");
  }
});

// GET login page.
router.get("/login", function(req, res) {
  res.render("login");
});

// POST login data.
router.post("/login", async function(req, res) {
  try {
    const check = await userModel.findOne({ name: req.body.uName });

    if (!check) {
      res.send("User not found!");
      res.redirect("/signup");
    } else {
      const isPassCorrect = await bcrypt.compare(req.body.password, check.password);

      if (isPassCorrect) {
        req.session.roles = req.body.uName;
        const naam = req.session.roles.toUpperCase();
        res.render("home", { naam: naam });
      } else {
        alert("password does not match");
        res.redirect("/login");
      }
    }
  } catch (error) {
    res.redirect("/login");
  }
});

// POST home data.
router.post("/home", function(req, res) {
  try {
    const userSession = req.session.roles.toUpperCase();
    req.session.bookSession = req.body.bName;
    req.session.authorSession = req.body.aName;
    req.session.bookSession2 = req.body.bName2;
    req.session.authorSession2 = req.body.aName2;
    req.session.bookSession3 = req.body.bName3;
    req.session.authorSession3 = req.body.aName3;
    req.session.bookSession4 = req.body.bName4;
    req.session.authorSession4 = req.body.aName4;

    const bookKanaam = req.session.bookSession;
    const authorKanaam = req.session.authorSession;
    const bookKanaam2 = req.session.bookSession2;
    const authorKanaam2 = req.session.authorSession2;
    const bookKanaam3 = req.session.bookSession3;
    const authorKanaam3 = req.session.authorSession3;
    const bookKanaam4 = req.session.bookSession4;
    const authorKanaam4 = req.session.authorSession4;

    if (bookKanaam) {
      res.render('cart', {
        bookKanaam: bookKanaam,
        authorKanaam: authorKanaam,
        userSession: userSession,
        bookKanaam2: bookKanaam2,
        authorKanaam2: authorKanaam2,
        bookKanaam3: bookKanaam3,
        authorKanaam3: authorKanaam3,
        bookKanaam4: bookKanaam4,
        authorKanaam4: authorKanaam4
      });
    } else {
      res.redirect('/home');
    }
  } catch (error) {
    console.error("Error handling home data:", error);
    res.redirect('/home');
  }
});

// GET home page after POST.
router.get("/home", function(req, res) {
  res.render("home");
});

// POST cart data.
router.post("/cart", async function(req, res) {
  const clientKanaam = req.body.nameU;
  const book1Kanaam = req.body.nameB1;
  const book2Kanaam = req.body.nameB2;
  const book3Kanaam = req.body.nameB3;
  const book4Kanaam = req.body.nameB4;

  const author1Kanaam = req.body.nameA1;
  const author2Kanaam = req.body.nameA2;
  const author3Kanaam = req.body.nameA3;
  const author4Kanaam = req.body.nameA4;

  const clientData = {
    name: clientKanaam,
    book1: book1Kanaam,
    author1: author1Kanaam,
    book2: book2Kanaam,
    author2: author2Kanaam,
    book3: book3Kanaam,
    author3: author3Kanaam,
    book4: book4Kanaam,
    author4: author4Kanaam
  };

  try {
    let existingClient = await clientModel.findOne({ name: clientKanaam });

    if (existingClient) {
      console.log(`Client ${clientKanaam} already exists. Updating their data.`);
      await clientModel.updateOne({ name: clientKanaam }, { $set: clientData });
    } else {
      console.log(`Creating new client record for ${clientKanaam}`);
      await clientModel.create(clientData); // Changed from insertMany to create
    }

    res.redirect(`/viewCart?clientKanaam=${encodeURIComponent(clientKanaam)}`);
  } catch (error) {
    console.error("Error handling client data:", error);
    res.status(500).send("Internal Server Error");
  }
});

// GET viewCart page.
router.get("/viewCart", async function(req, res) {
  const clientKanaam = req.query.clientKanaam;

  try {
    const clientData = await clientModel.findOne({ name: clientKanaam });

    if (clientData) {
      res.render("viewCart", { client: clientData });
    } else {
      res.status(404).send("Client not found");
    }
  } catch (error) {
    console.error("Error retrieving client data:", error);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
