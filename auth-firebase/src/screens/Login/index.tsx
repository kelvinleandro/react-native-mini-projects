import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form/";
import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Alert,
} from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { FormStackParamList } from "@/navigation/FormStack";
import { Button, ActivityIndicator } from "react-native-paper";

import Input from "@/components/Input";
import { FIREBASE_AUTH } from "firebase.config";
import { loginUser } from "@/utils/firebase";
import { AuthContext } from "@/context/AuthContext";

interface LoginFields {
  email: string;
  password: string;
}

type Props = {
  navigation: NativeStackNavigationProp<FormStackParamList, "Login">;
};

const Login = ({ navigation }: Props) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFields>();
  const authCtx = useContext(AuthContext);
  const [isLogging, setIsLogging] = useState(false);

  const loginHandler = async (credentials: LoginFields) => {
    console.log(credentials);
    setIsLogging(true);
    try{
      const response = await loginUser(credentials.email, credentials.password);
      const token = await response.user.getIdToken();
      authCtx.authenticate(token);
    }
    catch(error){
      if (error instanceof Error && error.message.includes('auth/invalid-credential')) {
        Alert.alert("Login Error", "Invalid credentials. Please check your email and password.");
      } else {
        console.log('Login Error:', error);
        Alert.alert("Login Error", "Failed to Login. Please try again later.");
      }
    }
    setIsLogging(false);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <View style={styles.root}>
        <Text style={styles.screenTitle}>Login</Text>

        <Input
          control={control}
          name="email"
          textInputConfig={{
            label: "Email",
            placeholder: "Type your email",
            keyboardType: "email-address",
          }}
          rules={{
            required: "Email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Invalid email address",
            },
          }}
        />

        <Input
          control={control}
          name="password"
          textInputConfig={{
            label: "Password",
            placeholder: "Type your password",
            secureTextEntry: true,
          }}
          rules={{
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password must have at least 8 characters",
            },
          }}
        />

        <Button
          mode="contained"
          onPress={handleSubmit(loginHandler)}
          labelStyle={{ fontSize: 16 }}
          style={{ width: 120, marginVertical: 8 }}
          buttonColor="#e99547"
          textColor="#fcfcfc"
        >
          {!isLogging ? "Login" : (<ActivityIndicator color="#fff" />)}
        </Button>

        <Button
          mode="text"
          onPress={() => navigation.replace("SignUp")}
          textColor="#e99547"
        >
          Don't have an account? Sign up
        </Button>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Login;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fcfcfc",
    padding: 38,
  },
  screenTitle: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 14,
    color: "#1c2227",
  },
});
