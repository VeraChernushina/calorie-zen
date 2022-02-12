import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ ...props, component: Component }) => {
  return <Route>
    {() => {
      props.loggedIn ? <Component {...props} /> : <Redirect to='/login' />
    }}
  </Route>;
};

export default ProtectedRoute;
