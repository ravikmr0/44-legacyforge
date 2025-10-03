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

  // Respond to preflight requests for API routes to avoid 405 Method Not Allowed
  // Some hosting environments (or client preflight requests) may trigger an OPTIONS
  // request before the POST — ensure we respond so the browser can continue.
  app.options('/api/*', (_req, res) => res.sendStatus(204));

  // Example API routes
  app.get("/api/ping", (_req, res) => {
    const ping = process.env.PING_MESSAGE ?? "ping";
    res.json({ message: ping });
  });

  app.get("/api/demo", handleDemo);
  app.post("/api/contact", handleContactForm);

  return app;
}
