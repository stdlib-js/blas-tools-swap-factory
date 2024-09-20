<!--

@license Apache-2.0

Copyright (c) 2024 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# factory

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Return a function which interchange two vectors.

<section class="intro">

</section>

<!-- /.intro -->



<section class="usage">

## Usage

To use in Observable,

```javascript
factory = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/blas-tools-swap-factory@umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var factory = require( 'path/to/vendor/umd/blas-tools-swap-factory/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/blas-tools-swap-factory@umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.factory;
})();
</script>
```

#### factory( base, dtype )

Returns a function which interchanges two vectors.

```javascript
var dswap = require( '@stdlib/blas-base-dswap' ).ndarray;

var swap = factory( dswap, 'float64' );
```

The function has the following parameters:

-   **base**: "base" function which interchanges two vectors. Must have an `ndarray` function signature (i.e., must support index offsets).
-   **dtype**: array data type. The function assumes that the data type of all provided arrays is the same.

#### swap( x, y\[, dim] )

Interchanges two vectors.

```javascript
var Float64Array = require( '@stdlib/array-float64' );
var array = require( '@stdlib/ndarray-array' );
var dswap = require( '@stdlib/blas-base-dswap' ).ndarray;

var swap = factory( dswap, 'float64' );

var x = array( new Float64Array( [ 4.0, 2.0, -3.0, 5.0, -1.0 ] ) );
var y = array( new Float64Array( [ 2.0, 6.0, -1.0, -4.0, 8.0 ] ) );

swap( x, y );

var xbuf = x.data;
// returns <Float64Array>[ 2.0, 6.0, -1.0, -4.0, 8.0 ]

var ybuf = y.data;
// returns <Float64Array>[ 4.0, 2.0, -3.0, 5.0, -1.0 ]
```

The returned function has the following parameters:

-   **x**: a non-zero-dimensional [`ndarray`][@stdlib/ndarray/ctor]. Must have the same shape as `y`.
-   **y**: a non-zero-dimensional [`ndarray`][@stdlib/ndarray/ctor]. Must have the same shape as `x`.
-   **dim**: dimension along which to interchange vectors. Must be a negative integer. Negative indices are resolved relative to the last array dimension, with the last dimension corresponding to `-1`. Default: `-1`.

For multi-dimensional input [`ndarrays`][@stdlib/ndarray/ctor], the function performs batched computation, such that the function interchanges each pair of vectors in `x` and `y` according to the specified dimension index.

```javascript
var Float64Array = require( '@stdlib/array-float64' );
var array = require( '@stdlib/ndarray-array' );
var dswap = require( '@stdlib/blas-base-dswap' ).ndarray;

var swap = factory( dswap, 'float64' );

var opts = {
    'shape': [ 2, 3 ]
};
var x = array( new Float64Array( [ 4.0, 2.0, -3.0, 5.0, -1.0, 3.0 ] ), opts );
var y = array( new Float64Array( [ 2.0, 6.0, -1.0, -4.0, 8.0, 2.0 ] ), opts );

var v1 = x.get( 0, 0 );
// returns 4.0

var v2 = y.get( 0, 0 );
// returns 2.0

swap( x, y );

v1 = x.get( 0, 0 );
// returns 2.0

v2 = y.get( 0, 0 );
// returns 4.0
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

For the returned function,

-   Both input [`ndarrays`][@stdlib/ndarray/ctor] must have the same shape.
-   Negative indices are resolved relative to the last [`ndarray`][@stdlib/ndarray/ctor] dimension, with the last dimension corresponding to `-1`.
-   For multi-dimensional [`ndarrays`][@stdlib/ndarray/ctor], batched computation effectively means swapping all of `x` with all of `y`; however, the choice of `dim` will significantly affect performance. For best performance, specify a `dim` which best aligns with the [memory layout][@stdlib/ndarray/orders] of provided [`ndarrays`][@stdlib/ndarray/ctor].

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/random-array-discrete-uniform@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-to-array@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-array@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/blas-base-dswap@umd/browser.js"></script>
<script type="text/javascript">
(function () {.ndarray;
var factory = require( '@stdlib/blas-tools-swap-factory' );

var swap = factory( dswap, 'float64' );

var opts = {
    'dtype': 'float64'
};

var x = array( discreteUniform( 10, 0, 100, opts ), {
    'shape': [ 5, 2 ]
});
console.log( ndarray2array( x ) );

var y = array( discreteUniform( 10, 0, 10, opts ), {
    'shape': x.shape
});
console.log( ndarray2array( y ) );

swap( x, y );
console.log( ndarray2array( x ) );
console.log( ndarray2array( y ) );

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/blas-tools-swap-factory.svg
[npm-url]: https://npmjs.org/package/@stdlib/blas-tools-swap-factory

[test-image]: https://github.com/stdlib-js/blas-tools-swap-factory/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/blas-tools-swap-factory/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/blas-tools-swap-factory/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/blas-tools-swap-factory?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/blas-tools-swap-factory.svg
[dependencies-url]: https://david-dm.org/stdlib-js/blas-tools-swap-factory/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/blas-tools-swap-factory/tree/deno
[deno-readme]: https://github.com/stdlib-js/blas-tools-swap-factory/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/blas-tools-swap-factory/tree/umd
[umd-readme]: https://github.com/stdlib-js/blas-tools-swap-factory/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/blas-tools-swap-factory/tree/esm
[esm-readme]: https://github.com/stdlib-js/blas-tools-swap-factory/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/blas-tools-swap-factory/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/blas-tools-swap-factory/main/LICENSE

[@stdlib/ndarray/ctor]: https://github.com/stdlib-js/ndarray-ctor/tree/umd

[@stdlib/ndarray/orders]: https://github.com/stdlib-js/ndarray-orders/tree/umd

</section>

<!-- /.links -->