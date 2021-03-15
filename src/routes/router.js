import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from '../containers/login';
import Sign from '../containers/sign';

export default function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact={true} path="/login" component={Login}/>
                <Route path="/sign" component={Sign} />
            </Switch>
        </BrowserRouter>
    )
}