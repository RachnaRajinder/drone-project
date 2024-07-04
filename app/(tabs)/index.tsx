import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SplashScreen from "../../components/SplashScreen";
import HomeScreen from "../../components/HomeScreen";
import SignUpScreen from "../../components/SignUpScreen";
import SignInScreen from "../../components/SignInScreen";
import VideoListScreen from "@/components/VideoListScreen";
import FlyScreen from "@/components/FlyScreen";
import DroneDetailScreen from "@/components/DroneDetailScreen";
import MapScreen from "@/components/MapScreen";
import SettingScreen from "@/components/SettingScreen";
import AnalysisScreen from "@/components/AnalysisScreen";

const Stack = createStackNavigator();

const App = () => {
  return (
    <Stack.Navigator initialRouteName="SplashScreen">
      <Stack.Screen
        name="SplashScreen"
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
      <Stack.Screen
        name="MapScreen"
        component={MapScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SettingScreen"
        component={SettingScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AnalysisScreen"
        component={AnalysisScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default App;
