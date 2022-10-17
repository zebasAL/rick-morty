# `Gpac-app`

This monorepo is task for Gpac company

### Apps and Packages

- `web`: this is a frontend app, using rick-morty api.
- `ui`: a stub React component library shared by both `web` and `docs` applications
- `eslint-config-custom`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `tsconfig`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

## How to develop

### 1. Access and permissions

You should have access to the following platforms:

- [Vercel](https://vercel.com/zebasal/gpac-sac)

### 2. Local tools needed

If you don't have [`nvm`](https://github.com/nvm-sh/nvm), install it:

```shell
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
```

And run `nvm use` for nvm to use the right node version.

Make sure you also have [Docker](https://www.docker.com/get-started/) up and running.

If you don't have pnpm install it:

```shell
npm install --global pnpm@7.5.0
npx pnpm add -g pnpm@7.5.0
```

### 3. Install dependencies

```shell
pnpm install
```

_NOTE:_ Do NOT use `npm install` or `yarn install` here.

### 4. Environment variables

With the working directory set in each of the `apps`, run within

```shell
pnpm vercel:link
```

Then follow the instructions in the CLI to the local sub-repo with the corresponding Vercel project.
Once done, execute the following to download the `.env` file for the `development` environment:

```shell
pnpm vercel:env:pull
```

### 5. Dev command

```shell
pnpm dev
```

This should run the `dev` command in each repository in parallel.

### Remote Caching

Turborepo can use a technique known as [Remote Caching](https://turborepo.org/docs/core-concepts/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching you will need an account with Vercel. If you don't have an account you can [create one](https://vercel.com/signup), then enter the following commands:

```
cd my-turborepo
pnpx turbo login
```

This will authenticate the Turborepo CLI with your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview).

Next, you can link your Turborepo to your Remote Cache by running the following command from the root of your turborepo:

```
pnpx turbo link
```

## Useful Links

Learn more about the power of Turborepo:

- [Pipelines](https://turborepo.org/docs/core-concepts/pipelines)
- [Caching](https://turborepo.org/docs/core-concepts/caching)
- [Remote Caching](https://turborepo.org/docs/core-concepts/remote-caching)
- [Scoped Tasks](https://turborepo.org/docs/core-concepts/scopes)
- [Configuration Options](https://turborepo.org/docs/reference/configuration)
- [CLI Usage](https://turborepo.org/docs/reference/command-line-reference)
