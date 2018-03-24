import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import main from './main-reducer';
import search from './search-reducer';
import nav from './nav-reducer';


const rootReducer = combineReducers({
    main,
    search,
    nav,
    form,
});

export default rootReducer;
