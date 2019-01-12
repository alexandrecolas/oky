import resolve from "rollup-plugin-node-resolve";
import babel from "rollup-plugin-babel";
import { uglify } from "rollup-plugin-uglify";

const extensions = [".ts"];

var config = {
  input: "src/index.ts",
  output: {
    format: "umd",
    name: "oky-validations",
    file: "lib/index.js",
    globals: {
      oky: "oky",
      ramda: "R",
      "ramda-validations": "RV"
    }
  },
  external: ["oky", "ramda", "ramda-validations"],
  plugins: [
    resolve({ extensions }),
    babel({
      extensions,
      exclude: "node_modules/**"
    })
  ]
};

if (process.env.NODE_ENV === "production") {
  config.plugins.push(
    uglify({
      compress: {
        pure_getters: true,
        unsafe: true,
        unsafe_comps: true,
        warnings: false
      }
    })
  );
}

export default config;
