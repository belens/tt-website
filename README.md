Jooser
======

## Installation (Hugo, Bower and Gulp only must happen te first time)
### Install Hugo
[Follow the instructions](http://gohugo.io/#action).
Hugo Static Site Generator v0.13-DEV buildDate: 2015-01-16T09:28:45+01:00

If you don't have Homebrew, please install it by following the intructions over [here](http://brew.sh/)

### Install Bower and Gulp

```
$ sudo npm install -g bower
$ sudo npm install -g gulp-cli
```

If you don't have node or npm, please install it by following the intructions over [here](http://nodejs.org/) **(please download v0.12.*)**

### Install npm dependencies
```
$ npm install
```
This runs through all dependencies listed in `package.json` and downloads them to a `node_modules` folder in your project directory.
If this returns an error, please follow [these](https://docs.npmjs.com/getting-started/fixing-npm-permissions) (option 1) guidelines to fix it.

### Install bower dependencies
```
$ bower install
```
This runs through all dependencies listed in `bower.json` and downloads them to a `static/vendor` folder in your project directory.
(If there is a custom theme available, it could be that you also need to run a bower install inside of the theme folder)

## Use
### File structure

Please read the Hugo documentation to know how you have to use it.

Besides that we will not use the themes functionality (only if it will become a theme for multiple sites) but use the layouts and static folder.
It is important that you put your SASS files inside the `static/styles`, your js files in `static/scripts` and your image files in `static/images`

### Execution

To compile you work to a working website you just run the `watch` gulp task with

```
$ gulp watch
```

It will process all assets and pages. But also set a watch to recompile when you change something

## Publish
The server must run

```
$ npm install
$ bower install (and bower installs inside of the themes. If available)
$ gulp
```

to create a publish version.