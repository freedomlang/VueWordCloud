import filesize from 'rollup-plugin-filesize';
import { uglify } from 'rollup-plugin-uglify';
import { minify } from 'uglify-es';

import baseConfig from './rollup.base.js';
import { name, version, author } from './package.json';

// banner
const banner =
  `${'/*!\n' + ' * '}${name}.js v${version}\n` +
  ` * © 2017-${new Date().getFullYear()} ${author}\n` +
  ` * Released under the MIT License.\n` +
  ` */`;
const fileName = name.replace('@' + author + '/', '')

// 支持输出 []
export default [
  // .js, .cjs.js, .esm.js
  {
    ...baseConfig,
    output: [
      // Browser build
      {
        file: `dist/${fileName}.js`,
        format: 'umd',
        banner,
        name: fileName,
        sourcemap: true
      },
      // SSR build
      {
        file: `dist/${fileName}.ssr.js`,
        format: 'cjs',
        banner
      },
      // ESM build to be used with webpack/rollup
      {
        file: `dist/${fileName}.esm.js`,
        format: 'esm',
        banner
      }
    ],
    plugins: [...baseConfig.plugins, filesize()]
  },
  // .min.js
  {
    ...baseConfig,
    output: [
      // umd with compress version
      {
        file: `dist/${fileName}.min.js`,
        format: 'umd',
        name: fileName,
        banner
      }
    ],
    plugins: [
      ...baseConfig.plugins,
      uglify(
        {
          compress: {
            drop_console: true
          }
        },
        minify
      ),
      filesize()
    ]
  }
];