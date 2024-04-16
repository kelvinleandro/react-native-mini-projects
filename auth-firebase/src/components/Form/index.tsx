import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Alert,
  Platform,
  KeyboardAvoidingView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TextInput, Button } from "react-native-paper";

import { FormStackType } from "@/navigation/FormStack";

interface FormProps {
  isSignUp?: boolean;
}

const Form = ({ isSignUp = false }: FormProps) => {
  const [input, setInput] = useState({
    email: "",
    repeatEmail: "",
    password: "",
    repeatPassword: "",
  });

  const handleInputChange = (field: keyof typeof input, text: string) => {
    setInput((currentValues) => ({
      ...currentValues,
      [field]: text,
    }));
  };

  const navigation = useNavigation<FormStackType>();

  const handleSubmit = () => {
    Alert.alert("Submit button was clicked");
  };

  const toggleScreen = () => {
    isSignUp ? navigation.replace("Login") : navigation.replace("SignUp");
  };

  const inputStyle = {
    textColor: "#e99547",
    activeOutlineColor: "#e99547",
    outlineColor: "#e99547",
    contentStyle: {
      backgroundColor: "#fcfcfc",
    },
    outlineStyle: {
      borderWidth: 4,
      borderRadius: 2
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <View style={styles.root}>
        <Text style={styles.screenTitle}>{isSignUp ? "Sign Up" : "Login"}</Text>

        <TextInput
          mode="outlined"
          label="Email"
          placeholder="Type your email"
          value={input.email}
          onChangeText={handleInputChange.bind(this, "email")}
          keyboardType="email-address"
          style={styles.input}
          {...inputStyle}
        />

        {isSignUp && (
          <TextInput
            mode="outlined"
            label="Repeat your email"
            placeholder="Repeat your email"
            value={input.repeatEmail}
            onChangeText={handleInputChange.bind(this, "repeatEmail")}
            keyboardType="email-address"
            style={styles.input}
            {...inputStyle}
          />
        )}

        <TextInput
          mode="outlined"
          label="Password"
          placeholder="Type your email"
          value={input.password}
          onChangeText={handleInputChange.bind(this, "password")}
          secureTextEntry={true}
          style={styles.input}
          {...inputStyle}
        />

        {isSignUp && (
          <TextInput
            mode="outlined"
            label="Repeat your password"
            placeholder="Repeat your password"
            value={input.repeatPassword}
            onChangeText={handleInputChange.bind(this, "repeatPassword")}
            secureTextEntry={true}
            style={styles.input}
            {...inputStyle}
          />
        )}

        <Button
          mode="contained"
          onPress={handleSubmit}
          labelStyle={{ fontSize: 16 }}
          style={{ width: 120, marginVertical: 8 }}
          buttonColor="#e99547"
          textColor="#fcfcfc"
        >
          {isSignUp ? "Sign Up" : "Login"}
        </Button>

        <Button mode="text" onPress={toggleScreen} textColor="#e99547">
          {isSignUp
            ? "Already have an account? Login"
            : "Don't have an account? Sign up"}
        </Button>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Form;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1c2227",
  },
  screenTitle: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 14,
    color: "#e99547",
  },
  input: {
    width: "70%",
    marginVertical: 8,
    backgroundColor: "#1c2227",
  },
});
