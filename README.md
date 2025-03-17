# Findrant

1.     sudo npm install typescript ts-node @types/node --save-dev
2.     sudo install express @types/express
3.     npx tsc --init
4. edit tsconfig.json and package.json respectively
    1.      {
                "compilerOptions": {
                    "target": "es6",                                  /* Set the JavaScript language version for emitted JavaScript and include compatible library declarations. */
                    "module": "commonjs",                                /* Specify what module code is generated. */'allowJs'. */
                    "outDir": "./dist",                                   /* Specify an output folder for all emitted files. */
                    "esModuleInterop": true,                             /* Emit additional JavaScript to ease support for importing CommonJS modules. This enables 'allowSyntheticDefaultImports' for type compatibility. */
                    "forceConsistentCasingInFileNames": true,            /* Ensure that casing is correct in imports. */
                    "strict": true,                                      /* Enable all strict type-checking options. */
                    "skipLibCheck": true                                 /* Skip type checking all .d.ts files. */
                },
                "include": ["./src/**/*.ts"],
                "exclude": ["node_modules"]
            }
    2.     scripts": {
                "build": "tsc",
                "start": "node dist/index.js",
                "dev": "ts-node src/index.ts"
            }
5. edit src/index.ts
6.     npm run build
7.     npm run start