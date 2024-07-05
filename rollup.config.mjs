import { resolve } from 'path'
import { fspGlob as glob } from 'glob-native'
import { defineConfig } from 'rollup'
import typescript from '@rollup/plugin-typescript';
import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';
import unpluginTypia from '@ryoppippi/unplugin-typia/rollup';
import Macros from 'unplugin-macros/rollup'


const entries = {};
for await (const path of glob(resolve(import.meta.dirname, './src/validation/success/*.ts'))) {
  if (path == null) continue
  const filename = path.split('/').at(-1).replace('.ts', '')
  entries[`success/${filename}`] = path
}

for await (const path of  glob(resolve(import.meta.dirname, './src/validation/error/*.ts'))) {
  if (path == null) continue
  const filename = path.split('/').at(-1).replace('.ts', '')
  entries[`error/${filename}`] = path
}

export default defineConfig(
  Object.entries(entries).map(([name, path]) => 
    ({
      input: path,
      output: {
        file: resolve(import.meta.dirname, `./dist/${name}.mjs`),
        inlineDynamicImports: true, 
        format: 'es',
        plugins: [
          terser({
            mangle: true,
            compress: true,
          }),
        ],
      },
      plugins: [
        Macros(),
        unpluginTypia({ cache: false, log: false}),
        nodeResolve(),
        commonjs(),
        typescript({
          tsconfig: 'tsconfig.json',
          module: 'ESNext',
          target: 'ESNext',
        }),
      ],
    })
  )
)
