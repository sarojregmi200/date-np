/**  @type {import("typedoc").TypeDocOptions} */
const config = {
  entryPoints: ["./src/index.tsx", "./utils/index.ts"],
  exclude: ["./docs/", "./test/", "./node_modules/", "./dist/"],

  // ignores all the modules are files that are not documented.
  excludeNotDocumented: true,

  // diabling generation of hierarchy.html
  includeHierarchySummary: false,

  out: "./docs/docs/auto",
  cleanOutputDir: true,
  skipErrorChecking: true,
  jsDocCompatibility: true,
  commentStyle: "jsdoc",
  emit: "docs",
  basePath: ".",
  useFirstParagraphOfCommentAsSummary: true,
  logLevel: "Verbose",
  preserveWatchOutput: true,

  plugin: ["typedoc-plugin-markdown"],
};

export default config;
