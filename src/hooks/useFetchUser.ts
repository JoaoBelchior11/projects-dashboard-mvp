import { useEffect, useState } from 'react';
import { usersApi } from '../api/users';
import { User } from '../models/models';

export const useFetchUser = () => {
  const [user, setUser] = useState<User>();

  useEffect(() => {
    usersApi()
      .getAllUsers()
      .then((resp) => setUser(resp[0]));
  }, []);

  return {
    user,
  };
};
