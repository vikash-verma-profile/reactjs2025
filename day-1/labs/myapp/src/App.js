import "./App.css";
import React from "react";

// functional component
// function App() {
//   return (
//    <>Vikash Verma</>
//   );
// }

// export default App;

//class component
class App extends React.Component {
  constructor() {
    super();

    this.state = { count: 0 };
    this.increment = this.increment.bind(this);
    this.reset = this.reset.bind(this);
  }
  increment() {
    this.setState({ count: this.state.count + 1 });
  }
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
export default App;
