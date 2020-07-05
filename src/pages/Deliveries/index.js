import React, { useState } from 'react';
import { View, StatusBar, TouchableOpacity, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { AuthContext } from '~/contexts/auth';
import api from '~/services/api';
import DeliveryCard from '~/components/DeliveryCard';
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
  ItemSeparator,
} from './styles';

const Deliveries = () => {
  const [list, setList] = useState(null);
  const auth = React.useContext(AuthContext);

  React.useEffect(() => {
    const loadData = async () => {
      const { data } = await api.get(`/couriers/${auth.user.id}/pending`);
      setList(data);
    };

    loadData();
  }, [auth.user.id]);

  // eslint-disable-next-line react/prop-types
  const renderItem = ({ item }) => <DeliveryCard data={item} />;

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

        <TouchableOpacity onPress={auth.logout}>
          <Icon name="exit-to-app" color="#E74040" size={28} />
        </TouchableOpacity>
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

      <FlatList
        data={list}
        keyExtractor={(item) => String(item.id)}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={ItemSeparator}
      />
    </Container>
  );
};

export default Deliveries;
