import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import main from './main-reducer';
import group from './group-reducer';
import nav from './nav-reducer';


const rootReducer = combineReducers({
    main,
    group,
    nav,
    form,
});

export default rootReducer;
