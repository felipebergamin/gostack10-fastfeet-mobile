import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

import { AuthContext } from '~/contexts/auth';

import Login from '~/pages/Login';
import Deliveries from '~/pages/Deliveries';
import Profile from '~/pages/Profile';

const Tabs = createBottomTabNavigator();

const Routes = () => {
  const auth = useContext(AuthContext);

  if (!auth.isAuth) return <Login />;

  return (
    <NavigationContainer>
      <Tabs.Navigator
        tabBarOptions={{
          activeTintColor: '#7D40E7',
          inactiveTintColor: '#999999',
        }}
      >
        <Tabs.Screen
          name="Deliveries"
          component={Deliveries}
          options={{
            title: 'Entregas',
            tabBarIcon: (props) => <Icon {...props} name="list" />,
          }}
        />

        <Tabs.Screen
          name="Profile"
          component={Profile}
          options={{
            title: 'Meu Perfil',
            tabBarIcon: (props) => <Icon {...props} name="user-circle" />,
          }}
        />
      </Tabs.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
