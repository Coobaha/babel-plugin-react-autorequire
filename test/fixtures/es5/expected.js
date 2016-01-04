var NewComponent = require('NewComponent');

var RequiredComponent = require('Component');
class Component {
  render() {
    return <div>
      <RequiredComponent />
      <NewComponent />
    </div>;
  }
}
