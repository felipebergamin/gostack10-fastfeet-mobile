import React, { createContext, useState, useCallback } from 'react';
import PropTypes from 'prop-types';

import api from '~/services/api';

export const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [user, setUser] = useState(null);

  const tryLogin = useCallback((id) => {
    const login = async (courierId) => {
      const { data } = await api.post('auth-courier/', {
        id: courierId,
      });

      setUser(data);
      setIsAuth(true);
    };

    return login(id);
  }, []);

  const logout = useCallback(() => {
    setIsAuth(false);
    setUser(null);
  }, []);

  return (
    <AuthContext.Provider value={{ isAuth, user, tryLogin, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthProvider;
