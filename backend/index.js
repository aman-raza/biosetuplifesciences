const express = require("express");
const router = require("./router/auth-router");
const app = express();

app.use("/", router);

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server is running n port ${PORT}`);
});
