import {resolve as pathResolve} from 'path';
import {defineConfig, loadEnv} from 'vite';
import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill'
import { NodeModulesPolyfillPlugin } from '@esbuild-plugins/node-modules-polyfill'
import nodePolyfills from 'rollup-plugin-node-polyfills';
import resolve from '@rollup/plugin-node-resolve';

export default ({mode}) => {
  process.env = {...process.env, ...loadEnv(mode, process.cwd())};

  const buildExtra =
    mode === 'production' ? {minify: true} : {minify: false, sourcemap: true};

  return defineConfig({
    resolve: {
      preserveSymlinks: true,
      alias: {

      },
    },
    base: './',
    optimizeDeps: {
      esbuildOptions: {
        plugins: [NodeModulesPolyfillPlugin()],
      },
    },
    commonjsOptions: {
      transformMixedEsModules: true,
    },
    build: {
      //...buildExtra,
      minify: false,
      sourcemap: true,
      outDir: './dist',
      lib : {
        entry: './lib/index.ts',
        name: "api",
        formats: ['es'],
        fileName:  (format) => `connectToCdbBrowser.${format}.js`,
      },
    rollupOptions: {
        plugins: [
        ],
      },
    },
    plugins: [
      resolve({
        browser: true,
    }),
      nodePolyfills(),
    ],
  });
};
