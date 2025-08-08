import { createRequestHandler } from "@remix-run/express";
import express from "express";

async function bootstrap() {
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

  const build: any = viteDevServer
    ? await viteDevServer.ssrLoadModule("virtual:remix/server-build")
    : await import("./build/server/index.js");

  app.all("*", createRequestHandler({ build }));

  const port = process.env.PORT || 5173;
  app.set("port", port);

  app.listen(port, () => {
    console.log(`App listening on http://localhost:${port}`);
  });
}

bootstrap();
