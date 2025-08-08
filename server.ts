import { createRequestHandler } from "@remix-run/express";
import express from "express";

const viteDevServer =
  process.env.NODE_ENV === "production"
    ? null
    : await import("vite").then((vite) =>
        vite.createServer({
          server: { middlewareMode: true },
        })
      );

const app = express();
app.use(
  viteDevServer ? viteDevServer.middlewares : express.static("build/client")
);

let build: any;

if (viteDevServer) {
  build = async () => {
    const mod = await viteDevServer.ssrLoadModule("virtual:remix/server-build");
    return mod;
  };
} else {
  build = await import("./build/server/index.js");
}

app.all("*", createRequestHandler({ build }));

const port = process.env.PORT || 5173;
app.set("port", port);

app.listen(port, () => {
  console.log(`App listening on http://localhost:${port}`);
});
