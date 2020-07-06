import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { StatusBar, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import {
  Container,
  Header,
  HeaderContent,
  HeaderTitle,
  ContentCard,
  CardHeader,
  CardBody,
  CardTitle,
  CardText,
  BodyRow,
  BodyGroup,
  ButtonGroup,
  Button,
  ButtonText,
  CardsContainer,
} from './styles';

const OrderDetail = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const { params } = route;

  return (
    <Container>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />

      <Header>
        <HeaderContent>
          <TouchableOpacity
            onPress={navigation.goBack}
            style={{ position: 'absolute', left: 20 }}
          >
            <Icon name="arrow-back" size={26} color="#fff" />
          </TouchableOpacity>
          <HeaderTitle>Detalhes da Entrega</HeaderTitle>
        </HeaderContent>
      </Header>

      <CardsContainer>
        <ContentCard>
          <CardHeader>
            <CardTitle>Informações da Entrega</CardTitle>
          </CardHeader>

          <CardBody>
            <CardText label>Destinatário</CardText>
            <CardText>{params.recipient.name}</CardText>

            <CardText label>Endereço de Entrega</CardText>
            <CardText>
              {params.recipient.street}, {params.recipient.number},{' '}
              {params.recipient.city} - {params.recipient.state},{' '}
              {params.recipient.cep}
            </CardText>

            <CardText label>Produto</CardText>
            <CardText>{params.product}</CardText>
          </CardBody>
        </ContentCard>

        <ContentCard>
          <CardHeader>
            <CardTitle>Situação da Entrega</CardTitle>
          </CardHeader>

          <CardBody>
            <CardText label>Status</CardText>
            <CardText>{params.status}</CardText>

            <BodyRow>
              <BodyGroup>
                <CardText label>Data de Retirada</CardText>
                <CardText>{params.start_date || '--/--/----'}</CardText>
              </BodyGroup>

              <BodyGroup>
                <CardText label>Data de Entrega</CardText>
                <CardText>{params.end_date || '--/--/----'}</CardText>
              </BodyGroup>
            </BodyRow>
          </CardBody>
        </ContentCard>
      </CardsContainer>

      <ButtonGroup>
        <Button onPress={() => navigation.navigate('SendProblem', params)}>
          <Icon size={26} color="#E74040" name="close-circle-outline" />
          <ButtonText>Informar um Problema</ButtonText>
        </Button>
        <Button onPress={() => navigation.navigate('ListProblems', params)}>
          <Icon size={26} color="#E7BA40" name="information-circle-outline" />
          <ButtonText>Visualizar Problemas</ButtonText>
        </Button>
        <Button>
          <Icon size={26} color="#7D40E7" name="checkmark-circle-outline" />
          <ButtonText>Confirmar Entrega</ButtonText>
        </Button>
      </ButtonGroup>
    </Container>
  );
};

export default OrderDetail;
