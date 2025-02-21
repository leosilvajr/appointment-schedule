import { Image } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import icon from "../../constants/icon"

import Home from "../home/home";
import Calendar from "../calendar/calendar";
import Profile from "../profile/profile";
import { COLORS } from "../../constants/theme";


const Tab = createBottomTabNavigator(); 
function Main(){
    return  <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} options={{
                headerTitleAlign: "center",
                headerTitle: () => {
                    return <Image source={icon.logo} style={{width: 255, height: 50}}/>
                },
                tabBarShowLabel: false,
                tabBarIcon: ({focused}) => {
                    return <Image source={icon.home} style={
                        {
                            width: 30, 
                            height: 30,
                            opacity: focused ? 1 : 0.3,
                            tintColor: COLORS.green
                        }
                    }/>
                }
            }}/>

            <Tab.Screen name="Calendar" component={Calendar} options={{
                headerTitleAlign: "center",
                headerTitle: () => {
                    return <Image source={icon.logo} style={{width: 255, height: 50}}/>
                },
                tabBarShowLabel: false,
                unmountOnBlur: true,
                tabBarIcon: ({focused}) => {
                    return <Image source={icon.calendar} style={
                        {
                            width: 30, 
                            height: 30,
                            opacity: focused ? 1 : 0.3,
                            tintColor: COLORS.green
                        }
                    }/>
                }
            }}/>

            <Tab.Screen name="Profile" component={Profile} options={{
                headerTitleAlign: "center",
                headerTitle: () => {
                    return <Image source={icon.logo} style={{width: 255, height: 50}}/>
                },
                tabBarShowLabel: false,
                unmountOnBlur: true,
                tabBarIcon: ({focused}) => {
                    return <Image source={icon.profile} style={
                        {
                            width: 30, 
                            height: 30,
                            opacity: focused ? 1 : 0.3,
                            tintColor: COLORS.green
                        }
                    }/>
                }
            }}/>

        </Tab.Navigator>
}

export default Main