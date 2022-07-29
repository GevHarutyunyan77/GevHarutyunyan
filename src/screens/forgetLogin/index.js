import React from "react";
import { Image, Pressable, ScrollView, Text, TextInput, View } from "react-native";
import myStyle from "./style";
import loginWallpaper from "../../assets/images/forgetWallpaper.png";
import userlogo from "../../assets/images/logoUser.png";


function Forget({navigation}) {


  return (
    <ScrollView contentContainerStyle={myStyle.mainView}>
    <View style={myStyle.mainView}>


        <Image source={loginWallpaper} style={myStyle.image} />
      <View style={myStyle.inputView}>
        <Text style={myStyle.loginText}>Forgot Password</Text>
        <Text style={myStyle.text}> Enter your email address and we'll email you your new password</Text>

        <View style={myStyle.viewInputStyle}>
          <Image source={userlogo} style={myStyle.logo} />
          <TextInput style={myStyle.textInputStyle} editableeditable placeholder={"Email:"} />
        </View>

        <Pressable style={myStyle.loginButton}>
          <Text style={myStyle.buttonText}>Send</Text>
        </Pressable>

        <Pressable style={myStyle.backtoView} onPress={()=>{navigation.navigate('login')}}>
          <Text style={myStyle.backto}>Back To <Text style={myStyle.greenText}>Login</Text> </Text>
        </Pressable>


      </View>
    </View>
    </ScrollView>
  );
}

export default Forget;
