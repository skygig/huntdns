import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const publicPath = path.join(__filename, "../public");

const app = express();
app.use(express.static(publicPath));

app.get("/", (req, res) => {
  const htmlFilePath = path.join(publicPath, "index.html");
  res.sendFile(htmlFilePath);
});

app.listen(3000, () => {
  console.log("Server running at: http://localhost:3000");
});
