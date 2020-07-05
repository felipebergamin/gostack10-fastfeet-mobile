import React from 'react';
import { View, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { AuthContext } from '~/contexts/auth';
import {
  UserInfoBox,
  UserImage,
  WelcomeText,
  UserName,
  Spacer,
} from './styles';

const Deliveries = () => {
  const auth = React.useContext(AuthContext);

  return (
    <View>
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
    </View>
  );
};

export default Deliveries;
