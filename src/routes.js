import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';

import Main from './pages/Main';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

import Profile from './pages/Profile';
import EditProfile from './pages/EditProfile';

export default (isSigned = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Sign: createSwitchNavigator({
          Main,
          SignIn,
          SignUp,
        }),
        App: createMaterialBottomTabNavigator(
          {
            Profile,
            EditProfile,
          },
          {
            keyboardHidesNavigationBar: true,
            activeColor: '#fff',
            inactiveColor: 'rgba(255, 255, 255, 0.6)',
            barStyle: {backgroundColor: 'rgb(50, 127, 290)'},
          },
        ),
      },
      {
        initialRouteName: isSigned ? 'App' : 'Sign',
      },
    ),
  );
