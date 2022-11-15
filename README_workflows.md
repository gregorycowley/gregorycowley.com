[https://turbo.build/repo/docs/reference/command-line-reference]


Where source files are
Where build script runs
Where built files are written
Where web files are served from (web root)


Project settings:
    "buildCommand": "npx turbo run build --filter=portfolio"
    "outputDirectory": null
    "rootDirectory": null
Builds:
    Source files are in `apps/portfolio`
    `vercel build` run in repo root folder
    `npx turbo run build --filter=portfolio` finds sources files
    Files are built to the source file directory


Run before build
    `yarn cache clean`


`svc --cwd build`

`vercel project --debug`
`vercel project ls`
`vercel build --local-config ./vercel.json`
`vercel pull --debug`
`vercel pull --environment=production`

`vercel env pull`
`vercel build -d`
`vercel project --cwd`
`vercel --cwd ~/path-to/project`