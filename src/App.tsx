import {
	BrowserRouter as Router,
	Route,
	Switch
} from 'react-router-dom';

import {LoginWithRouter} from './features/Login/Login';
import {RegisterWithRouter} from './features/Register/Register';
import {LOGIN_PATH, REGISTER_PATH} from './navigation/AppPaths';

function App() {
	return (
		<Router>
			<Switch>
				<Route path={LOGIN_PATH} component={LoginWithRouter} />
				<Route path={REGISTER_PATH} component={RegisterWithRouter} />
				{/* add 404 component */}
				{/* <Route path='*' component={404} /> */}
			</Switch>
		</Router>
	);
}

export default App;
