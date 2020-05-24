import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import rollupTypescript from 'rollup-plugin-typescript2'
import babel from 'rollup-plugin-babel';
import istanbul from 'rollup-plugin-istanbul';
import { DEFAULT_EXTENSIONS } from '@babel/core';
import pkg from './package.json';

const plugins = [
  resolve(),
  rollupTypescript()
];

console.log('process.env.BUILD ', process.env.BUILD);
if (process.env.BUILD !== 'production') {
  plugins.push(istanbul({
    exclude: ['test/**/*', 'node_modules/**/*']
  }));
}

export default [
  // browser-friendly UMD build
  {
    input: 'src/index.ts',
    output: {
      name: 'iClass',
      file: pkg.browser,
      format: 'umd'
    },
    plugins: [
      ...plugins,
      commonjs(), // so Rollup can convert `ms` to an ES module
      babel({
        exclude: 'node_modules/**',
        extensions: [
          ...DEFAULT_EXTENSIONS,
          '.ts',
        ],
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
    input: 'src/index.ts',
    external: ['ms'],
    output: [
      { file: pkg.main, format: 'cjs' }
    ],
    plugins: [
      ...plugins,
      babel({
        exclude: 'node_modules/**',
        extensions: [
          ...DEFAULT_EXTENSIONS,
          '.ts',
        ],
      })
    ]
  },
  {
    input: 'src/index.ts',
    external: ['ms'],
    output: [
      { file: pkg.module, format: 'es' }
    ],
    plugins: [...plugins]
  }
];
