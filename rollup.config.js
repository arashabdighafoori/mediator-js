import { nodeResolve } from "@rollup/plugin-node-resolve";
import ts from "rollup-plugin-ts";

const production = !process.env.ROLLUP_WATCH;

const default_config = (input, output) => ({
  input: input,
  output: output,
  plugins: [
    nodeResolve(),
    ts({ tsconfig: production ? "tsconfig.json" : "tsconfig.json" }),
  ],
});

export default [
  default_config("src/index.ts", [
    { file: "lib/index.mjs", format: "es" },
    {
      dir: "lib/",
      format: "cjs",
    },
  ]),
  default_config("src/event.ts", [
    { file: "lib/event.mjs", format: "es" },
    {
      dir: "lib/",
      format: "cjs",
    },
  ]),
  default_config("src/light.ts", [
    { file: "lib/light.mjs", format: "es" },
    {
      dir: "lib/",
      format: "cjs",
    },
  ]),
];
