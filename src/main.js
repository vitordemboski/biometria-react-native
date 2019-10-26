import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import Login from './Login';
import App from './App';
const NavSwitch = createSwitchNavigator({
  Login,
  App,
})

export default createAppContainer(NavSwitch);