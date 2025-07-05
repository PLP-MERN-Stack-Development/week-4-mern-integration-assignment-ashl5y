import { useState, useEffect } from 'react';
import { authService } from '../services/api';

const useAuth = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const currentUser = authService.getCurrentUser();
    setUser(currentUser);
  }, []);

  const logout = () => {
    authService.logout();
    setUser(null);
  };

  return { user, setUser, logout };
};

export default useAuth;
