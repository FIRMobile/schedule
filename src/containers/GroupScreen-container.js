import { connect } from 'react-redux';
import GroupScreen from '../components/GroupScreen';
import groupReducer from '../reducer/group-reducer';


export default connect(
  state => ({
  
  }),
  dispatch => ({
    onOpenMain:()=>{
        dispatch(groupReducer.openMain());
        console.log('-');
      }   
  }),
)(GroupScreen);
