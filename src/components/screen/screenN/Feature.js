import { View, Text, StyleSheet, Image, StatusBar, Dimensions, Pressable } from 'react-native'
import React from 'react'
import { Octicons, Feather, MaterialIcons, AntDesign, Entypo } from '@expo/vector-icons';
import { Deleteuser, signout } from '../../../features/authSlice'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getItemAsync } from 'expo-secure-store';


const height = Dimensions.get('screen').height;
const Profile = ({navigation}) => {
  const [userData, setUserData] = React.useState({})

  React.useEffect(() => {
    Getdatafromstorage()
  }, [])

  const Getdatafromstorage = () => {
    getItemAsync("usedata").then((data) => {
       const datacon =  JSON.parse(data)
      setUserData(datacon.insertedUser)
      
    }).catch(erro => console.log(erro))
  }

  const deleteacccount = () =>{
    const data = {
      _id:userData._id
    }
    console.log(data)
    dispatch(Deleteuser(data))
  }

  const dispatch = useDispatch()


  return (
    <View style={StyleSheet.container}>
      <View style={{
        backgroundColor: '#012',
        paddingVertical: 40,
      }}>
        <Image source={{
          uri: 'https://cdn.hswstatic.com/gif/play/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg'
        }}
          style={{
            width: 100,
            height: 100,
            borderRadius: 100,
            marginLeft: 125,

          }}
        />
        <View>
          <Text style={{ color: 'white', fontWeight: 'bold', alignSelf: 'center' }}>{userData.username}</Text>
          <Text style={{ color: 'white', fontWeight: 'bold', alignSelf: 'center' }}>{userData.email}</Text>
          <Text style={{ color: '#e5a50a', fontWeight: 'bold', alignSelf: 'center' }}
          onPress={()=>(navigation.navigate('edit',userData))}
          >Edit Profile</Text>

        </View>
      </View>
      <View style={styles.containerprofile}>
        <View style={styles.label}>
          <Octicons name="inbox" size={20} color="white" />
          <View>
            <Text style={{ color: 'white', marginLeft: 10, fontSize: 18 }}>
              Inbox
            </Text>
          </View>
        </View>
        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
          <View style={styles.label}>
          <Feather name="user" size={20} color="white" />
            <View>
              <Text style={{ color: 'white', marginLeft: 10, fontSize: 18 }}>
                Account setting
              </Text>
            </View>
            </View>
            <View>
            <AntDesign
            onPress={deleteacccount}
             name="delete" size={24} color="red"  style={{marginVertical: 16,marginRight:10}}/>
              </View>
        </View>
        <View style={styles.label}>
          <MaterialIcons name="language" size={24} color="white" />
          <View>
            <Text style={{ color: 'white', marginLeft: 10, fontSize: 18 }}>
              Language
            </Text>
          </View>
        </View>
        <View style={styles.label}>
          <AntDesign name="infocirlceo" size={24} color="white" />
          <View>
            <Text style={{ color: 'white', marginLeft: 10, fontSize: 18 }}>
              Help,FAQ
            </Text>
          </View>
        </View>
        <View style={{ marginHorizontal: 20 }}>
          <Text style={{ color: 'grey' }}>Term & condition</Text>
          <Text style={{ color: 'grey' }}>Privacy & policy</Text>
        </View>
        <Pressable onPress={() => dispatch(signout())} style={{ borderWidth: 1, padding: 7, borderColor: 'grey', borderRadius: 7, marginVertical: 30 }}>
          <Text style={{ color: 'red', textAlign: 'center' }}>
            Logout
          </Text>
        </Pressable>
      </View>

      <StatusBar style={{ backgroundColor: '#0F1417' }} />
    </View>

  )
}

export default Profile;


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0F1417',
    height: height,

  },
  containerprofile: {
    backgroundColor: '#2B2D30',
    height: height,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: -20
  },
  label: {
    flexDirection: 'row',
    marginLeft: 20,
    marginVertical: 16

  }
})

