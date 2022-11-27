import { StatusBar } from "expo-status-bar";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Signin from "./pages/Signin";
import RegisterEmp from "./pages/RegisterEmployees";
import RegisterPlanes from "./pages/RegisterPlanes";
import Employees from "./pages/Employees";
import Planes from "./pages/Planes";
const Stack = createStackNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Signin">
          <Stack.Screen
            name="Signin"
            component={Signin}
            options={{ headerShown: false }}
          ></Stack.Screen>
          <Stack.Screen
            name="Employees"
            component={Employees}
            options={{ headerShown: false }}
          ></Stack.Screen>
          <Stack.Screen
            name="Planes"
            component={Planes}
            options={{ headerShown: false }}
          ></Stack.Screen>
          <Stack.Screen
            name="RegisterEmp"
            component={RegisterEmp}
            options={{ headerShown: false }}
          ></Stack.Screen>
          <Stack.Screen
            name="RegisterPlanes"
            component={RegisterPlanes}
            options={{ headerShown: false }}
          ></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
