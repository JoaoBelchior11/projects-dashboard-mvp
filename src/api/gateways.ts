import axios from 'axios';
import { Gateway } from '../models/models';

const BASE_PATH = 'http://178.63.13.157:8090/mock-api/api';

export const gatewaysApi = () => {
  const getAllGateways = async (): Promise<Gateway[]> => {
    const response = await axios.get(`${BASE_PATH}/gateways`);

    return response.data.data;
  };

  return {
    getAllGateways,
  };
};
