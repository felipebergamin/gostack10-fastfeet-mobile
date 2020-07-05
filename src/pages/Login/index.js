import React from 'react';
import { Platform } from 'react-native';

import { Container, SignInButton, ButtonText, Image } from './styles';
import TextInput from '~/components/TextInput';

const Login = () => {
  return (
    <Container enabled behavior={Platform.OS === 'ios' ? 'padding' : null}>
      <Image source={require('~/assets/logo-white.png')} />

      <TextInput placeholder="Informe seu ID de cadastro" />

      <SignInButton>
        <ButtonText>Entrar no Sistema</ButtonText>
      </SignInButton>
    </Container>
  );
};

export default Login;
