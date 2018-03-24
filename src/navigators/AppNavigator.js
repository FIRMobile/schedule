import { StackNavigator } from 'react-navigation';
import MainScreen from '../containers/MainScreen-container';
import SearchScreen from '../containers/SearchScreen-container';

const AppNavigator = StackNavigator(
    {
        Main: { screen: MainScreen },
        Search: { screen: SearchScreen },
    },
    {
        navigationOptions: { header: null },
    },
);

export default AppNavigator;
