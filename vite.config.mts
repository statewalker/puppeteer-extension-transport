import { NodeModulesPolyfillPlugin } from '@esbuild-plugins/node-modules-polyfill';
import { resolve as pathResolve } from 'path';
import { createLogger, defineConfig, loadEnv } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';


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
    publicDir: resolve('./examples'),
    resolve: {
      alias: {
        '@lib': resolve('./lib')
      }
    },
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
          background: resolve('./examples/extension-v3/background.ts'),
        },
        formats: ["es"],
        fileName: (format:string, entryName):string => `extension-v3/${entryName}.js`
      }
    },
    plugins: [
      viteStaticCopy({
        targets: [
          {
            src: resolve('./build/extension-v3/api.js'),
            dest: './lib/',
          },
        ],
      }),
    ],
  });
};
