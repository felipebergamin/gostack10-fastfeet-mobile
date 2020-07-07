import React, { useState, useCallback } from 'react';
import { View, StatusBar, TouchableOpacity, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useFocusEffect } from '@react-navigation/native';

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
  const auth = React.useContext(AuthContext);
  const [list, setList] = useState(null);
  const [listType, setListType] = useState('pending');
  const [loading, setLoading] = useState(true);

  const apiUrl = React.useMemo(() => {
    const urls = {
      pending: `/couriers/${auth.user.id}/pending`,
      delivered: `/couriers/${auth.user.id}/delivered`,
    };

    return urls[listType];
  }, [listType, auth.user.id]);

  const loadData = useCallback(() => {
    const fetchData = async () => {
      setLoading(true);

      const { data } = await api.get(apiUrl);
      setList(data);

      setLoading(false);
    };

    fetchData();
  }, [apiUrl]);

  useFocusEffect(loadData);

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

        <TouchableOpacity onPress={() => setListType('pending')}>
          <FilterText selected={listType === 'pending'}>Pendentes</FilterText>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setListType('delivered')}>
          <FilterText selected={listType === 'delivered'}>Entregues</FilterText>
        </TouchableOpacity>
      </TitleRow>

      <FlatList
        data={list}
        keyExtractor={(item) => String(item.id)}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={ItemSeparator}
        onRefresh={loadData}
        refreshing={loading}
      />
    </Container>
  );
};

export default Deliveries;
