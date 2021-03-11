import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from '../containers/login';

export default function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Login}/>
            </Switch>
        </BrowserRouter>
    )
}