import React, { useContext, useState } from "react";
import { Spacer } from "../../../components/spacer/spacer.component";
import { TextInput } from "react-native-paper";
import {
  AccountBackground,
  AccountCover,
  AccountContainer,
  AuthButton,
  AccountInput,
} from "../components/account.styles";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";

export const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const { onLogin } = useContext(AuthenticationContext);

  return (
    <AccountBackground>
      <AccountCover />
      <AccountContainer>
        <AccountInput
          label="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Spacer size="medium" />
        <AccountInput
          label="Password"
          value={password}
          onChangeText={(text) => setpassword(text)}
          secureTextEntry={true}
        />
        <Spacer size="large" />
        <AuthButton
          color="blue"
          mode="contained"
          onPress={() => onLogin(email, password)}
        >
          Login
        </AuthButton>
      </AccountContainer>
    </AccountBackground>
  );
};
