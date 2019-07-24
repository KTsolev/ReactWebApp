import React, { Component } from 'react';
import store from '../Store/StoreProvider';
import './MessageBox.scss'

const { StoreContext } = store;

class BoxMessage extends Component {
  render() {
      return <StoreContext.Consumer>
               {( context ) => {
                 let box = <div className={context.state.showMessageBox ? 'messageBoxHolder show' : 'messageBoxHolder hide'}>
                      <div className="messageBox">
                        <span>{context.state.message}</span>
                      </div>
                  </div>;
                 return box;
               }}
            </StoreContext.Consumer>;
  }
}

export default BoxMessage;