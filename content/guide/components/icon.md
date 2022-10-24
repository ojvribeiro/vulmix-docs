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
  Your SVG must have only one color and non filled. Otherwise, every color will become the same as the parent text color.
::
