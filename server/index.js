const express = require("express");
const cors = require("cors");

const port = 3005;
const app = express();

app.listen(port, () => {
  console.log(`I am listening on port:${port}`);
});
