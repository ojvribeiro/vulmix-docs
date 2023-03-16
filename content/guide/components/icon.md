# `<Icon>` component

::alert{type="progress"}
  <under-construction />
::

Use custom icons within your page with the `<Icon>` component.

## Usage

In order to use the `<Icon>` component, you must first create a SVG file (your icon) inside the `assets/icons` folder. The file name must be in `kebab-case`.

Then, call the `<Icon>` component passing your icon name to the `name` prop:

```js
  <Icon name="my-custom-icon" />
```

::alert{type="warning"}
  Your SVG must have only one color and must not have a filled background. Otherwise, every color will become the same as the parent text color.
::

## Iconify support

The `<Icon>` component also allows you to use the <a href="https://icon-sets.iconify.design/" target="_blank" rel="nofollow noreferrer">Iconify icon sets</a>, with the `icon` prop:

```js
  <Icon icon="mdi:facebook" />
```
