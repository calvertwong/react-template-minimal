import {render} from '@testing-library/react';
import {BrowserRouter as Router} from 'react-router-dom';
import {RegisterWithRouter} from './Register';
import {FEATURE_NAMES} from '../../constants/AppConstants'

describe('Register UI test', () => {
  test('should render register component', () => {
    const view = render(<Router><RegisterWithRouter /></Router>)
    view.getByText(FEATURE_NAMES.REGISTER)
    view.getByAltText('company logo')
    view.getByText('First Name:')
    view.getByText('Last Name:')
    view.getByText('Birth Date:')
    view.getByText('Gender:')
    view.getByText('Email:')
    view.getByText('Password:')
    view.getByText('Register now')
  })
})
