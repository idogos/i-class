import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from 'rollup-plugin-babel';
import pkg from './package.json';

const plugins = [
  resolve()
];

export default [
  // browser-friendly UMD build
  {
    input: 'src/index.js',
    output: {
      name: 'iClass',
      file: pkg.browser,
      format: 'umd'
    },
    plugins: [
      ...plugins,
      commonjs(), // so Rollup can convert `ms` to an ES module
      babel({
        exclude: 'node_modules/**'
      })
    ]
  },

  // CommonJS (for TreeNode) and ES module (for bundlers) build.
  // (We could have three entries in the configuration array
  // instead of two, but it's quicker to generate multiple
  // builds from a single configuration where possible, using
  // an array for the `output` option, where we can specify
  // `file` and `format` for each target)
  {
    input: 'src/index.js',
    external: ['ms'],
    output: [
      { file: pkg.main, format: 'cjs' }
    ],
    plugins: [
      ...plugins,
      babel({
        exclude: 'node_modules/**'
      })
    ]
  },
  {
    input: 'src/index.js',
    external: ['ms'],
    output: [
      { file: pkg.module, format: 'es' }
    ],
    plugins: [...plugins]
  }
];
