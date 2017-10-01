// Vertrek straks van deze oefening voor je eerste express experiment
// Maak gebruik van de informatie op de express website: https://expressjs.com/
// Bekijk ook de informatie op de ejs-website: http://ejs.co/
// En bekijk heel goed alle voorbeelden die getoond zijn in de les
// Opdracht voor nu: vertrouwd raken met de routing (de basics; we gaan hier dieper op in volgende week), en de views (templates)

// zoals steeds "requiren" wat je wil gebruiken
var express = require("express");
var path = require("path");

// Daarna een Express app maken
var app = express();

// Express vertellen dat je views zich in een folder views bevinden
app.set("views", path.resolve(__dirname, "views"));

// Express vertellen dat je de EJS templating gaat gebruiken
// We moeten ejs ook installeren. Je doet dit via npm install ejs --save
app.set("view engine", "ejs");

// weergeven van een bestand index wanneer je de homepage van je site bezoekt
app.get("/", function(req, res) {
  res.render("index");
});

app.get("/one", function(req, res) {
  res.render("one");
});

app.get("/two", function(req, res) {
  res.render("two");
});

app.get("/three", function(req, res) {
  res.render("three");
});

app.get("/four", function(req, res) {
  res.render("four");
});

app.get("/five", function(req, res) {
  res.render("five");
});

app.get("/six", function(req, res) {
  res.render("six");
});

app.get("/seven", function(req, res) {
  res.render("seven");
});

app.get("/eight", function(req, res) {
  res.render("eight");
});

app.get("/nine", function(req, res) {
  res.render("nine");
});

app.get("/ten", function(req, res) {
  res.render("ten");
});

app.get("/eleven", function(req, res) {
  res.render("eleven");
});

app.get("/twelve", function(req, res) {
  res.render("twelve");
});

app.get("/thirteen", function(req, res) {
  res.render("thirteen");
});

// https://expressjs.com/en/starter/static-files.html
// Om statische bestanden zoals afbeeldingen, css&js-bestanden te kunnen weergeven gebruiken we de ingebouwde middleware functie express.static
app.use(express.static('public'))

// de server starten op poort 3000
app.listen(3000);
