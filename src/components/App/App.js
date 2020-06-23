import React, { useState } from "react";
import { Router, Route, Switch } from "react-router-dom";
import "../../styles/global.scss";
import history from "../../history";
import { Home, Instructions, ChooseTheme, GamePage } from "../../pages";
import { Header } from "../../components";
import { ThemeContext } from "../../ThemeContext";

const App = () => {
    const [theme, setTheme] = useState("blue");

    return (
        <Router history={history}>
            <div className={`theme-${theme}`}>
                <Header />
                <Switch>
                    <ThemeContext.Provider value={{ theme, setTheme }}>
                        <Route path='/' exact component={Home} />
                        <Route path='/instructions' component={Instructions} />
                        <Route path='/theme' component={ChooseTheme} />
                        <Route path='/game' component={GamePage} />
                    </ThemeContext.Provider>
                </Switch>
            </div>
        </Router>
    );
};

export default App;
