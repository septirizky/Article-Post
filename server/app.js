const express = require("express");
const app = express();
const PORT = 3000;
const cors = require("cors");
const router = require("./routers/index");

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(router);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
  console.log(`http://localhost:${PORT}`);
});

module.exPORTs = app;
