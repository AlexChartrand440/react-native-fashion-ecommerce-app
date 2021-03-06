import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Onboarding from "../../views/auth/Onboarding";
import Welcome from "../../views/auth/Welcome";
import LogIn from "../../views/auth/LogIn";
import { AuthRoutes } from "../../types";

const AuthStack = createStackNavigator<AuthRoutes>();

const AuthNavigator: React.FC = () => {
  return (
    <AuthStack.Navigator headerMode="screen">
      <AuthStack.Screen
        name="Onboarding"
        component={Onboarding}
        options={{ headerShown: false }}
      />
      <AuthStack.Screen
        name="Welcome"
        component={Welcome}
        options={{
          headerShown: true,
          headerTitle: "",
          headerTransparent: true,
        }}
      />
      <AuthStack.Screen
        name="LogIn"
        component={LogIn}
        options={{ headerShown: false }}
      />
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;
