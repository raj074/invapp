import { BrowserRouter as Router, Route, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import Login from "./pages/login";
import Register from "./pages/register";
import Home from "./pages/home";
import Intro from "./pages/registration";
import PageRender from './customRouter/PageRender';
import Alert from './components/alert/Alert';
import { refreshToken } from './redux/actions/authAction';
import Header from './components/header/Header';
import PrivateRouter from './customRouter/PrivateRouter';

function App() {
  const { auth, intro } = useSelector((state) => state);
    const dispatch = useDispatch();
    const history = useHistory();

   

    useEffect(() => {
      dispatch(refreshToken());

    }, [dispatch]);

  

  return (
    <Router>
      <Alert />
      <input type="checkbox" id="theme" />
      <div className="App">
        <div className="main">
          
          {auth.token && intro === false && <Intro /> }
          
          {/* {auth.token && intro === false ? <Intro /> : (auth.token && <Header />) } */}
          
          <Route exact path="/" component={auth.token ? Home : Login} />
          <Route exact path="/register" component={Register} />
          <div className="wrap_page">
            <PrivateRouter exact path="/:page" component={PageRender} />
            <PrivateRouter exact path="/:page/:id" component={PageRender} />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
