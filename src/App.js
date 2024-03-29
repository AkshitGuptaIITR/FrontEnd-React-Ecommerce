import React, { useEffect } from 'react';
import { Route, Switch } from "react-router-dom";
import Home from './containers/Home';
import Signin from './containers/Signin';
import Signup from './containers/Signup';
import PrivateRoute from './components/HOC/PrivateRoute';
import { useDispatch, useSelector } from 'react-redux';
import { isUserLoggedIn } from './actions/auth';
import Products from './containers/Products';
import orders from './containers/orders';
import category from './containers/category';
import { getAllCategory } from './actions';
import { getInitialData } from './actions/initialData.action';

function App() {

  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);

  useEffect(() => {
    if (!auth.authenticate) {
      dispatch(isUserLoggedIn());
      dispatch(getInitialData());
    }
  }, []);

  return (
    <div className="app">
      {/* Router => Switch => Route this is the order to use the inter connection of the pages. */}
      <Switch>
        <PrivateRoute path="/" exact component={Home} />
        <PrivateRoute path='/products' component={Products} />
        <PrivateRoute path='/orders' component={orders} />
        <PrivateRoute path='/category' component={category} />
        <Route path="/signin" component={Signin} />
        <Route path="/signup" component={Signup} />
      </Switch>
    </div>
  );
}

export default App;
