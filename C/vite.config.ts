import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

import replace from "@rollup/plugin-replace";
import { createHtmlPlugin } from "vite-plugin-html";

export default defineConfig(({ command, mode }) => {
  console.log(command);
  if (command === "serve") {
    return {
      server: {
        proxy: {
          __A__: {
            target: "http://localhost:768/A",
            changeOrigin: true,
            secure: false,
            rewrite: (path) => path.replace(/__A__/, ""),
          },
          __B__: "http://localhost:768/B",
          __I__: "http://localhost:768/I",
          __J__: "http://localhost:768/J",
        },
      },
      plugins: [
        vue(),
        createHtmlPlugin({
          //minify: true,

          inject: {
            data: {
              __A__: "http://localhost:768/A",
              __B__: "http://localhost:768/B",
              __I__: "http://localhost:768/I",
              __J__: "http://localhost:768/J",
            },
          },
        }),
      ],
      resolve: {
        alias: {
          "@": fileURLToPath(new URL("./src", import.meta.url)),
        },
      },
    };
  } else {
    return {
      plugins: [
        vue(),
        createHtmlPlugin({
          //minify: true,
          inject: {
            data: {
              __A__: "../A",
              __B__: "../B",
              __I__: "../I",
              __J__: "../J",
            },
          },
        }),
      ],
      resolve: {
        alias: {
          "@": fileURLToPath(new URL("./src", import.meta.url)),
        },
      },
      base: "",
      build: {
        rollupOptions: {
          plugins: [
            replace({
              values: {
                __A__: "../A",
                __B__: "../B",
                __I__: "../I",
                __J__: "../J",
              },
            }),
          ],
        },
      },
    };
  }
});
/* export default defineConfig({
  server: {
    //origin: "http://localhost:768/C/",
    proxy: {
      __A__: {
        target: "http://localhost:768/",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace("__A__", ""),
      },

      //"http://localhost:768/A",
      __B__: "http://localhost:768/B",
      __I__: "http://localhost:768/I",
      __J__: "http://localhost:768/J",
    },
  },
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
}); */
