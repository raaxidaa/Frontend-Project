import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Investor from './Pages/Investor';
import Startups from './Pages/Startups';
import Jobs from './Pages/Jobs';
import BrowseSturtups from './Pages/BrowseSturtups';
import SeekFunding from './Pages/SeekFunding';
import Login from './Pages/Login';
import SignIn from './Pages/SignIn';

const App = () => {
    return (
        <Router>
            <div>
                <Navbar />
                <Switch>
                    <Route path="/" exact component={ Investor} />
                    <Route path="/startups" component={Startups} />
                    <Route path="/jobs" component={Jobs} />
                    <Route path="/browsestartups" component={BrowseSturtups} />
                    <Route path="/browsestartups" component={BrowseSturtups} />
                    <Route path='/seekfunding' component={SeekFunding} />
                    <Route path='/login' component={Login} />
                    <Route path='/signup' component={SignIn} />

                </Switch>
            </div>
        </Router>
    );
};

export default App;


