import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from '../containers/login';
import Menu from '../containers/menu';

export default function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/login" component={Login}/>
                <Route path="/sign" component={Menu} />
            </Switch>
        </BrowserRouter>
    )
}