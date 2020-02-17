import React,{ Suspense,} from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
   
    Link
} from "react-router-dom";
const App = React.lazy(() => import('./App'));
const Home = React.lazy(() => import('./Home'));
//import Home from './Home';
export default function AApp() {
    return (
        <Router>
            <Suspense fallback={<div>Loading...</div>}>
                <Switch>

                    <Route path="/Home">
                        <Home />
                    </Route>
                    <Route path="/App">
                        <App />
                    </Route>

                </Switch>
            </Suspense>
        </Router>
    );
}
