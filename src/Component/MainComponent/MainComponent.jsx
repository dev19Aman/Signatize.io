import Home from "../../Pages/Home/Navbar";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Login from "../../Pages/Login/Login";
import Signup from "../../Pages/Login/SingnUp";
import PrivateRoute from "../../Utils/PrivateRoutes";
import EditMyProfile from "../../Pages/Login/EditMyProfile";
import CreateSignature from "./CreateSignature/index";

function MainComponent() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <PrivateRoute path="/home" component={Home} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/edit" component={EditMyProfile} />
          <Route exact path="/createSignature" component={CreateSignature} />
        </Switch>
      </Router>
    </>
  );
}

export default MainComponent;
