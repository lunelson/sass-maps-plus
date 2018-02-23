# sass-maps-plus

!['sass maps'](sass-maps-plus.png)

[![npm published v](https://img.shields.io/npm/v/@lunelson/sass-maps-plus.svg)]()
[![Build Status](https://travis-ci.org/lunelson/sass-maps-plus.svg?branch=master)](https://travis-ci.org/lunelson/sass-maps-plus)

**Sass-Maps-Plus** is aimed at providing advanced manipulation (and debugging!) for the Sass `map` data type. They are the successor to [Sass List–Maps](http://github.com/lunelson/sass-list-maps), which polyfilled `maps` in earlier versions of Sass; but use the **native** implementation of `maps` which are in [[ruby] Sass](https://github.com/sass/sass) as of version 3.3, and [LibSass](https://github.com/sass/libsass) as of version 3.1.

With version 1.0.0, the main functions (`map-get`, `map-set` and `map-merge`) have been conformed to the feature-descriptions posted by @nex3 in [this issue thread](https://github.com/sass/sass/issues/1739#issuecomment-122435753), which are the basis of a [work-in-progress](https://github.com/sass/sass/pull/1904) for the next version of ruby-sass.

```scss
$map: (a: (b: (c: d)));
.out {
  out: map-get($map, a, b, c); // => d
  out: map-set($map, a, b, c, x); // => (a: (b: (c: x)))
  out: map-merge($map, a, b, (c: x, d: y)); // => (a: (b: (c: x, d: y)))
}
```

Some earlier functions in this library have been deprecated; the one remaining addition here is `map-print`, for debugging maps in pretty-print format.

support Sass `map` data manipulation according to the description

 They provide advanced native map data-type manipulation and inspection in [libsass (as of version 3.1)](http://libsass.org/) and [ruby-sass (as of version 3.3)](http://sass-lang.com/).



### Installation

This is not currently registered in any package directories but can be installed from github via `npm`, and imported in [node-sass](https://github.com/sass/node-sass) and compliant tools, as long as the `includePaths` option includes `'node_modules'`.

```sh
# in your project
npm install --save @lunelson/sass-maps-plus
```
```scss
// in your sass file, assuming you have 'node_modules' in Sass' search path
@import '@lunelson/sass-maps-plus/index';
```
