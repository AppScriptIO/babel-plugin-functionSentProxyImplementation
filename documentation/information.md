# babel-plugin-functionSentProxyImplementation
A different implementation plugin for converting the proposed `function.sent` meta property. 

## Differences between this plugin and the official implementation:
- [@babel/plugin-proposal-function-sent](https://babeljs.io/docs/en/next/babel-plugin-proposal-function-sent.html) - Wraps the generator function containing a `function.sent` meta property with a regular non-generator function through [@babel/helper-wrap-function](https://github.com/babel/babel/tree/master/packages/babel-helper-wrap-function). 
- [babel-plugin-functionSentProxyImplementation](https://github.com/AppScriptIO/babel-plugin-functionSentProxyImplementation) - Wraps the generator function with a Proxy intercepting calls using the `Apply` handler. 

## Advantages & Disadvantages: 
- Exposes the generator function by using the `apply` trap only. This allows for accessing properties of the generator function, as well as checking the original type of the target generator function before Babel transformation. 
- Only works on environments supporting proxies natively (as proxies aren't  polyfilled).

## Related discussions: 
- https://github.com/babel/babel/pull/9833

___
[Development TODO list](/documentation/TODO.md)

___

### 🔑 License: [MIT](/.github/LICENSE)
