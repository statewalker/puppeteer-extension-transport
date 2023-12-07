import { NodeModulesPolyfillPlugin } from '@esbuild-plugins/node-modules-polyfill';
import { resolve as pathResolve } from 'path';
import { createLogger, defineConfig, loadEnv } from 'vite';

const logger = createLogger();
const originalWarning = logger.warn;
logger.warn = (msg, options) => {
  //hide browser compatibility warning
  if (msg.includes('plugin:vite:resolve')) return;
  originalWarning(msg, options);
};

const resolve = (path) => pathResolve(__dirname, path)

export default ({mode}) => {
  process.env = {...process.env, ...loadEnv(mode, process.cwd())};

  const buildExtra =
    mode === 'production' ? {minify: true} : {minify: false, sourcemap: true};

  return defineConfig({
    customLogger: logger,
    optimizeDeps: {
      esbuildOptions: {
        plugins: [NodeModulesPolyfillPlugin()],
      },
    },
    build: {
      ...buildExtra,
      emptyOutDir: true,
      outDir: "build",
      lib: {
        entry: {
          api: resolve('./lib/index.ts'),
        },
        formats: ["es"],
        fileName: (format:string, entryName):string => `webrun-puppeteer-api.js`
      }
    },
  });
};
