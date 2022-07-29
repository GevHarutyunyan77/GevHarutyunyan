import React from "react";
import Login from "../screens/login";
import Forget from "../screens/forgetLogin";
import Homepage from "../screens/homepages";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

function Tabs(props) {

  return (
    <Stack.Navigator screenOptions={{ headerShown: false,}} >
      <Stack.Screen name={'login'} component={Login}/>
      <Stack.Screen name={'forget'} component={Forget}/>
      <Stack.Screen name={'Homepage'} component={Homepage}/>
    </Stack.Navigator>
  );
}

export default Tabs;
