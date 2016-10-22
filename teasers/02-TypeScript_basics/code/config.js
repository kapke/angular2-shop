(function() {
    var  map = {
        'main': 'main.ts',

        'ts': 'https://npmcdn.com/plugin-typescript@4.0.10/lib/plugin.js',
        'typescript': 'https://npmcdn.com/typescript@1.8.10/lib/typescript.js',
    };

    var packages = {
        '.': { main: 'main.ts',  defaultExtension: 'ts' }
    };

    var config = {
        transpiler: 'ts',
        typescriptOptions: {
            tsconfig: true
        },
        meta: {
            'typescript': {
                "exports": "ts"
            }
        },
        map: map,
        packages: packages
    };

    System.config(config);

})();
