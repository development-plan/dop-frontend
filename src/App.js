import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import Home from './views/Home';
import Footer from './components/Footer';
import Search from './views/Search';
import Account from './views/Account';
import Notice from './views/Notice';

const HomeNav = createStackNavigator({
    Home: { screen: Home }
});

const NoticeNav = createStackNavigator({
    Notification: { screen: Notice }
});

const Nav = createBottomTabNavigator(
    {
        Home: HomeNav,
        Search: { screen: Search },
        Notice: NoticeNav,
        Account: { screen: Account }
    },
    {
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, tintColor }) => Footer(navigation, focused, tintColor)
        }),
        tabBarOptions: {
            showLabel: false,
            activeTintColor: '#212121',
            inactiveTintColor: '#bdbdbd'
        }
    }
);

export default createAppContainer(Nav);
