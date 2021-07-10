import {
	BrowserRouter as Router,
	Route,
	Switch
} from 'react-router-dom';

import {LoginWithRouter} from './features/Login/Login';
import {RegisterWithRouter} from './features/Register/Register';
import {AppPaths} from './navigation/AppPaths';

function App() {
	return (
		<Router>
			<Switch>
				<Route path={AppPaths.LOGIN_PATH} component={LoginWithRouter} />
				<Route path={AppPaths.REGISTER_PATH} component={RegisterWithRouter} />
				{/* add 404 component */}
				{/* <Route path='*' component={404} /> */}
			</Switch>
		</Router>
	);
}

export default App;
