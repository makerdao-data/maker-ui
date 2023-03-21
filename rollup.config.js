import typescript from '@rollup/plugin-typescript';
import pkg from './package.json' assert { type: 'json' };

export default {
  input: 'src/index.ts',
  output: [
    {
      file: pkg.module,
      format: 'esm',
      sourcemap: 'inline'
    },
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: 'inline'
    },
    {
      file: pkg.browser,
      format: 'umd',
      name: 'bundle',
      sourcemap: 'inline'
    }
  ],
  external: [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {})
  ],
  plugins: [
    typescript({
      compilerOptions: { sourceMap: true }
    })
  ]
};
