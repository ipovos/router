import React from 'react';
import {
  Link,
  Route,
  Redirect,
  useLocation,
  useHistory,
  NavLink,
} from 'react-router-dom';

const authService = {
  hasSubscription: false,
  subscribe(callback) {
    authService.hasSubscription = true;
    setTimeout(callback, 1000);
  },
  unsubscribe(callback) {
    authService.hasSubscription = false;
    setTimeout(callback, 1000);
  },
};

function PrivateRoute({ component, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) => {
        if (authService.hasSubscription) {
          return component;
        }

        return (
          <Redirect
            to={{
              pathname: '/subscribe',
              state: {
                from: location,
              },
            }}
          />
        );
      }}
    />
  );
}

export default class AppNext extends React.Component {
  render() {
    return (
      <article>
        <nav>
          <p>
            <NavLink
              activeStyle={{
                background: 'green',
              }}
              to="/subscribe"
            >
              Subscribe
            </NavLink>
          </p>
          <p>
            <NavLink
              activeStyle={{
                background: 'green',
              }}
              to="/contact"
            >
              Contact
            </NavLink>
          </p>
          <p>
            <NavLink
              activeStyle={{
                background: 'green',
              }}
              to="/expensive-feature"
            >
              Cool super feature
            </NavLink>
          </p>
        </nav>
        <div>
          <Route
            path="/subscribe"
            component={SubscribePage}
          />
          <Route path="/contact" component={ContactPage} />
          {/* <Route
            path="/expensive-feature"
            component={CoolFeaturePage}
          /> */}
          <PrivateRoute
            path="/expensive-feature"
            component={<CoolFeaturePage />}
          />
          <PrivateRoute
            path="/cheap-feature"
            component={<CheapFeaturePage />}
          />
        </div>
      </article>
    );
  }
}

function ContactPage() {
  return <h1>Contact page</h1>;
}

function CoolFeaturePage() {
  return <h1>Cool page</h1>;
}

function CheapFeaturePage() {
  return <h1>Cheap feature page</h1>;
}

function SubscribePage(props) {
  const location = useLocation();
  const history = useHistory();

  console.log(history);

  return (
    <button
      type="button"
      onClick={() =>
        authService.subscribe(() => {
          history.replace(location.state.from);
        })
      }
    >
      Subscribe
    </button>
  );
}
