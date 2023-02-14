import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Firm from "../screen/screenN/Firm";
import Series from "../screen/screenN/Series";
import Origin from "../screen/screenN/Origin";
import { Dimensions,View,Image,StyleSheet,Text, Platform } from "react-native";
import { Ionicons,FontAwesome } from "@expo/vector-icons";
import BottomNavigation from "./BottomNavigation";
import { StatusBar } from "expo-status-bar";
import HomeScreen from "../screen/homeScreen";
import { LargeCard } from "../screen/screenN/largeCard";
import WatchTrailer from "../screen/screenN/WatchTrailer";


const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;



const { Navigator,Screen } = createMaterialTopTabNavigator()

export default function TopheaderNavbar(){
        return(
          <>                
      <StatusBar style="light"/>
  <View style={{backgroundColor:'#222222',width:width,paddingLeft:10,paddingRight:10,paddingTop:Platform.OS==='android'?20:20}}>
        <View style={{ flexDirection:'row',justifyContent:'space-between'}}>
        <View style={styles.content}>
                <View>
                <Image source={require('../screen/image/logo6.png')}
                  style={{width:40,
                    height:34,
                    marginTop:10,
                    marginRight:5,
                    borderRadius:6
                  }}/>
                </View>
            <View>
            <Text style={{
                fontSize:28,
                color:'#ffffff',
                fontWeight:'bold',
                marginTop:8
            }}>
                Muvi
            </Text>
            </View>
         </View>
         <View style={{ flexDirection:'row', marginTop:13,alignItems:'stretch'}}>
         <FontAwesome name="bookmark-o" size={18} color="white"  style={{marginRight:15}}/>
         <Ionicons name="ios-notifications-outline" size={18} color="white"  style={{marginRight:15}} />
         </View>
        </View>
        </View>
                  <Navigator
                    initialRouteName="Feature"
                    screenOptions={{
                   tabBarLabelStyle: { fontSize: 11,fontWeight:'bold' ,color:'white',padding:2},
                   tabBarItemStyle: { width: 96,padding:1,margin:0 },
                   tabBarStyle: { backgroundColor: '#222222' },
                   tabBarActiveTintColor:'#e5a50a',
                   tabBarInactiveTintColor:'white',
                   tabBarPressColor:'none',
                   tabBarIndicatorStyle:{
                    width:35,
                    padding:2,
                    borderRadius:3,
                    backgroundColor:'#e5a50a',
                    marginLeft:30,
                    display:'flex',
                    justifyContent:'center'
                   }
                   
                }}>
                    <Screen  name="Feature" component={LargeCard}/>
                    <Screen  name="Series" component={WatchTrailer}/>
                    <Screen  name="Firm" component={Firm}/>
                    <Screen  name="Origin" component={Origin}/>
                </Navigator>
                </>
               
        )
}

const styles = StyleSheet.create({
        container:{
            backgroundColor:'#0F1417',
            height:height,
      
        },
        content:{
            flexDirection:'row'
        },
      })