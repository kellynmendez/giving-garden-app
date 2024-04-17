import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 
import Login from './pages/Login'

export const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path="/login" element={<Login setLoggedIn={setLoggedIn} setEmail={setEmail} />} />
                <Route path="/">
                    <Login/>
                </Route>
            </Switch>
        </Router>
    )
}