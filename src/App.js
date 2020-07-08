import React from 'react';
import './App.css';

import { NavLink, Route, Switch } from 'react-router-dom';

// import { Modal } from './Modal';

// class App extends React.Component {
//   state = {
//     isModalVisible: false,
//   };

//   toggleModal = () => {
//     this.setState((prevState) => ({
//       isModalVisible: !prevState.isModalVisible,
//     }));
//   };

//   render() {
//     return (
//       <div
//         style={{ overflow: 'hidden' }}
//         onClick={(event) => {
//           console.log(event);
//         }}
//       >
//         <h1>App</h1>
//         <button type="button" onClick={this.toggleModal}>
//           Buy!
//         </button>
//         {this.state.isModalVisible && (
//           <Modal>
//             <div
//               style={{
//                 position: 'absolute',
//                 top: 0,
//                 right: 0,
//                 left: 0,
//                 bottom: 0,
//                 background: 'rgba(0,0,0,0.5)',
//               }}
//               onClick={(event) => {
//                 console.log('перехват');
//                 event.stopPropagation();
//               }}
//             >
//               <p>Buy form</p>
//               <input type="text" />
//               <button
//                 button="button"
//                 onClick={this.toggleModal}
//               >
//                 Close (x)
//               </button>
//             </div>
//           </Modal>
//         )}
//       </div>
//     );
//   }
// }

function HomePage(props) {
  return (
    <article>
      <h1>Cool Lesson</h1>
      <p>Right now!</p>
    </article>
  );
}

function ContactPage(props) {
  console.log(props);
  return (
    <article>
      <h1>Contact</h1>
      <address>Kyiv City, Ukraine</address>
    </article>
  );
}

class ProductPage extends React.Component {
  state = {
    product: null,
  };

  componentDidMount = () => {
    this.fetchData();
  };

  componentDidUpdate() {
    this.fetchData();
  }

  fetchData = () => {
    setTimeout(() => {
      this.setState({
        product: this.props.match.params.productId,
      });
    }, 1000);
  };

  render() {
    return (
      <article>
        <h1>Product</h1>
        <div>
          <b>{this.props.match.params.productId}</b>
        </div>
        <NavLink to="/product/60">60</NavLink>
        {this.state.product ? (
          <p>{this.state.product}</p>
        ) : (
          'loading...'
        )}
      </article>
    );
  }
}

function ContactNextPage(props) {
  return (
    <article>
      <h1>Contact next</h1>
      <NavLink to={`${props.location.pathname}/buy`}>
        Buy
      </NavLink>
      <address>Prague, Czech Republic</address>
      <Route
        path={`${props.location.pathname}/buy`}
        component={() => <p>Buy</p>}
      />
    </article>
  );
}

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Application</h1>
        <ul>
          <li>
            <NavLink
              activeStyle={{
                background: 'red',
              }}
              exact={true}
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              activeStyle={{
                background: 'red',
              }}
              exact={true}
              to="/about"
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              activeStyle={{
                background: 'red',
              }}
              exact={true}
              to="/contact"
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              activeStyle={{
                background: 'red',
              }}
              exact={true}
              to="/product/42"
            >
              Product
            </NavLink>
          </li>
          <li>
            <NavLink
              activeStyle={{
                background: 'red',
              }}
              exact={true}
              to="/contact/next"
            >
              Contact next
            </NavLink>
          </li>
        </ul>
        <div>
          <Switch>
            <Route
              exact
              path="/"
              component={() => <p>Slash</p>}
            />
            <Route
              path="/contact/next"
              component={ContactNextPage}
            />
            <Route
              path="/contact"
              component={ContactPage}
            />
            <Route
              path="/product/:productId"
              component={ProductPage}
            />
            <Route
              path="/new"
              component={() => <p>Last component</p>}
            />
            <Route
              path="*"
              component={() => <p>Error: 404</p>}
            />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
