import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AuthProvider from './contex/AuthProvider';
import Footer from './components/common/Footer/Footer';
import Header from './components/common/Header/Header';
import Home from './components/Home/Home';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import MyOrdes from './components/MyOrders/MyOrdes';
import ManageAllOrders from './components/ManageAllOrders/ManageAllOrders';
import NotFound from './components/NotFound/NotFound';
import Login from './components/common/UserAuthentication/Login/Login';
import Register from './components/common/UserAuthentication/Register/Register';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route path="/home">
            <Home></Home>
          </Route>
          <PrivateRoute path="/myOrder">
            <MyOrdes></MyOrdes>
          </PrivateRoute>

          <PrivateRoute path="/manageAllOrders">
            <ManageAllOrders></ManageAllOrders>
          </PrivateRoute>

          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
           <Register></Register>
          </Route>
          <PrivateRoute path="/offer/:id">
            
          </PrivateRoute>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
      <Footer></Footer>
      </AuthProvider>
  );
}

export default App;
