import {
  GROUP_OPEN_MAIN,
}from '../utils/actions';

export default function group(
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
  
  group.openMain=()=>(dispatch)=>{
    dispatch({
      type:GROUP_OPEN_MAIN,
    });
  }