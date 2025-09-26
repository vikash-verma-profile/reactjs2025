import React from "react";

class LifecycyleDemo extends React.Component {
  /**
   *
   */
  constructor(props) {
    super(props);

    this.state = { count: 0 };
    this.increment = this.increment.bind(this);
    this.reset = this.reset.bind(this);
    console.log("Constructore: Inistalized the state");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps :Sync state with prpops if needed");
    return null;
  }
  componentDidMount() {
    console.log("componentDidMount: Component mounted");
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate:Decide if re-render is needed");
    return true;
  }

  getSnapshotBeforeUpdate(nextProps, nextState) {
    console.log("getSnapshotBeforeUpdate:Capture DOM info before update");
    return null;
  }
  componentDidUpdate(nextProps, nextState, snapshot) {
    console.log("componentDidUpdate:Component updated");
  }
  componentWillUnmount() {
    console.log("componentDidUpdate:Clean up before removal");
  }
  componentDidCatch(error, info) {
    console.log(
      "componentDidCatch:Error caught in child component",
      error,
      info
    );
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };
  reset() {
    this.setState({ count: 0 });
  }
  render() {
    return (
      <div>
        <h1>Count :{this.state.count}</h1>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.reset}>Reset</button>
      </div>
    );
  }
}

export default LifecycyleDemo;
