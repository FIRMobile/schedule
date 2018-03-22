import {
  MAIN_OPEN_SEARCH,
}from '../utils/actions';

export default function main(
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

  main.openSeach=()=>(dispatch)=>{
    dispatch({
      type:MAIN_OPEN_SEARCH,
    });
  }
  
