import React, { Component } from 'react';

const StoreContext = React.createContext();

class StoreProvider extends Component {
  state = {
    showMessageBox: false,
    message: null,
};
render() {
    return (
    <StoreContext.Provider value={{
        state: this.state,
        setMessage: (msg) => this.setState({ message: msg }),
        toggleMessageBox: () => this.setState({ showMessageBox: !this.state.showMessageBox }),
      }}>
      {this.props.children}
    </StoreContext.Provider>);
  }
}

const store = {
    StoreProvider,
    StoreContext
}

export default store;