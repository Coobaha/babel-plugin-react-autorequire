import NewComponent from 'NewComponent';
import SomeComponent from 'SomeComponent';
const RequiredComponent = require('Component');
class Component {
  getSomeComponent() {
    return <SomeComponent />;
  }
  render() {
    return <div>
      <RequiredComponent />
      <NewComponent />
    </div>;
  }
}
