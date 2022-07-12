// @deno-types="https://deno.land/x/servest@v1.3.1/types/react/index.d.ts"
import React from "https://dev.jspm.io/react/index.js";
// @deno-types="https://deno.land/x/servest@v1.3.1/types/react-dom/server/index.d.ts"
import ReactDOMServer from "https://jspm.dev/react-dom@18.0.0/server";
import { createApp } from "https://deno.land/x/servest@v1.3.1/mod.ts";

let colors = ["red", "green", "blue"];

const app = createApp();
app.handle("/", async (req) => {
  await req.respond({
    status: 200,
    headers: new Headers({
      "content-type": "text/html; charset=UTF-8",
    }),
    body: ReactDOMServer.renderToString(
      <html>
        <head>
          <meta charSet="utf-8" />
          <title>Desafío Clase N° 48</title>
        </head>
        <body>
          <h1>Desafío Clase N° 48</h1>
          <form action="/" method="post">
            <input type="color" name="color" />
            <input type="submit" value="Enviar" />
          </form>
          <h2>Colores</h2>
          <div style={{ backgroundColor: "black" }}>
            {colors.map((color) => (
              <div key={color} style={{ backgroundColor: color }}>
                {color}
              </div>
            ))}
          </div>
        </body>
      </html>,
    ),
  });
});
app.listen({ port: 8899 });