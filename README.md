![](https://badgen.net/badge/Version/0.0.1/f2a) ![](https://badgen.net/badge/Open-Source/FREE/red)
# vcreate
Small tool for creating VUE components from CLI

## List of features
- Easy to use
- Supports latest Composition API syntax
- Can insert lang="scss" in styles

## Usage
```
$ vcreate <command> 'component' [option]
```
---
So if you want to create a component run:
```
vcreate component folder-name.component
```
This will create a component in `components/folder-name/Component.vue`

---
If you want to create a component in views folder run:
```
vcreate view folder-name.component
```
This will create a component in `views/folder-name/Component.vue`


## List of commands and options

#### List of commands
| Option     | Description                                                           |
| ---------- | --------------------------------------------------------------------- |
| `help`     | Show CLI help                                                         |
| `component`| Make component, required component name after command                 |
| `view`     | Make component in views folder, required component name after command |

#### List of options/flags
| Option     | Alias | Description                             |
| ---------- | ----- | --------------------------------------- |
| `--help`   | `h`   | Show CLI help                           |
| `--version`| `v`   | Show the version of current CLI         |
| `--lang`   | `l`   | Lang for the script tag `lang="ts"`     |
| `--scss`   |  /    | Use sass in your style tag `lang="scss"`|
