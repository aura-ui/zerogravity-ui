import { nodeResolve } from '@rollup/plugin-node-resolve'
import external from 'rollup-plugin-peer-deps-external'
import commonjs from '@rollup/plugin-commonjs'
import typescript from 'rollup-plugin-typescript2'
import { terser } from 'rollup-plugin-terser'
import pkg from './package.json'

//eslint-disable-next-line
export default [
  {
    input: './index.ts',
    output: [
      {
        file: pkg.main,
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: pkg.module,
        format: 'es',
        sourcemap: true,
      },
    ],
    plugins: [
      external(),
      nodeResolve(),
      commonjs(),
      typescript({
        clean: true,
        useTsconfigDeclarationDir: true,
        typescript: require('typescript'),
      }),
      terser(),
    ],
  },
]
