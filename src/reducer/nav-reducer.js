import { NavigationActions } from 'react-navigation';

import AppNavigator from '../navigators/AppNavigator';

import {
    APP_INIT,
    MAIN_OPEN_SEARCH,
} from '../utils/actions';


const secondAction = AppNavigator.router.getActionForPathAndParams('Main');
const initialNavState = AppNavigator.router.getStateForAction(secondAction);

export default function nav(state = initialNavState, action) {
    let nextState;
    switch (action.type) {
        case APP_INIT:
            nextState = AppNavigator.router.getStateForAction(
                NavigationActions.back(),
                state,
            );
            break;
        case MAIN_OPEN_SEARCH:
            nextState = AppNavigator.router.getStateForAction(
                NavigationActions.navigate({ routeName: 'Search' }),
                state,
            );
            break;
        default:
            nextState = AppNavigator.router.getStateForAction(action, state);
            break;
    }

    return nextState || state;
}
