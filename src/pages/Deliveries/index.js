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
  DeliveryCard,
  CardHeader,
  DeliveryName,
  CardContent,
  CardFooter,
  FooterBlock,
  BlockLabel,
  BlockValue,
  FooterLink,
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

      <DeliveryCard>
        <CardHeader>
          <Icon name="local-shipping" color="#7D40E7" size={28} />

          <DeliveryName>Encomenda 01</DeliveryName>
        </CardHeader>

        <CardContent>
          <DeliveryName>XD</DeliveryName>
        </CardContent>

        <CardFooter>
          <FooterBlock>
            <BlockLabel>Data</BlockLabel>
            <BlockValue>15/01/2010</BlockValue>
          </FooterBlock>

          <FooterBlock>
            <BlockLabel>Cidade</BlockLabel>
            <BlockValue>Rio Preto</BlockValue>
          </FooterBlock>

          <FooterBlock>
            <TouchableOpacity>
              <FooterLink>Ver Detalhes</FooterLink>
            </TouchableOpacity>
          </FooterBlock>
        </CardFooter>
      </DeliveryCard>
    </Container>
  );
};

export default Deliveries;
