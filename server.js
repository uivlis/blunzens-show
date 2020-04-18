const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const { bluzelle } = require('./blzjs/src/main.js');

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

// BluzelleDB Config
const config = require("./config/blz-config");

let blz;

bluzelle({
  address: config.address,
  mnemonic: config.mnemonic,
  uuid: "blunzens",
  endpoint: config.endpoint,
  chain_id: config.chain_id
}).then(res => {
  blz = res;
}).catch (e => {
  console.error(e.message);
});

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
