---
title: Icon component
description: The Icon component provides a seamless way to show icons in your app.
---

# `<Icon>` component

The `<Icon>` component provides a seamless way to show icons in your app. You can use your own icons or use the <a href="https://icon-sets.iconify.design/" target="_blank" rel="nofollow noreferrer">Iconify icon sets</a>.

## Usage

### Custom icons

To use your own icons, you must first create a SVG or a PNG file inside the `assets/icons` folder. The file name must be in `kebab-case`.

Then, use the `name` prop within the `<Icon>` component with the file name without the extension. For example, if you have a `vulmix.svg` file, you can use it like this:

::code-sample

```vue
<Icon name="vulmix" />
```

::vulmix-icon{name="vulmix"}
::
::

For styling, you can use common CSS font styles, like `color`, `font-size`, etc. You can even use Tailwind CSS classes, like `text-green-400` or `text-3xl`.

::code-sample

```vue
<Icon name="vulmix" class="text-green-400" />
<Icon name="vulmix" class="text-3xl text-pink-400" />
```

::vulmix-icon{name="vulmix" class="text-green-400"}
::
::vulmix-icon{name="vulmix" class="text-pink-400 text-3xl"}
::
::

You can also use nested icon files, like `assets/icons/brand/vulmix.svg`, and use it like this:

```vue
<Icon name="brand/vulmix" />
```

::alert
Since the default icon behaviors as a font, for PNG or multi-color SVG icons you need special props. See the sections below for more details.
::

### Multi-color icons

For multi-color SVG icons, you can use the `font` prop set to `false`:

::code-sample

```vue
<Icon name="vulmix" :font="false" />
<Icon name="vulmix" :font="false" class="text-4xl" />
```

::vulmix-icon{name="vulmix" :font="false"}
::
::vulmix-icon{name="vulmix" :font="false" class="text-4xl"}
::
::

This will render the SVG as is, and will not be affected by font styles (except for `font-size`, which will still work).

### PNG icons

The `Icon` component uses SVG icons by default, but you can also use PNG icons by setting the `format` prop to `png`:

::code-sample

```vue
<!-- assets/icons/vulmix.png -->
<Icon name="vulmix" format="png" />
<Icon name="vulmix" format="png" class="text-4xl" />
```

::vulmix-icon{name="vulmix" format="png"}
::
::vulmix-icon{name="vulmix" format="png" class="text-4xl"}
::
::

::alert{type="warning"}
Font color styles will not work with PNG icons.
::

### Iconify icons

The `<Icon>` component also allows you to use any icons from the <a href="https://icon-sets.iconify.design/" target="_blank" rel="nofollow noreferrer">Iconify icon sets</a>, with the `icon` prop:

::code-sample

```vue
<Icon icon="mdi:facebook" />
<Icon icon="mdi:facebook" class="text-4xl" />
```

::vulmix-icon{icon="mdi:facebook"}
::
::vulmix-icon{icon="mdi:facebook" class="text-4xl"}
::
::
