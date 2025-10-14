
import "dotenv/config";
import express from "express";
import cors from "cors";
import { handleDemo } from "./routes/demo";
import { handleContactForm } from "./routes/contact";

export function createServer() {
  const app = express();

  // Middleware
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Respond to preflight requests for API routes
  app.use((req, res, next) => {
    if (req.method === "OPTIONS" && req.path.startsWith("/api/")) {
      return res.sendStatus(204);
    }
    next();
  });

  // API routes
  app.get("/api/ping", (_req, res) => {
    const ping = process.env.PING_MESSAGE ?? "ping";
    res.json({ message: ping });
  });

  app.get("/api/demo", handleDemo);
  app.post("/api/contact", handleContactForm);

  return app;
}

// For local development
if (process.env.NODE_ENV !== 'production') {
  const app = createServer();
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
  });
}
