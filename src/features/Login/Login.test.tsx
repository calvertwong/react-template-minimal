import {render} from '@testing-library/react';
import {BrowserRouter as Router} from 'react-router-dom';
import {LoginWithRouter} from './Login';
import {FEATURE_NAMES} from '../../constants/AppConstants'

describe('Login UI test', () => {
  test('should render login component', () => {
    const view = render(<Router><LoginWithRouter /></Router>)
    view.getByText(FEATURE_NAMES.LOGIN)
    view.getByAltText('company logo')
    view.getByText('Email:')
    view.getByText('Password:')
  })
})