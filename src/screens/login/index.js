import React, { useState } from "react";
import { Image, Pressable, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import myStyle from "./style";
import loginWallpaper from "../../assets/images/loginWalpaper.png";
import userlogo from "../../assets/images/logoUser.png";
import locklogo from "../../assets/images/lock.png";
import showlogo from "../../assets/images/Show.png";



function Login({navigation}) {

  const [show, setShow] = useState(true);



  return (
    <ScrollView contentContainerStyle={myStyle.mainView}>
    <View >
      <Image source={loginWallpaper} style={myStyle.image} />
      <Text style={myStyle.loginText}> Log in</Text>

      <View style={myStyle.inputView}>

        <View style={myStyle.viewInputStyle}>
          <Image source={userlogo} style={myStyle.logo} />
          <TextInput style={myStyle.textInputStyle} editableeditable placeholder={"Email:"} />
        </View>

        <View style={myStyle.viewInputStyle}>
          <Image source={locklogo} style={myStyle.logo} />
          <TextInput style={myStyle.textInputStyle} editableeditable placeholder={"Password:"} secureTextEntry={show} />
          <TouchableOpacity onPressIn={()=>{setShow(!show)}} style={myStyle.eyeView}>
            <Image source={showlogo} style={myStyle.eye} />
          </TouchableOpacity>
        </View>

        <Pressable style={myStyle.loginButton} onPress={()=>{navigation.navigate('Homepage')}} >
          <Text style={myStyle.buttonText}>Login</Text>
        </Pressable>

        <Pressable style={myStyle.forgetView} onPress={()=>{navigation.navigate('forget')}}>
          <Text style={myStyle.forget}>Forgot Password?</Text>
        </Pressable>
      </View>
    </View>
    </ScrollView>

  );
}

export default Login;
