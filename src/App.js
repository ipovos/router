import React from 'react';
import './App.css';
import { Modal } from './Modal';

class App extends React.Component {
  state = {
    isModalVisible: false,
  };

  toggleModal = () => {
    this.setState((prevState) => ({
      isModalVisible: !prevState.isModalVisible,
    }));
  };

  render() {
    return (
      <div style={{ overflow: 'hidden' }}>
        <h1>App</h1>
        <button type="button" onClick={this.toggleModal}>
          Buy!
        </button>
        {this.state.isModalVisible && (
          <Modal>
            <div
              style={{
                position: 'absolute',
                top: 0,
                right: 0,
                left: 0,
                bottom: 0,
                background: 'rgba(0,0,0,0.5)',
              }}
            >
              <p>Buy form</p>
              <input type="text" />
              <button
                button="button"
                onClick={this.toggleModal}
              >
                Close (x)
              </button>
            </div>
          </Modal>
        )}
      </div>
    );
  }
}

export default App;
