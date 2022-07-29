import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import PageOne from "./page1/index";
import MyTabBar from "../../components/MyTabBar";
import PageTwo from "./page2";
import PageThree from "./page3";
import PageFour from "./page4";


const styles ={
  headerShown: false,
  tabBarShowLabel: true,
  tabBarStyle:{
    backgroundColor:'yellow',
  },
}

const Tabs = ()=>{
  const Tab = createBottomTabNavigator()
  return(
    <Tab.Navigator screenOptions={styles} tabBar={(props)=> <MyTabBar {...props} /> }>
      <Tab.Screen name="PageOne" component={PageOne}/>
      <Tab.Screen name='PageTwo' component={PageTwo}/>
      <Tab.Screen name='PageThree' component={PageThree}/>
      <Tab.Screen name='PageFour' component={PageFour}/>
    </Tab.Navigator>
  )
}

export default Tabs;

