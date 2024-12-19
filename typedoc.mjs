/**  @type {import("typedoc").TypeDocOptions} */
const config = {
  entryPoints: ["./src/**/*.ts", "./utils/**/*.ts"],
  out: "./docs/docs/auto",
  cleanOutputDir: true,
  plugin: ["typedoc-plugin-markdown"],
  skipErrorChecking: true,
  jsDocCompatibility: true,
  commentStyle: "jsdoc",
  emit: "docs",
  json: "docs/docs.json",
};

export default config;
