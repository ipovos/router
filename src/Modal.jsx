import React from 'react';
import ReactDOM from 'react-dom';
import { modal } from './index';

export class Modal extends React.Component {
  render() {
    return ReactDOM.createPortal(
      this.props.children,
      modal,
    );
  }
}
