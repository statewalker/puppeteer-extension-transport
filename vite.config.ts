import {defineConfig, loadEnv} from 'vite';
import { NodeModulesPolyfillPlugin } from '@esbuild-plugins/node-modules-polyfill'

export default ({mode}) => {
  process.env = {...process.env, ...loadEnv(mode, process.cwd())};

  const buildExtra =
    mode === 'production' ? {minify: true} : {minify: false, sourcemap: true};

  return defineConfig({
    optimizeDeps: {
      include: ['linked-dep'],
      esbuildOptions: {
       plugins: [NodeModulesPolyfillPlugin()],
      }
    },
    build: {
      ...buildExtra,
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
  });
};
