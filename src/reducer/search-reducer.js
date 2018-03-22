import {
  SEARCH_OPEN_MAIN,
}from '../utils/actions';

export default function search(
    state = {
      isLoggedIn: false,
      isReadyBot: false,
    },
    action = {},
  ) {
    switch (action.type) {
      default:
        return state;
    }
  }
  
  search.openMain=()=>(dispatch)=>{
    dispatch({
      type:SEARCH_OPEN_MAIN,
    });
  }