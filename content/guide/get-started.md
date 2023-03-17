# Get started with Vulmix

## Installation

The easiest way to get started with Vulmix is by running:

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

Run the project locally by `cd`ing into the project directory and then running the `dev` command:

```bash
# With NPM
npm run dev

# Or with Yarn
yarn dev
```

This should serve your project on [`localhost:3000`](http://localhost:3000) with [Hot Module Replacement](/guide/core-features/hot-module-replacement) enabled.

## Preparing for production

To compile an optimized build, you need to run the following command:

```bash
# With NPM
npm run prod

# Or with Yarn
yarn prod
```

This will minify and optimize your project code in the `_dist` folder which you can deploy its contents on any static host.

::alert
  If you are hosting your project on [Vercel](https://vercel.com/), it will automatically generate a production build.
::

## Testing your production build locally

If you want to test your project after running the `prod` command, you can run the `serve` command to raise a server on the `8000` port:

```bash
# With NPM
npm run serve

# Or with Yarn
yarn serve
```

Then you can open you project at [`localhost:8000`](http://localhost:8000).

::alert
Your assets will be served with Gzip compression.
::
