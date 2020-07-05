import React from 'react';
import { View, StatusBar, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { AuthContext } from '~/contexts/auth';
import {
  Container,
  UserInfoBox,
  UserImage,
  WelcomeText,
  UserName,
  Spacer,
  TitleRow,
  Title,
  FilterText,
} from './styles';

const Deliveries = () => {
  const auth = React.useContext(AuthContext);

  return (
    <Container>
      <StatusBar barStyle="dark-content" />

      <UserInfoBox>
        <UserImage source={{ uri: auth.user.avatar.url }} />

        <View>
          <WelcomeText>Bem vindo de volta,</WelcomeText>

          <UserName>{auth?.user.name}</UserName>
        </View>

        <Spacer />

        <Icon name="exit-to-app" color="#E74040" size={28} />
      </UserInfoBox>

      <TitleRow>
        <Title>Entregas</Title>

        <Spacer />

        <TouchableOpacity>
          <FilterText selected>Pendentes</FilterText>
        </TouchableOpacity>
        <TouchableOpacity>
          <FilterText>Entregues</FilterText>
        </TouchableOpacity>
      </TitleRow>
    </Container>
  );
};

export default Deliveries;
