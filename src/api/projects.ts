import axios from 'axios';
import { Project } from '../models/models';

const BASE_PATH = 'http://178.63.13.157:8090/mock-api/api';

export const projectsApi = () => {
  const getAllProjects = async (): Promise<Project[]> => {
    const response = await axios.get(`${BASE_PATH}/projects`);

    return response.data.data;
  };

  return {
    getAllProjects,
  };
};
