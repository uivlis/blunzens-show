const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const { bluzelle } = require("bluzelle");
require('dotenv').config();
const app = express();

// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

let blz = bluzelle({
  mnemonic: process.env.BLZ_MNEMONIC,
  uuid: "Blunzens",
  endpoint: process.env.BLZ_ENDPOINT,
  chain_id: process.env.BLZ_CHAIN_ID
})

// Routes
app.get("/spider", function(req, res, err) {
  blz.keyValues().then(r => {
    res.send(r);
  }).catch(e => {
    res.sendStatus(500);
    console.log(e.message);
  });
});

app.use("*", (req, res) =>
 res.sendFile(path.join(__dirname, "../client/build/index.html"))
);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server up and running on port ${port} !`));
