import axios from 'axios';
import { Payment } from '../models/models';

const BASE_PATH = 'http://178.63.13.157:8090/mock-api/api';

export const reportApi = () => {
  const getPayments = async (
    from: string,
    to: string,
    projectId?: string,
    gatewayId?: string,
  ): Promise<Payment[]> => {
    const body = {
      from,
      to,
      projectId,
      gatewayId,
    };

    const response = await axios.post(`${BASE_PATH}/report`, body);

    return response.data.data;
  };

  return {
    getPayments,
  };
};
