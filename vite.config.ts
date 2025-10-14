// ...existing code...
import react from "@vitejs/plugin-react";
import { defineConfig, Plugin } from "vite";
import path from "path";

function expressPlugin(): Plugin {
  return {
    name: "express-plugin",
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        if (req.url?.startsWith("/api/")) {
          if (req.url === "/api/contact" && req.method === "POST") {
            try {
              // Parse JSON body
              const body = await new Promise<string>((resolve, reject) => {
                let data = '';
                req.on('data', chunk => {
                  data += chunk.toString();
                });
                req.on('end', () => resolve(data));
                req.on('error', reject);
              });

              console.log('Raw body received:', body);
              
              if (!body || body.trim() === '') {
                res.statusCode = 400;
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ success: false, message: "Empty request body" }));
                return;
              }
              
              try {
                (req as any).body = JSON.parse(body);
                console.log('Parsed body:', (req as any).body);
              } catch (parseError) {
                console.error("JSON parse error:", parseError);
                res.statusCode = 400;
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ 
                  success: false, 
                  message: "Invalid JSON in request body",
                  error: parseError instanceof Error ? parseError.message : String(parseError)
                }));
                return;
              }

              const { handleContactForm } = await import("./server/routes/contact");
              await handleContactForm(req as any, res as any);
              
            } catch (error) {
              console.error("API error:", error);
              res.statusCode = 500;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ 
                success: false, 
                message: "Internal server error",
                error: error instanceof Error ? error.message : String(error)
              }));
            }
            return;
          }
        }
        next();
      });
    },
  };
}

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    fs: {
      allow: ["./", "./client", "./shared"],
      deny: [".env", ".env.*", "*.{crt,pem}", "**/.git/**"],
    },
  },
  build: {
    outDir: "dist/spa",
  },
  plugins: [react(), expressPlugin()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./client"),
      "@shared": path.resolve(__dirname, "./shared"),
    },
  },
}));
// ...existing code...