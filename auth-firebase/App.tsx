import { useContext, useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import AppLoading from "expo-app-loading";

import FormStack from "@/navigation/FormStack";
import LoggedStack from "@/navigation/LoggedStack";
import { AuthContextProvider, AuthContext } from "@/context/AuthContext";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Navigation = () => {
  const authCtx = useContext(AuthContext);
  
  return (
    <NavigationContainer>
      <StatusBar style="light" />
      {authCtx.isAuthenticated ? <LoggedStack /> : <FormStack />}
    </NavigationContainer>
  );
};

const Root = () => {
  const [isTryingLogin, setIsTryingLogin] = useState(true);
  const authCtx = useContext(AuthContext);
  
  useEffect(() => {
    async function getToken() {
      const storedToken = await AsyncStorage.getItem("token");
      if(storedToken){
        authCtx.authenticate(storedToken);
      }
      setIsTryingLogin(false);
    }
    getToken();
  }, [])

  if(isTryingLogin){
    return <AppLoading/>;
  }

  return <Navigation />
}

export default function App() {
  return (
    <AuthContextProvider>
      <Root />
    </AuthContextProvider>
  );
}
