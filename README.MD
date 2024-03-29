# gregorycowley.com


## Debugging:

`npm i --legacy-peer-deps`

`npm ls react`

`yarn cache clean --all`

`npm root`

`npm cache clean --force`

`npm doctor`

`npm install -g npm@latest`

`https://docs.npmjs.com/cli/v7/using-npm/workspaces`


```
    // "portfolio": "yarn --cwd apps/portfolio run start",
    // "portfolio:dev": "yarn --cwd apps/portfolio run dev",
    // "portfolio:build": "yarn --cwd apps/portfolio run build",
    // "articles": "yarn --cwd apps/articles run start",
    // "articles:dev": "yarn --cwd apps/articles run dev",
    // "articles:build": "yarn --cwd apps/articles run build",
    // "all:install": "yarn --cwd apps/portfolio install && yarn --cwd apps/articles install",
    // "build": "npm-run-all --parallel articles:build portfolio:build",
    // "vercel-build": "yarn build",
    // "all:dev": "npm-run-all --parallel articles:dev portfolio:dev"
```

```
{
  "$schema": "https://turbo.build/schema.json",
  "pipeline": {
    "build": {
      // A package's `build` script depends on that package's
      // dependencies and devDependencies
      // `build` tasks  being completed first
      // (the `^` symbol signifies `upstream`).
      "dependsOn": [
        "^build"
      ],
      // note: output globs are relative to each package's `package.json`
      // (and not the monorepo root)
      "outputs": [
        "dist/**",
        ".next/**"
      ]
    },
    "test": {
      // A package's `test` script depends on that package's
      // own `build` script being completed first.
      "dependsOn": [
        "build"
      ],
      "outputs": [],
      // A package's `test` script should only be rerun when
      // either a `.tsx` or `.ts` file has changed in `src` or `test` folders.
      "inputs": [
        "src/**/*.tsx",
        "src/**/*.ts",
        "test/**/*.ts",
        "test/**/*.tsx"
      ]
    },
    "lint": {
      // A package's `lint` script has no dependencies and
      // can be run whenever. It also has no filesystem outputs.
      "outputs": []
    },
    "deploy": {
      // A package's `deploy` script depends on the `build`,
      // `test`, and `lint` scripts of the same package
      // being completed. It also has no filesystem outputs.
      "dependsOn": [
        "build",
        "test",
        "lint"
      ],
      "outputs": []
    }
  }
}

```
