import replaceImports from 'rollup-plugin-replace-imports-with-vars';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';


export default {
  input: `src/index.js`,
  output: [
    { file: "dist/es/replicad-decorate.js", format: "es"   },
    { file: "dist/studio/replicad-decorate.js", format: "es", plugins: [replaceImports({ varType: 'const', replacementLookup: {"replicad": "replicad" }})] },
  ],
  external: ["replicad"],
  watch: {
    include: "src/**",
  },
  plugins: [resolve(), commonjs()]
};
