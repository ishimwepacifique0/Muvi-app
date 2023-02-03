import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screen/homeScreen";
import { Feather,Ionicons,MaterialCommunityIcons,AntDesign } from "@expo/vector-icons";
import Series from "../screen/screenN/Series";
import Firm from "../screen/screenN/Firm";
import Profile from "../screen/screenN/Feature";


const { Navigator,Screen} = createBottomTabNavigator();

export default function BottomNavigation(){
    return(
        <Navigator initialRouteName="homescreen"
        screenOptions={{
            tabBarShowLabel:false,
            headerShown:false,
            tabBarStyle:{
                backgroundColor:'black',
                padding:5,
                borderColor:'none',
                borderWidth:0

            },
            tabBarInactiveTintColor:'yellow',
            
        }}
        >
            <Screen  
            name="homescreen" 
            component={HomeScreen}
            options={{
                tabBarIcon:()=>{
                    return <Feather name="home" size={26} color={'#fff'}/>
                }
                
            }}
            />
            <Screen  
            name="fea" 
            component={Series}
            options={{
                tabBarIcon:()=>{
                    return <Ionicons name="search" size={26} color="#fff" />
                }
                
            }}
            />
            <Screen  
            name="fea3" 
            component={Firm}
            options={{
                tabBarIcon:()=>{
                    return <MaterialCommunityIcons name="folder-outline" size={26} color="#fff" />
                }
                
            }}
            />
             <Screen  
            name="fea5" 
            component={ Profile }
            options={{
                header:() => null,
                tabBarIcon:()=>{
                    return <AntDesign name="appstore-o" size={26} color="#fff" />
                }
                
            }}
            />
        </Navigator>
    )
}