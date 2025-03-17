# Findrant

1.     sudo npm install typescript ts-node @types/node --save-dev
2.     sudo install express @types/express
3.     npx tsc --init
4. edit tsconfig.json and package.json respectively
    1. ```scripts": {
        "build": "tsc",
        "start": "node dist/index.js",
        "dev": "ts-node src/index.ts"
    }
    ```
5. edit src/index.ts
6.     npm run build
7.     npm run start