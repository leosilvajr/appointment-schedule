import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { COLORS } from '../constants/theme';

import Main from "../screens/main/main";
import Home from "../screens/home/home";
import Calendar from "../screens/calendar/calendar";
import Profile from "../screens/profile/profile";
import Services from "../screens/services/services";
import Schedule from "../screens/schedule/schedule";

const Stack = createNativeStackNavigator();

function RoutesPrivate() {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="main" 
                component={Main} 
                options={{ headerShown: false }} 
            />

            <Stack.Screen 
                name="services" 
                component={Services} 
                options={{
                    headerTitle: "Serviços", // Alterado para português
                    headerTitleAlign: "center",
                    headerShadowVisible: false,
                    headerTintColor: COLORS.white,
                    headerStyle: {
                        backgroundColor: COLORS.green,
                    },
                }} 
            />

            <Stack.Screen 
                name="schedule" 
                component={Schedule} 
                options={{
                    headerTitle: "Fazer um agendamento", // Alterado para português
                    headerTitleAlign: "center",
                    headerShadowVisible: false,
                    headerTintColor: COLORS.white,
                    headerStyle: {
                        backgroundColor: COLORS.green,
                    },
                }} 
            />
            
            <Stack.Screen 
                name="calendar" 
                component={Calendar} 
                options={{ headerShown: false }} 
            />

            {/* <Stack.Screen name="home" component={Home} options={{headerShown: false}}/> */}

            {/* <Stack.Screen name="profile" component={Profile} options={{headerShown: false}}/> */}
        </Stack.Navigator>
    );
}

export default RoutesPrivate;
