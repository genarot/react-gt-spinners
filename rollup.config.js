import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import { string } from 'rollup-plugin-string';
import { terser } from 'rollup-plugin-terser';

const dist = 'dist';
const bundle = 'bundle';
const production = !process.env.ROLLUP_WATCH;
export default {
    input: 'src/index.jsx',
    external: ['react'],
    output: [
        {
            file: `${dist}/${bundle}.cjs.js`,
            format: 'cjs'
        },
        {
            file: `${dist}/${bundle}.esm.js`,
            format: 'esm'
        },
        {
            name: 'ReactCssSpinner', // That name appear in the browser
            file: `${dist}/${bundle}.umd.js`,
            globals: {
                react: 'React'
            },
            format: 'umd'
        }
    ],
    plugins: [
        resolve(),
        babel({
            exclude: 'node_modules/**',
            include: 'src/**',
            babelrc: true,
            extensions: ['.js', '.jsx']
        }),
        string({
            include: '**/*.css'
        }),
        production && terser()
    ]
};
