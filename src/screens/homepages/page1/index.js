import React, { useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import myStyle from "../page1/style";
import CalendarSVG from "../../../assets/svg/CalendarIconSVG";
import MyCalendar from "../../../components/Calendar";




function PageOne(props) {
  const [showCalendar, setShowCalendar] = useState(true);
  const [activeFild, setactiveFild] = useState('all')


  return (
    <ScrollView contentContainerStyle={myStyle.mainView}>
      <View style={myStyle.container}>
        <Text style={myStyle.title}>
          Hello, Name
        </Text>
        <Image source={require("../../../assets/images/HomePageWallpaper.png")} style={myStyle.wallpaper} />


        <View style={myStyle.filterView}>
          <TouchableOpacity style={activeFild=='tasks' ? myStyle.activefilterFild : myStyle.filterFild}
                            onPressIn={()=>setactiveFild('tasks')}>
            <Text style={activeFild=='tasks'? myStyle.activefilterText : myStyle.filterText}>Tasks</Text>
          </TouchableOpacity>
          <TouchableOpacity style={activeFild=='events' ? myStyle.activefilterFild : myStyle.filterFild}
                            onPressIn={()=>setactiveFild('events')} >
            <Text style={activeFild=='events'? myStyle.activefilterText : myStyle.filterText}>Events</Text>
          </TouchableOpacity>
          <TouchableOpacity style={activeFild=='all' ? myStyle.activefilterFild : myStyle.filterFild}
                            onPressIn={()=>setactiveFild('all')}>
            <Text style={activeFild=='all'? myStyle.activefilterText : myStyle.filterText}>All</Text>
          </TouchableOpacity>
        </View>

        <View style={myStyle.calendarLine}>
          <Text style={myStyle.date}>
            20 May 2022
          </Text>
          <TouchableOpacity style={showCalendar? myStyle.calendarActiveView : myStyle.calendarView} onPress={()=>{setShowCalendar(!showCalendar)}}>
            <CalendarSVG mycolor={showCalendar? "#FCFCFC": "#347474"} />
          </TouchableOpacity>








        </View>

        <MyCalendar/>

      </View>


    </ScrollView>


  );
}

export default PageOne;
