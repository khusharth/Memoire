import React, { useEffect } from "react";
import { Router, Route, Switch } from "react-router-dom";
import "../../styles/global.scss";
import history from "../../history";
import { Home, Instructions, ChooseTheme, GamePage } from "../../pages";
import { Header } from "../../components";
import { ThemeContext } from "../../ThemeContext";
import useTheme from "../../useTheme";
import Footer from "../Footer/Footer";

const App = () => {
    const [theme, setTheme] = useTheme("blue", "Theme");

    useEffect(() => {
        const getTheme = localStorage.getItem('Theme');
        console.log(getTheme);
        if (getTheme === 'green') {
            setTheme('green');
        } else if (getTheme === 'brown') {
            setTheme('brown');
        } else {
            setTheme('blue');
        }
    }, []);

    return (
        <Router history={history}>
            <div className={`theme-${theme}`}>
                <ThemeContext.Provider value={{ theme, setTheme }}>
                    <Header />
                    <Switch>

                        <Route path='/' exact component={Home} />
                        <Route path='/instructions' component={Instructions} />
                        <Route path='/theme' component={ChooseTheme} />
                        <Route path='/game' component={GamePage} />
                    </Switch>
                    <Footer />
                </ThemeContext.Provider>
            </div>
        </Router>
    );
};

export default App;
