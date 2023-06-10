# Get started with Vulmix

## Pre-requisites

Before getting started with Vulmix, you need to make sure you have the following installed:

- <a href="https://nodejs.org/" target="_blank" rel="nofollow noreferrer noopener">Node.js</a> >= 16
- A package manager - <a href="https://www.npmjs.com/" target="_blank" rel="nofollow noreferrer noopener">NPM</a> or <a href="https://yarnpkg.com/" target="_blank" rel="nofollow noreferrer noopener">Yarn</a>
- A code editor of your choice
- A terminal of your choice

::alert{type="warning"}
  Vulmix still doesn't support PNPM.
::

## Installation

To scaffold a new Vulmix project, you can use the <a href="https://npmjs.com/package/create-vulmix-app" target="_blank" rel="nofollow noopener noreferrer">`create-vulmix-app`</a> CLI tool:

```bash
npx create-vulmix-app your-app-name
```

Once the install is complete, get into your project folder and install Vulmix dependencies:

```bash
cd your-app-name
```

```bash
# With NPM
npm install

# Or with Yarn
yarn install
```

## Running the project

Run the project locally by going into the project directory and then running the `dev` command:

```bash
# With NPM
npm run dev

# Or with Yarn
yarn dev
```

This should serve your project on an automatically picked port of localhost (default is `3000`) with [HMR](/guide/features/hot-module-replacement) enabled.

![vulmix-port-3000](/img/vulmix-terminal-running.png)

Then you should see the following page on your browser:

![vulmix-starter-template](/img/vulmix-welcome.png)

Now you can start building your application right away in the `app.vue` file by replacing the `<VulmixWelcome />` component with your own content.

## Preparing for production

To compile an optimized build, you need to run the `prod` command:

```bash
# With NPM
npm run prod

# Or with Yarn
yarn prod
```

This will minify and optimize your project code in the `_dist` folder which you can deploy its contents on any static host.

::alert
  If you are hosting your project on <a href="https://vercel.com/" target="_blank" rel="nofollow noreferrer noopener">Vercel</a>, it will automatically generate a production build.
::

## Testing your production build locally

If you want to test your project after running the `prod` command, you can run the `serve` command to raise a server on the `8000` port:

```bash
# With NPM
npm run serve

# Or with Yarn
yarn serve
```

Then you can open you project at <a href="http://localhost:8000" target="_blank" rel="nofollow noreferrer noopener">`localhost:8000`</a>.

::alert
Your assets will be served with Gzip compression.
::
