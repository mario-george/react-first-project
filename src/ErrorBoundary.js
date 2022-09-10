import { Component } from "react";
import { Link, Navigate } from "react-router-dom";
//error boundary is checking a code for errors nextjs puts all the code in error boundary
//for error boundray you have to use a class component.
class ErrorBoundary extends Component {
  state = { hasError: false, redirect: false  };
  static getDerivedStateFromError() {
    //this is a specific name for a function that react can then call when error happens it modifies the state
//componentDidUpdate is the same as useEffect but you specify which state you will be responding to and useEffect always start at first
    return { hasError: true};//this gets passed directly to this.setState instead of react
  }
  compnentDidCatch(error, info) {
    console.error(error, info);
  }
  componentDidUpdate() {
    //this willbe invoked whenever state or prps get updated
    if (this.state.hasError)
      setTimeout(() => {
        this.setState({ redirect: true });
      }, 5000);
  }
  render() {
    if (this.state.redirect) {
      return <Navigate to="/" />;
    } else if (this.state.hasError) {
      return (
        <h2>
          An Error Happened please <Link to="/">click here</Link> to Return to
          homepage or wait 5 seconds we will do it automatically for you{" "}
        </h2>
      );
    }
    return this.props.children;
  }
}
//children is a special named key for whatever came in between the error boundary tags
//{" "} gets added automatically by prettier so that a new line wont happen
export default ErrorBoundary;
