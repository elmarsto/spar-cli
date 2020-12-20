import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import wasm from '@rollup/plugin-wasm';
import pkg from './package.json';

const extensions = ['.js', '.ts'];

export default {
  input: 'src/index.ts',
  output: {
    file: pkg.cli,
    sourcemap: 'inline',
    format: 'cjs'
  },
  plugins: [
    wasm(),
    typescript(),
    resolve({ extensions, jsnext: true, main: true }),
    commonjs({
      include: 'node_modules/**',
      extensions: ['.js', '.jsx']
    })
  ]
};
