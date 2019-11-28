import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import Home from './views/Home';
import Footer from './components/Footer';
import Search from './views/Search';
import Account from './views/Account';
import Notice from './views/Notice';
import Post from './views/Post';

const HomeNav = createStackNavigator({
    Home: { screen: Home },
    Post: { screen: Post }
});

const NoticeNav = createStackNavigator({
    Notice: { screen: Notice }
});

const SearchNav = createStackNavigator({
    Search: { screen: Search }
});

const Nav = createBottomTabNavigator(
    {
        Home: HomeNav,
        Search: SearchNav,
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
