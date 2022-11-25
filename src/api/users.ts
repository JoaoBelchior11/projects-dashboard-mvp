import axios from 'axios';
import { User } from '../models/models';

const BASE_PATH = 'http://178.63.13.157:8090/mock-api/api';

export const usersApi = () => {
  const getAllUsers = async (): Promise<User[]> => {
    const response = await axios.get(`${BASE_PATH}/users`);

    return response.data.data;
  };

  return {
    getAllUsers,
  };
};
