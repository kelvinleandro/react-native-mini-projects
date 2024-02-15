import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { BlurView } from 'expo-blur';

import Home from "./screens/Home";
import Search from "./screens/Search";
import Notification from "./screens/Notification";
import Profile from "./screens/Profile";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            
            if (route.name === "Home") {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === "Search") {
              iconName = "magnify";
            } else if (route.name === "Notification") {
              iconName = focused ? "bell" : "bell-outline";
            } else if (route.name === "Profile") {
              iconName = focused ? "account-circle" : "account-circle-outline";
            }
            
            return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
          },
          // adding the floating tab navigation
          tabBarShowLabel: false,
          tabBarActiveTintColor: "black",
          tabBarInactiveTintColor: "gray",
          tabBarStyle: {
            position: 'absolute',
            bottom: 25,
            left: 20,
            right: 20,
            elevation: 0,
            borderRadius: 15,
            height: 60
          },
          // adding the blur effect
          tabBarBackground: () => (
            <BlurView intensity={80} style={{...StyleSheet.absoluteFillObject, overflow: 'hidden', backgroundColor: 'transparent', borderRadius: 15}} />
          ),
        })}
        
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Search" component={Search} />
        <Tab.Screen name="Notification" component={Notification} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
