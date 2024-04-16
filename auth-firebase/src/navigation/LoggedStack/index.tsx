import {
  createNativeStackNavigator,
} from "@react-navigation/native-stack";

import HomeScreen from "@/screens/HomeScreen";

export type LoggedStackParamList = {
  HomeScreen: undefined;
};

const Stack = createNativeStackNavigator<LoggedStackParamList>();

const LoggedStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default LoggedStack;
