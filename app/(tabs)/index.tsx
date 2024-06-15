import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SplashScreen from "../../components/SplashScreen";
import HomeScreen from "../../components/HomeScreen";

const Stack = createStackNavigator();

const App = () => {
  return (
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
  );
};

export default App;
