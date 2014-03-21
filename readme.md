# InjectToStr

InjectToStr is simple library for injecting variables in strings.

It works in both node and client-side applications.

###### Example

```
var injectToStr = require('injectToStr');

var str = injectToStr('Follow @[user] on github.', { user: 'goschevski' });
// Follow @goschevski on github.

var str = injectToStr('Follow @[user] on [network].', { user: 'goschevski' });
// Follow @goschevski on [network].
```