![](https://badgen.net/badge/Version/0.0./f2a) ![](https://badgen.net/badge/Open-Source/FREE/red)
# vcreate
vcreate is a small command-line tool that makes it easy to create Vue.js components. It supports the latest Composition API syntax and can insert `lang="scss"` in styles or `lang="ts"` in script tag.

## List of features
- Easy to use
- Supports latest Composition API syntax
- Can insert lang="scss" in styles

## Installation
You can install vcreate using either `npm` or `yarn`.

#### npm
To install vcreate globally using npm, run the following command:
```
npm i -g vcreate
```

---
#### yarn
To install vcreate using yarn, run the following command
```
yarn add vcreate
```

That's it! You should now have vcreate installed on your system and be ready to start using it. If you encounter any issues during the installation process, please open a [GitHub issue](https://github.com/mrdisa97/vcreate/issues) for help.
## Usage

To use vcreate, simply run the following command in your terminal:
```
$ vcreate <command> 'component' [option]
```
---
If you want to create a component, run:
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
| Option     | Alias  | Description                                                             |
| ---------- | ------ | ----------------------------------------------------------------------- |
| `--help`   | `-h`   | Show CLI help                                                           |
| `--version`| `-v`   | Show the version of current CLI                                         |
| `--lang`   | `-l`   | Lang for the script tag; use `-l ts` to specify TypeScript, for example |
| `--scss`   |   /    | Use sass in your style tag (`lang="scss"`)                              |


## How to Contribute
Thank you for your interest in contributing to this project! Your help is essential to making it better.

If you would like to contribute, please follow these steps:

1. Fork the repository and clone it to your local machine.
2. Create a new branch with a descriptive name for your changes: `git checkout -b my-new-feature.`
3. Make your changes and test them thoroughly.
4. Commit your changes: `git commit -am 'Add some feature'`.
5. Push to the branch: git push origin my-new-feature.
6. Open a pull request to the main branch and provide a detailed description of your changes.

We appreciate all contributions, whether they are small bug fixes or major features. If you have any questions or need help getting started, please don't hesitate to reach out to us.

Thank you for your contributions!

## License
The MIT License (MIT). Please see [License File](LICENSE.md) for more information.