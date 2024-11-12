import { View, Image } from 'react-native'
import React from 'react'
import { Tabs, Redirect} from 'expo-router'
import { icons } from '../../constants'

const TabIcon=({icon,color,name,focused})=>{
  return (
    <View>
      <Image style={{width:20}}
        source={icon}
        resizeMode="contain"
        className="w-1 h-1"
        tintColor={color}
      />
    </View>
  )  
}
const TabLayout = () => {
  return (
   <>
      <Tabs>
        <Tabs.Screen
          name="home"
          options={{
            title:'Home',
            headerShown:false,
            tabBarIcon: ({color,focused}) =>(
              <TabIcon
                icon={icons.home}
                color={color}
                name="Home"
                focused={focused}
              />
            )
          }} 
        />// end of Home Screen
        <Tabs.Screen
          name="live"
          options={{
            title:'Live',
            headerShown:false,
            tabBarIcon: ({color,focused}) =>(
              <TabIcon
                icon={icons.live}
                color={color}
                name="Live"
                focused={focused}
              />
            )
          }} 
        />//end of Live Screen
        <Tabs.Screen
          name="notif"
          options={{
            title:'Notification',
            headerShown:false,
            tabBarIcon: ({color,focused}) =>(
              <TabIcon
                icon={icons.notif}
                color={color}
                name="Notif"
                focused={focused}
              />
            )
          }} 
        />//end of Notification Screen
        <Tabs.Screen
          name="profile"
          options={{
            title:'Profile',
            headerShown:false,
            tabBarIcon: ({color,focused}) =>(
              <TabIcon
                icon={icons.profile}
                color={color}
                name="Profile"
                focused={focused}
              />
            )
          }} 
        />//end of Profile Screen
      </Tabs>
   </>
  )
}
export default TabLayout