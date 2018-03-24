import { connect } from 'react-redux';
import SearchScreen from '../components/SearchScreen';
import searchReducer from '../reducer/search-reducer';


export default connect(
  state => ({
  
  }),
  dispatch => ({
    onOpenMain:()=>{
        dispatch(searchReducer.openMain());
        console.log('-');
      }   
  }),
)(SearchScreen);
