import "dotenv/config";
import express from "express";
import cors from "cors";
import { handleDemo } from "./routes/demo";
import { handleContactForm } from "./routes/contact";

export function createServer() {
  const app = express();
  // If this app is run behind Netlify Functions the incoming path will be
  // prefixed with '/.netlify/functions'. Normalize that so our routes
  // (which are defined at '/api/...') still match.
  app.use((req, _res, next) => {
    if (req.url.startsWith("/.netlify/functions")) {
      req.url = req.url.replace("/.netlify/functions", "");
    }
    next();
  });

  // Middleware
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Respond to preflight requests for API routes to avoid 405 Method Not Allowed.
  // Some hosting environments (or client preflight requests) may trigger an OPTIONS
  // request before the POST — ensure we respond so the browser can continue.
  // Use a small middleware instead of a route with a wildcard pattern which can
  // trigger path parsing issues in some environments.
  app.use((req, res, next) => {
    if (req.method === "OPTIONS" && req.path.startsWith("/api/")) {
      return res.sendStatus(204);
    }
    next();
  });

  // Example API routes
  app.get("/api/ping", (_req, res) => {
    const ping = process.env.PING_MESSAGE ?? "ping";
    res.json({ message: ping });
  });

  app.get("/api/demo", handleDemo);
  app.post("/api/contact", handleContactForm);

  return app;
}
