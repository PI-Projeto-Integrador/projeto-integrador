import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Signin from './pages/Signin';
import RegisterEmp from './pages/RegisterEmployees';
import RegisterPlanes from './pages/RegisterPlanes';
import Employees from './pages/Employees';
import Planes from './pages/Planes';
import Manager from './pages/Manager';
import Maintenance from './pages/Maintenance';
import RegisterMaintenance from './pages/RegisterMaintenance';
import Technician from './pages/Technician';
import UpdateEmployee from './pages/UpdateEmployee';
import UpdatePlanes from './pages/UpdatePlanes';
import UpdateMaintenance from './pages/UpdateMaintenance';
import MaintenanceHistory from './pages/MaintenanceHistory';
import Report from './pages/Report';
const Stack = createStackNavigator();
import PlaneProvider from './context/PlaneContext';
import EmployeeProvider from './context/EmployeeContext';
import TechnicianProvider from './context/TechnicianContext';

import { LogBox } from 'react-native';

// Ignore log notification by message
LogBox.ignoreLogs(['Warning: ...']);

//Ignore all log notifications
LogBox.ignoreAllLogs();
export default function App() {
  return (
    <>
      <NavigationContainer>
        <PlaneProvider>
          <EmployeeProvider>
            <TechnicianProvider>
              <Stack.Navigator initialRouteName="Signin">
                <Stack.Screen
                  name="Signin"
                  component={Signin}
                  options={{ headerShown: false }}></Stack.Screen>
                <Stack.Screen
                  name="Employees"
                  component={Employees}
                  options={{ headerShown: false }}></Stack.Screen>
                <Stack.Screen
                  name="Planes"
                  component={Planes}
                  options={{ headerShown: false }}></Stack.Screen>
                <Stack.Screen
                  name="RegisterEmp"
                  component={RegisterEmp}
                  options={{ headerShown: false }}></Stack.Screen>
                <Stack.Screen
                  name="RegisterPlanes"
                  component={RegisterPlanes}
                  options={{ headerShown: false }}></Stack.Screen>
                <Stack.Screen
                  name="Manager"
                  component={Manager}
                  options={{ headerShown: false }}></Stack.Screen>
                <Stack.Screen
                  name="Maintenance"
                  component={Maintenance}
                  options={{ headerShown: false }}></Stack.Screen>
                <Stack.Screen
                  name="RegisterMaintenance"
                  component={RegisterMaintenance}
                  options={{ headerShown: false }}></Stack.Screen>
                <Stack.Screen
                  name="Technician"
                  component={Technician}
                  options={{ headerShown: false }}></Stack.Screen>
                <Stack.Screen
                  name="UpdateEmployee"
                  component={UpdateEmployee}
                  options={{ headerShown: false }}></Stack.Screen>
                <Stack.Screen
                  name="UpdatePlanes"
                  component={UpdatePlanes}
                  options={{ headerShown: false }}></Stack.Screen>
                <Stack.Screen
                  name="UpdateMaintenance"
                  component={UpdateMaintenance}
                  options={{ headerShown: false }}></Stack.Screen>
                <Stack.Screen
                  name="MaintenanceHistory"
                  component={MaintenanceHistory}
                  options={{ headerShown: false }}></Stack.Screen>
                <Stack.Screen
                  name="Report"
                  component={Report}
                  options={{ headerShown: false }}></Stack.Screen>
              </Stack.Navigator>
            </TechnicianProvider>
          </EmployeeProvider>
        </PlaneProvider>
      </NavigationContainer>
    </>
  );
}
