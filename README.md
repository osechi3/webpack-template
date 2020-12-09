
# NPM Template

## Packages

### General

+ Webpack + Webpack CLI
+ Webpack Dev Server
+ Clean Webpack Plugin
+ ESLint
+ Eslint Webpack Plugin
+ Babel [core, preset-env]
+ Babel Loader

### CSS

+ Style Loader
+ CSS Loader
+ SASS
+ SASS Loader
+ Stylelint
  + Stylelint SCSS Plugin
  + Stylelint config standard
  + Stylelint config order
  + Stylelint config rational order
+ normalize.scss
+ Mini CSS Extract Plugin
+ Optimize CSS Assets Plugin

### HTML

+ HTML Webpack Plugin

### Assets

+ Copy Webpack Plugin
+ Imagemin WebP Webpack Plugin (converting images to .webp)
+ Imagemin Webpack Plugin (minifying images)
  + Imagemin Mozjpeg Plugin
+ File Loader
+ Sharp

------

## Installation

+ ESLint

>./node_modules/.bin/eslint --init

+ Files
```shell
touch PLAN.md sandbox.js
```

## Additional Packages
+ Fontawesome
+ Jest
+ Babel Jest
+ PubSub JS

```shell
npm install --save-dev jest babel-jest pubsub-js
npm install @fortawesome/fontawesome-free
```
------

## Additional Installation and Configuration

+ package.json
```diff
"scripts": {
+  "test": "jest --watch --runInBand"
}
```

+ babel.config.js
```diff
+ env: { jest: true }
```

+ Jest

>./node_modules/.bin/jest --init

------
