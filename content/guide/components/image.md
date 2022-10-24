# `<Image>` component

## Features

- Lazy loading based on viewport visibility
- Load adequate image intrinsic size depending on the image rendered size
- SEO friendly by default, with default `alt`, `title`, `width` and `height` attributes
- Auto optimization and WebP convertion on build time.

This component is indented to use in static image files located in the `assets/img` folder. When the user runs `npm run dev` (or `yarn dev`), those images in that folder will be automatically optimized and a WebP version will be created. The `Image` component will be responsible for replacing the original image `src` with the optimized one:

```html
<Image src="path/to/image.jpg" />
```

will generate...

```html
<img src="path/to/optimized/image@[size].webp" alt="Image" title="" width="" height="" loading="lazy" />
```

You also have the option to disable the WebP version (enabled by default) with the `webp` attribute set to `false`.

```html
<Image src="path/to/image.jpg" webp="false" />
```

will generate...

```html
<img src="path/to/optimized/image@[size].jpg" alt="Image" title="" width="" height="" loading="lazy" />
```
