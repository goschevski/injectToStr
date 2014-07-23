# InjectToStr

[![Build Status](https://travis-ci.org/goschevski/injectToStr.svg?branch=master)](https://travis-ci.org/goschevski/injectToStr)

InjectToStr is simple library for injecting variables in strings.

It works in both node and client-side applications.

###### Example

```javascript
var injectToStr = require('injectToStr');

var str = injectToStr('Follow @[user] on github.', { user: 'goschevski' });
// Follow @goschevski on github.

var str = injectToStr('Follow @[user] on [network].', { user: 'goschevski' });
// Follow @goschevski on [network].
```
