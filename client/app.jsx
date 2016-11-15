import React, { Component } from 'react';
import { observer } from 'mobx-react';
import DevTools from 'mobx-react-devtools';

@observer
class App extends Component {
  render() {
    return (
      <div>
        <button onClick={this.onReset}>
          Seconds passed: {this.props.store.timer}
        </button>
        <DevTools />
      </div>
    );
  }

  onReset = () => {
    this.props.store.resetTimer();
  }
};

export default App;