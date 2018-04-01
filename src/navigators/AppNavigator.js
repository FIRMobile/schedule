import { StackNavigator } from 'react-navigation';
import MainScreen from '../containers/MainScreen-container';
import GroupScreen from '../containers/GroupScreen-container';

const AppNavigator = StackNavigator(
    {
        Main: { screen: MainScreen },
        Group: { screen: GroupScreen },
    },
    {
        navigationOptions: { header: null },
    },
);

export default AppNavigator;
