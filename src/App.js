import React from 'react';
import { StatusBar } from 'react-native';

import Routes from '~/routes';

const Home = () => {
  return (
    <>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <Routes />
    </>
  );
};

export default Home;
