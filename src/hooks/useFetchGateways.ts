import { useEffect, useState } from 'react';
import { gatewaysApi } from '../api';
import { Gateway } from '../models/models';

export const useFetchGateways = () => {
  const [gateways, setGateways] = useState<Gateway[]>([]);

  useEffect(() => {
    gatewaysApi()
      .getAllGateways()
      .then((resp) => setGateways(resp));
  }, []);

  return {
    gateways,
  };
};
