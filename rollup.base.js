import path from 'path';
import alias from '@rollup/plugin-alias';
// import { eslint } from 'rollup-plugin-eslint';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import replace from 'rollup-plugin-replace';
import vue from 'rollup-plugin-vue';
import buble from 'rollup-plugin-buble'

export default {
  input: 'src/main.js',
  plugins: [
    alias({
      js: path.resolve(__dirname, './src/assets/js'),
      resolve: ['.js']
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    }),
    resolve(),
    commonjs({
      // non-CommonJS modules will be ignored, but you can also
      // specifically include/exclude files
      include: 'node_modules/**'
    }),
    vue({
      css: true, // Dynamically inject css as a <style> tag
      compileTemplate: true, // Explicitly convert template to render function
    }),
    buble(),
    // eslint({
    //   include: ['src/**/*.js']
    // }),
    babel({
      runtimeHelpers: true,
      sourceMap: true,
      exclude: 'node_modules/**' // only transpile our source code
    })
  ]
}