const srcPath = 'src';
const buildPath = 'dist';

const config = {
    server: {
        proxy: 'http://localhost', 
        port: 3000,
    },

    src: {
        root: srcPath,
        pug: `${srcPath}/pug`,
        scss: `${srcPath}/scss`,
        js: `${srcPath}/js`,

        assets: {
            root: `${srcPath}/assets`,
            images: `${srcPath}/assets/img`,
        },
    },

    build: {
        root: `${buildPath}`,
        html: `${buildPath}/`,
        css: `${buildPath}/css`,
        js: `${buildPath}/js`,
        images: `${buildPath}/img`,
        baseDir: `${buildPath}/pages/homepage/`
    }
}

export default config;
