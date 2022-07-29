import React, { useState } from "react";
import { View, TouchableOpacity, ImageBackground, Image } from "react-native";
import myStyle from "./style";
import resho from "../constants/resho";
import myArray from "../constants/myImageArray";
import addIconWhite from "../assets/images/AddWhite.png";
import addIconBlack from '../assets/images/AddBlack.png'

function MyTabBar({ state, descriptors, navigation }) {

  const [active, setActive] = useState(true);


  return (
    <View style={myStyle.bottomContainer}>
      <View style={myStyle.buttonBigView}>
        <TouchableOpacity onPressIn={() => {setActive(!active)}}>
          <Image
            source={active ? addIconWhite : addIconBlack }
            style={{ width: 120 * resho, height: 120 * resho, marginTop: -20 }} resizeMode="contain" />
        </TouchableOpacity>

      </View>
      <View style={myStyle.tabContent}>

        <ImageBackground source={require("../assets/images/TabbarWallpaper.png")} style={myStyle.myImageStyle} />

        {
          state.routes.map((route, index) => {
            const { options } = descriptors[route.key];
            const label =
              options.tabBarLabel !== undefined
                ? options.tabBarLabel
                : options.title !== undefined
                  ? options.title
                  : route.name;

            const isFocused = state.index === index;

            const onPress = () => {
              const event = navigation.emit({
                type: "tabPress",
                target: route.key,
                canPreventDefault: true,
              });

              if (!isFocused && !event.defaultPrevented) {
                // The `merge: true` option makes sure that the params inside the tab screen are preserved
                navigation.navigate({ name: route.name, merge: true });
              }
            };

            const onLongPress = () => {
              navigation.emit({
                type: "tabLongPress",
                target: route.key,
              });
            };

            return (
              <TouchableOpacity
                accessibilityRole="button"
                accessibilityState={isFocused ? { selected: true } : {}}
                accessibilityLabel={options.tabBarAccessibilityLabel}
                testID={options.tabBarTestID}
                onPress={onPress}
                onLongPress={onLongPress}
                style={{ flex: 1, alignItems: "center", justifyContent: "center" }} key={index}>

                <Image
                  // source={isFocused ? homeActive : homePassive}
                  source={isFocused ? myArray[index][0] : myArray[index][1]}
                  style={isFocused ? { width: 44 * resho, height: 44 * resho } : {
                    width: 24 * resho,
                    height: 24 * resho,
                  }} resizeMode="contain" />

              </TouchableOpacity>
            );
          })
        }
      </View>
    </View>
  );
}

export default MyTabBar;
