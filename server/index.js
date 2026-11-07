import "dotenv/config";
import express from "express";

const app = express();
app.use(express.json());

app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", app: "PetConecta", hora: new Date().toISOString() });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`API PetConecta rodando em http://localhost:${PORT}`));
