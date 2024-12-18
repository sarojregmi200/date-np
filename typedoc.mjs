/**  @type {import("typedoc").TypeDocOptions} */
const config = {
  entryPoints: ["./src/index.ts"],
  out: "./docs/docs/",
  cleanOutputDir: false,
  plugin: ["typedoc-plugin-markdown"],
  readme: "none",
};

export default config;
