import { createStackNavigator } from "@react-navigation/stack";
import WelcomeScreen from "../screen/welcomeScreen";
import AppScreen from "../screen/appScreen";
import SigninScreen from "../screen/loginScreen";
import NextScreen from '../screen/NestScreen'
import SignupScreen from "../screen/signupScreen";
import TopheaderNavbar from "./topHeaderNavbar";

const { Navigator,Screen } = createStackNavigator();

export default function RouterNavigation(){
    return(
         <Navigator initialRouteName="appscreen"  screenOptions={{headerShown:false}}>
            <Screen  
            name="appscreen"
             component={WelcomeScreen}
             options={{headerShow:false}}
             />
            <Screen  name="app" component={AppScreen} options={{headerShown:false}} />
            <Screen  name="next" component={NextScreen} options={{headerShown:false}}/>
            <Screen  name="login" component={SigninScreen} options={{headerShown:false}} />
            <Screen  name="signup" component={SignupScreen} options={{headerShown:false}}/>
            <Screen  name="home" component={ TopheaderNavbar } options={{headerShown:false}}/>
         </Navigator>
    );
}