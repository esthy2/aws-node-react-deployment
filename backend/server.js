const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

app.get("/api/health", (req, res) => {
  res.json({ status: "ok", message: "API is running" });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
