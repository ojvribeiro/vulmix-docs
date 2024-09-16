---
title: The `vulmix.config.ts` file
description: The `vulmix.config.ts` file is the configuration file for Vulmix. It is used to set useful options for your project.
---

# The `vulmix.config.ts` file

::alert{type="progress"}
<under-construction />
::

The `vulmix.config.ts` file is the configuration file for Vulmix located in the root of your project. It is used to set useful options for your project.

| Property                               | Type       | Description                                                                                                     |
| -------------------------------------- | ---------- | --------------------------------------------------------------------------------------------------------------- |
| `lang`                                 | `string`   | The language of your project.                                                                                   |
| `imports`                              | `object`   | Options for auto-imports.                                                                                       |
| `imports.enabled`                      | `boolean`  | Whether auto-imports are enabled.                                                                               |
| `imports.dirs`                         | `string[]` | The directories to search for components.                                                                       |
| `imports.components.dirs`              | `string[]` | The directories to search for components.                                                                       |
| `imports.presets`                      | `string[]` | Auto-imports presets. See [Unplugin Presets](https://github.com/unplugin/unplugin-auto-import#package-presets). |
| `imports.options`                      | `object`   | Additional options for auto-imports.                                                                            |
| `imports.options.directoryAsNamespace` | `boolean`  | Whether to use the directory as part of the name of the component. Default is `false`.                          |
| `imports.options.collapseSamePrefixes` | `boolean`  | Whether to strip repeated prefixes from the component name. Default to `imports.enabled` value.                 |
| `dirs`                                 | `object`   | Options for default directories.                                                                                |
| `dirs.src`                             | `string`   | The source directory. Default is `.`.                                                                           |
| `dirs.public`                          | `string`   | The public directory. Default is `public`.                                                                      |
| `head`                                 | `object`   | The configuration for the `<head>` tag.                                                                         |
| `head.title`                           | `string`   | The default title of your project if none is provided with the `Head` component or the `useHead` composable.    |
| `head.meta`                            | `object[]` | The meta tags of your project.                                                                                  |
| `head.meta[].charset`                  | `string`   | The `charset` attribute of the meta tag.                                                                        |
| `head.meta[].name`                     | `string`   | The `name` attribute of the meta tag.                                                                           |
| `head.meta[].property`                 | `string`   | The `property` attribute of the meta tag.                                                                       |
| `head.meta[].content`                  | `string`   | The `content` attribute of the meta tag.                                                                        |
| `head.link`                            | `object[]` | The `link` tags of your project.                                                                                |
| `head.link[].rel`                      | `string`   | The `rel` attribute of the link tag.                                                                            |
| `head.link[].href`                     | `string`   | The `href` attribute of the link tag.                                                                           |
| `head.link[].sizes`                    | `string`   | The `sizes` attribute of the link tag.                                                                          |
| `head.link[].type`                     | `string`   | The `type` attribute of the link tag.                                                                           |
| `head.link[].hreflang`                 | `string`   | The `hreflang` attribute of the link tag.                                                                       |
| `head.script`                          | `object[]` | The script tags of your project.                                                                                |
| `head.script[].src`                    | `string`   | The `src` attribute of the script tag.                                                                          |
| `head.script[].type`                   | `string`   | The `type` attribute of the script tag.                                                                         |
| `head.script[].async`                  | `boolean`  | The `async` attribute of the script tag.                                                                        |
| `head.script[].defer`                  | `boolean`  | The `defer` attribute of the script tag.                                                                        |
| `webpackConfig.resolve.alias`          | `object`   | Custom aliases.                                                                                                 |
| `transition.name`                      | `string`   | The name of the page transition.                                                                                |
