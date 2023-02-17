import { createStackNavigator } from "@react-navigation/stack";
import WelcomeScreen from "../screen/welcomeScreen";
import AppScreen from "../screen/appScreen";
import SigninScreen from "../screen/loginScreen";
import NextScreen from '../screen/NestScreen'
import SignupScreen from "../screen/signupScreen";
import TopheaderNavbar from "./topHeaderNavbar";
import BottomNavigation from "./BottomNavigation";
import Detail from "../screen/screenN/DetailScreen";
import WatchTrailer from "../screen/screenN/WatchTrailer";
import { useDispatch, useSelector } from "react-redux";
import React from "react";
import { getItemAsync } from "expo-secure-store";
import HomeScreen from "../screen/homeScreen";
import EditProfile from "../screen/screenN/EditProfile";
import { store,signIn as storedata } from "../../features/authSlice";


const { Navigator, Screen } = createStackNavigator();

export default function RouterNavigation() {
    const dispatch = useDispatch
    const isAuthenticated = useSelector((state) => state.authactor.isLoggedin);

    React.useEffect(() => {
        getItemAsync("userToken").then((data) => {
            console.log(data, "data from storage")
            dispatch(store(data))
        }).catch((err) => {
            console.log(err)
        })
        getItemAsync("userdata").then((res)=>{
            dispatch(storedata(res)).catch((err)=>{
                console.log(err)
            })
        }) },[])
    return (
        <Navigator initialRouteName="appscreen" screenOptions={{ headerShown: false }}>

            {
                isAuthenticated  == true ? (
                    <>
                        <Screen name="home" component={BottomNavigation} options={{ headerShown: false }} />
                        <Screen name="edit" component={ EditProfile } options={{ headerShown: false }} />
                        <Screen name="detail" component={Detail} options={{ headerShown: false }} />
                        <Screen name="watch" component={WatchTrailer} options={{ headerShown: false }} />
                    </>
                ) : (
                    <>
                        <Screen name="appscreen" component={WelcomeScreen} options={{ headerShow: false }} />
                        <Screen name="app" component={AppScreen} options={{ headerShown: false }} />
                        <Screen name="next" component={NextScreen} options={{ headerShown: false }} />
                        <Screen name="login" component={SigninScreen} options={{ headerShown: false }} />
                        <Screen name="signup" component={SignupScreen} options={{ headerShown: false }} />
                    </>
                )
            }
        </Navigator>
    );
}