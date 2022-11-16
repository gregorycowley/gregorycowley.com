
Build the contents of apps/portfolio
Output the build to the top level



gregorycowley-com
- settings:

    build:  cd ../.. && npx turbo run build --filter=portfolio <-- Works



    output directory: . <-- Produces a clean build, but in the wrong directory

`vc --cwd build`

`"outputDirectory": "apps/portfolio/.next",` points the server to the build directory

"outputDirectory" can be set in `vercel.json`



`Why am I getting RangeError: Maximum call stack size exceeded?`

`nvm use 16`

Vercel has overwritten `next.config.js`. Restore the custom contents.