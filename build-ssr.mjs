import * as esbuild from 'esbuild'
import { polyfillNode } from "esbuild-plugin-polyfill-node";

await esbuild.build({
  entryPoints: ['app/javascript/server_rendering.js'],
  bundle: true,
  platform: "browser",
  define: {
    "process.env.NODE_ENV": '"production"'
  },
  sourcemap: true,
  outfile: 'app/assets/builds/server_rendering.js',
  logLevel: "info",
  loader: {
    ".js": "jsx",
    ".svg": "dataurl"
  },
  inject: ["./shim.js"],
  plugins: [
    polyfillNode({
      globals: false
    }),
  ]
})
