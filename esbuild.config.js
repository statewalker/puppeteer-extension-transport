import { build } from "esbuild";
import { polyfillNode } from "esbuild-plugin-polyfill-node";


build({
	entryPoints: ["./examples/extension-v3/background.ts"],
    bundle: true,
    format: esm,
	outfile: "./build/examples/extension-v3/",
	plugins: [
		polyfillNode({
			// Options (optional)
		}),
	],
});