const RequiredComponent = require('Component');
class Component {
  getSomeComponent() {
    return <SomeComponent />
  }
  render() {
    return (<div>
      <RequiredComponent />
      <NewComponent />
    </div>);
  }
}
