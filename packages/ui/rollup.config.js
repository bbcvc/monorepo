import { babel } from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import { nodeResolve as resolve } from "@rollup/plugin-node-resolve";
import { defineConfig } from "rollup";
import { dts } from "rollup-plugin-dts";
import postcss from "rollup-plugin-postcss";
import typescript from "rollup-plugin-typescript2";
import { name } from "./package.json";

export default defineConfig([
  {
    input: "src/index.tsx",
    external: ["react", "react-dom"],
    plugins: [
      typescript({
        declaration: true,
        check: false, // https://github.com/ezolenko/rollup-plugin-typescript2/issues/214
      }),
      resolve({
        extensions: [".tsx", ".ts", ".js"],
      }),
      postcss({}),
      babel({
        babelrc: false,
        exclude: "**/node_modules/**",
        babelHelpers: "runtime",
        skipPreflightCheck: true,
        presets: ["@babel/preset-react", "@babel/preset-env"],
        plugins: [
          "@babel/plugin-proposal-object-rest-spread",
          "@babel/plugin-syntax-object-rest-spread",
          "@babel/plugin-transform-react-jsx",
          [
            "@babel/plugin-transform-runtime",
            {
              absoluteRuntime: false,
              corejs: false,
              helpers: false,
              regenerator: false,
              useESModules: false,
            },
          ],
        ],
      }),
      commonjs(),
    ],
    output: [
      {
        name,
        file: "./dist/index.js",
        format: "es",
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
      {
        name,
        file: "./dist/cjs/index.cjs",
        format: "commonjs",
      },
      {
        name,
        file: "./dist/es/index.js",
        format: "es",
      },
    ],
  },
  {
    input: "src/index.tsx",
    watch: true,
    output: {
      file: "./dist/index.d.ts",
      format: "es",
    },
    plugins: [dts()],
  },
]);
