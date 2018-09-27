import React, { Component } from "react";

/**
 * ErrorBoudary
 */
export default class ErrorBoundary extends React.Component {
  state = {
    hasError: false,
    error: null,
    errorInfo: null
  };

  componentDidCatch(error, info) {
    // Display fallback UI
    this.setState({ hasError: true });
    // You can also log the error to an error reporting service
    logErrorToMyService(error, info);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div>
          <h1>Something went wrong.</h1>
          <p>{this.state.error}</p>
          <p>{this.state.errorInfo}</p>
        </div>
      );
    }
    return this.props.children;
  }
}
