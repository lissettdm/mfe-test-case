import babel from "@rollup/plugin-babel";
import replace from "@rollup/plugin-replace";
import postcss from "rollup-plugin-postcss";
import external from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import visualizer from 'rollup-plugin-visualizer';

// import { terser } from "rollup-plugin-terser";


import pkg from "./package.json";

const getPluginsConfig = (prod) => {
  const plugins = [
    external(),
    postcss({
      extract: false,
      use: ["sass"],
    }),
    replace({
      "process.env.NODE_ENV": JSON.stringify(
        prod ? "production" : "development"
      ),
    }),
    // external({
    //   includeDependencies: true,
    // }),
    babel({
      exclude: "node_modules/**",
    }),
    resolve(),
    commonjs(),

    visualizer()
    // terser(), /** minified */
  ];

  return plugins;
};

export default (CLIArgs) => {
  const prod = !!CLIArgs.prod;
  const mini = !!CLIArgs.mini;
  const bundle = {
    input: ["./index.js"],
    output: [
      {
        dir: pkg.module,
        format: "esm",
        sourcemap: true,
      },
    ],
  };
  bundle.plugins = getPluginsConfig(prod, mini);
  return bundle;
};
