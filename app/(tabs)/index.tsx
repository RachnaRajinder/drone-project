import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SplashScreen from "../../components/SplashScreen";
import HomeScreen from "../../components/HomeScreen";
import SignUpScreen from "../../components/SignUpScreen";
import SignInScreen from "../../components/SignInScreen";
import VideoListScreen from "@/components/VideoListScreen";
import FlyScreen from "@/components/FlyScreen";
import DroneDetailScreen from "@/components/DroneDetailScreen";

const Stack = createStackNavigator();

const App = () => {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Splash"
        component={SplashScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignUpScreen"
        component={SignUpScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignInScreen"
        component={SignInScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="VideoListScreen"
        component={VideoListScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="FlyScreen"
        component={FlyScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="DroneDetailScreen"
        component={DroneDetailScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default App;
