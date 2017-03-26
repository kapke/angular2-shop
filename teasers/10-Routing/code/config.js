(function(global) {

    var ngVer = '@4.0.0'; // lock in the angular package version; do not let it float to current!

    //map tells the System loader where to look for things
    var  map = {
        'app':                        'app.ts',

        '@angular':                   'https://npmcdn.com/@angular', // sufficient if we didn't pin the version
        'angular2-in-memory-web-api': 'https://npmcdn.com/angular2-in-memory-web-api', // get latest
        'rxjs':                       'https://npmcdn.com/rxjs@5.2.0',
        'ts':                         'https://npmcdn.com/plugin-typescript@4.0.10/lib/plugin.js',
        'typescript':                 'https://npmcdn.com/typescript@2.2.0/lib/typescript.js',
    };

    //packages tells the System loader how to load when no filename and/or no extension
    var packages = {
        '.':                          { main: 'app.ts',  defaultExtension: 'ts' },
        'rxjs':                       { defaultExtension: 'js' },
        'angular2-in-memory-web-api': { defaultExtension: 'js' },
    };

    var ngPackageNames = [
        'common',
        'compiler',
        'core',
        'http',
        'platform-browser',
        'platform-browser-dynamic',
        'upgrade',
    ];

    // Add map entries for each angular package
    // only because we're pinning the version with `ngVer`.
    ngPackageNames.forEach(function(pkgName) {
        map['@angular/'+pkgName] = 'https://npmcdn.com/@angular/' + pkgName + ngVer;
    });
    map['@angular/router'] = 'https://npmcdn.com/@angular/router@3.0.2';

    // Add package entries for angular packages
    ngPackageNames.forEach(function(pkgName) {

        // Bundled (~40 requests):
        packages['@angular/'+pkgName] = { main: '', defaultExtension: 'js' };

        // Individual files (~300 requests):
        //packages['@angular/'+pkgName] = { main: 'index.js', defaultExtension: 'js' };
    });

    var config = {
        // DEMO ONLY! REAL CODE SHOULD NOT TRANSPILE IN THE BROWSER
        transpiler: 'ts',
        typescriptOptions: {
            tsconfig: true, emitDecoratorMetadata: true
        },
        meta: {
            'typescript': {
                "exports": "ts"
            }
        },
        map: map,
        packages: packages
    }

    System.config(config);

})(this);


/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */
