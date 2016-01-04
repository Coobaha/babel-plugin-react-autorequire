# babel-plugin-react-autorequire

This plugin will autorequire all jsx components from global scope 

## Example

**In**

```js
class Component {
  render() {
    return <NewComponent />;
  }
}
```

**Out**

```js
import NewComponent from "NewComponent";
class Component {
  render() {
    return <NewComponent />;
  }
}
```

## Installation

```sh
$ npm install babel-plugin-react-autorequire
```
## Options
`es5 : true` - will use `require` instead of `import`
## Usage

### Via `.babelrc` (Recommended)

**.babelrc**

```json
{
  "plugins": ["react-autorequire"]
}
```

### Via CLI

```sh
$ babel --plugins react-autorequire script.js
```

### Via Node API

```javascript
require("babel-core").transform("code", {
  plugins: ["react-autorequire"]
});
```
