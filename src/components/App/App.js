import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import "../../styles/global.scss";
import history from "../../history";
import { Home, Instructions, ChooseTheme, GamePage } from "../../pages";
import { Header } from "../../components";

const App = () => {
    return (
        <Router history={history}>
            <Header />
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/instructions' component={Instructions} />
                <Route path='/theme' component={ChooseTheme} />
                <Route path='/game' component={GamePage} />
            </Switch>
        </Router>
    );
};

export default App;
