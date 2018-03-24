import { connect } from 'react-redux';
import MainScreen from '../components/MainScreen';
import mainReducer from '../reducer/main-reducer';


export default connect(
  state => ({
  
  }),
  dispatch => ({
    onOpenSearch: ()=>{
      dispatch(mainReducer.openSeach());
      console.log('+');
    }

  }),
)(MainScreen);
